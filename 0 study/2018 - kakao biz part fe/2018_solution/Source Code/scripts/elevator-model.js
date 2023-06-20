function ElevatorModel(){
    var elevatorLength = null;
    var maxFloor = null;

    if(!(this instanceof ElevatorModel)){
        return new ElevatorModel();
    }

    validateElevatorLength(ELEVATOR_SPEC.ELEVATOR_LENGTH);
    validateMaxFloor(ELEVATOR_SPEC.MAX_FLOOR);

    elevatorLength = ELEVATOR_SPEC.ELEVATOR_LENGTH;
    maxFloor = ELEVATOR_SPEC.MAX_FLOOR;
    
    this.elevators = [];
    this.floors = [];
    
    for(; elevatorLength >= 1; elevatorLength--){
        this.elevators.push(this.createElevator());
    }

    for(; maxFloor >= 1; maxFloor--){
        this.floors.push(false);
    }

    this.floors[0] = true;
}

ElevatorModel.prototype = {
    getElevatorLength: function getElevatorLength(){
        return this.elevators.length;
    },
    getmaxFloor: function getmaxFloor(){
        return this.floors.length;
    },
    findNearElevator: function findNearElevator(floor){
        var minDuration = null;
        var elevatorInfo = {
            elevatorIndex: null,
            distance: null
        };
        var i = 0;
        var len = this.elevators.length;
        var distance = null;
        var time = null;
        var elevator = null;

        for(; i < len; i++){
            elevator = this.elevators[i];

            if(elevator.status === 1 || elevator.status === 3){
                continue;
            }

            distance = Math.abs(elevator.floor - floor);
            time = ELEVATOR_SPEC.SPEED * distance * ELEVATOR_SPEC.STANDARD_UNIT_TIME;

            if(elevator.status === 2){
                time += elevator.standbyTime;
            }

            if(minDuration === null || minDuration > time){
                minDuration = time;
                elevatorInfo.distance = distance;
                elevatorInfo.elevatorIndex = i;
            }
        }

        return elevatorInfo;
    },
    isActivationFloor: function isActivationFloor(floor){
        return this.floors[floor - 1] === true;
    },
    checkElevatorStandbyTime: function checkElevatorStandbyTime(elevator, elevatorIndex){
        var task = null;

        elevator.standbyTime -= ELEVATOR_SPEC.STANDBY_TIME_CHECK_INTERVAL;
        
        if(elevator.standbyTime <= 0){
            clearInterval(elevator.timer);
            elevator.timer = null;

            if(elevator.queue.length > 0){
                task = elevator.queue.pop();
                this.moveElevator(task.payload, task.callback);
            }else{
                elevator.status = 0;
            }
        }
    },
    arrivedElevator: function arrivedElevator(payload){
        var elevatorIndex = payload.elevatorIndex;
        var elevator = this.elevators[elevatorIndex];

        elevator.status = 2;
        elevator.standbyTime = ELEVATOR_SPEC.STANDBY_TIME;
        
        if(elevator.timer !== null){
            clearInterval(elevator.timer);
        }

        elevator.timer = setInterval(
            this.checkElevatorStandbyTime.bind(this),
            ELEVATOR_SPEC.STANDBY_TIME_CHECK_INTERVAL,
            elevator,
            elevatorIndex
        );
    },
    moveElevator: function moveElevator(payload, callback){
        this.elevators[payload.elevatorIndex].status = 1;
        callback(payload);
    },
    signalElevator: function signalElevator(payload, moveSignalCallback){
        var elevatorIndex = payload.elevatorIndex;
        var elevator = this.elevators[elevatorIndex];
        var status = elevator.status;

        this.floors[elevator.floor - 1] = false;
        this.floors[payload.floor - 1] = true;

        elevator.floor = payload.floor;

        switch(status){
            case 0:
                this.moveElevator(payload, moveSignalCallback);
            break;
            case 2:
                elevator.status = 3;
                elevator.queue.push({
                    payload: payload,
                    callback: moveSignalCallback
                });
            break;
        }
    },  
    createElevator: function createElevator(){
        return {
            status: 0,
            floor: 1,
            standbyTime: 0,
            timer: null,
            queue: [] //Maximum 1
        }
    }
};