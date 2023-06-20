function ElevatorView(){
    if(!(this instanceof ElevatorView)){
        return new ElevatorView();
    }

    this.elevatorManager = getElem("#elevator-manager");
    this.elevatorFloorBtn = getElem("#elevator-floor-btn");
    this.clickListener = [];
}

ElevatorView.prototype = { 
    arrivedElevator: function arrivedElevator(payload){
        var selector = this.getElevatorSelector(payload.elevatorIndex);
        var elevator = getElem(selector, this.elevatorManager);
        
        elevator.classList.remove("active");
    },
    getElevatorSelector: function getElevatorSelector(elevatorIndex){
        return '[' + DIRECTIVE.ELEVATOR_INDEX + '=\'' + elevatorIndex + '\']';        
    },
    toggleFloorBtn: function toggleFloorBtn(floor, status){
        var selector = '[' + DIRECTIVE.FLOOR_BTN + '=\'' + floor + '\']';
        var floorBtn = getElem(selector, this.elevatorFloorBtn);
        var method = null;
        
        switch(status){
            case true:
                method = "add";
            break;
            case false:
                method = "remove";
            break;
        }

        if(method !== null){
            floorBtn.classList[method]("active");
        }
    },
    moveElevator: function moveElevator(payload, arrivedSignalCallback){
        var selector = this.getElevatorSelector(payload.elevatorIndex);
        var elevator = getElem(selector, this.elevatorManager);
        var classList = elevator.classList;
        var prevMoveClass = [];
        var i = 0;
        var len = classList.length;
        var className = null;

        for(; i < len; i++){
            className = classList[i];
            if(className.indexOf("elevator-move") > -1){
                prevMoveClass.push(className);
            }
        }

        for(i = 0, len = prevMoveClass.length; i < len; i++){
            className = prevMoveClass[i];
            classList.remove(className);
        }

        classList.add("elevator-move-floor-" + payload.floor);
        classList.add("elevator-move-duration-" + payload.distance);
        classList.add("active");

        setTimeout(
            function(payload, arrivedSignalCallback){
                this.arrivedElevator(payload);
                this.toggleFloorBtn(payload.floor, false);
                arrivedSignalCallback(payload);
            }.bind(this),
            payload.distance * ELEVATOR_SPEC.STANDARD_UNIT_TIME, 
            payload,
            arrivedSignalCallback
        );
    },
    onClickFloorBtn: function onClickFloorBtn(event){
        var eventTarget = event.target;
        var floor = null;
        if(eventTarget.tagName !== "BUTTON"){
            return;
        }

        floor = parseInt(eventTarget.getAttribute(DIRECTIVE.FLOOR_BTN));

        if(this.clickListener.length > 0){
            this.clickListener.forEach(function(callback){
                callback(floor);
            });
        }
    },
    addClickListener: function addClickListener(callback){
        this.clickListener.push(callback);
    },
    init: function init(maxFloor, elevatorLength){
        var floorClass = 'elevator-max-floor-' + maxFloor;

        this.initFloor(maxFloor, floorClass);
        this.initElevator(elevatorLength, floorClass);
    },
    initElevator: function initElevator(elevatorLength, floorClass){
        var elevatorManager = this.elevatorManager;
        var eleveatorItem = getElem('[' + DIRECTIVE.ELEVATOR + ']', elevatorManager);
        var eleveatorItemFrag = document.createDocumentFragment();
        var clonedElevatorItem = null;
        var i = 0;
        
        for(; i < elevatorLength; i++){
            clonedElevatorItem = eleveatorItem.cloneNode(true);
            getElem('.elevator', clonedElevatorItem)
                .setAttribute(DIRECTIVE.ELEVATOR_INDEX, i);
            clonedElevatorItem.classList.add(floorClass);

            eleveatorItemFrag.appendChild(clonedElevatorItem);
        }

        elevatorManager.removeChild(eleveatorItem);
        elevatorManager.appendChild(eleveatorItemFrag);
    },
    initFloor: function initFloor(maxFloor, floorClass){
        var elevatorFloorBtn = this.elevatorFloorBtn;
        var floorBtn = getElem('[' + DIRECTIVE.FLOOR_BTN + ']', elevatorFloorBtn);
        var floorBtnFrag = document.createDocumentFragment();
        var clonedFloorBtn = null;
        
        for(; maxFloor >= 1 ; maxFloor--){
            clonedFloorBtn = floorBtn.cloneNode(true);
            clonedFloorBtn.setAttribute(DIRECTIVE.FLOOR_BTN, maxFloor);
            clonedFloorBtn.textContent = 
                clonedFloorBtn.textContent.replace('{{number}}', maxFloor);

            floorBtnFrag.appendChild(clonedFloorBtn);
        }

        elevatorFloorBtn.classList.add(floorClass);
        elevatorFloorBtn.removeChild(floorBtn);
        elevatorFloorBtn.appendChild(floorBtnFrag);

        elevatorFloorBtn.addEventListener(
            "click",
            this.onClickFloorBtn.bind(this),
            true
        );
    }
};