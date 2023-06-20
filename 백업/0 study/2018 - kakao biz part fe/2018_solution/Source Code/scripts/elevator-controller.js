function ElevatorController(){
    var elevatorLength = null;
    var maxFloor = null;

    if(!(this instanceof ElevatorController)){
        return new ElevatorController();
    }

    this.elevatorModel = new ElevatorModel();
    this.elevatorView = new ElevatorView();

    elevatorLength = this.elevatorModel.getElevatorLength();
    maxFloor = this.elevatorModel.getmaxFloor();

    this.elevatorView.init(maxFloor, elevatorLength);
    this.elevatorView.addClickListener(this.activeFloor.bind(this));
}

ElevatorController.prototype = {
    activeFloor: function(floor){
        var payload = null;

        if(!validateFloor(floor)){
            return 0;
        }else if(this.elevatorModel.isActivationFloor(floor)){
            return 1;
        }

        payload = this.elevatorModel.findNearElevator(floor);

        //All elevator is moving.
        if(payload.elevatorIndex === null){
            return 2;
        }

        payload.floor = floor;

        this.signalElevator(payload);

        return 3;
    },
    isActivationFloor: function(floor){
        var responseCode = 1;

        if(!validateFloor(floor)){
            responseCode = 0;
        }else if(this.elevatorModel.isActivationFloor(floor)){
            responseCode = 2;
        }

        return responseCode;
    },
    signalElevator: function(payload){
        this.elevatorModel.signalElevator(payload, this.moveElevator.bind(this));
        this.elevatorView.toggleFloorBtn(payload.floor, true);
    },
    moveElevator: function(payload){
        this.elevatorView.moveElevator(payload, this.arrivedElevator.bind(this));
    },
    arrivedElevator: function(payload){
        this.elevatorModel.arrivedElevator(payload);
    } 
};