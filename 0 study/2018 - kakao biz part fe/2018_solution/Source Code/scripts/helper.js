function validateMaxFloor(maxFloor){
    var isValid = (
        typeof maxFloor === "number" &&
        maxFloor >= LIMIT.MIN_FLOOR && 
        maxFloor <= LIMIT.MAX_FLOOR
    );

    if(!isValid){
        throw [
          "Invalid range of maximum floor.",
          "Minimum floor:" + LIMIT.MIN_FLOOR,
          "Maximum floor:" + LIMIT.MAX_FLOOR
        ].join(" ");
    }

    return isValid;
}

function validateFloor(floor){
    var isValid = (
        typeof floor === "number" &&
        floor >= ELEVATOR_SPEC.MIN_FLOOR && 
        floor <= ELEVATOR_SPEC.MAX_FLOOR
    );

    if(!isValid){
        console.error(
            "Invalid range of floor.",
            "Minimum floor of elevator:" + ELEVATOR_SPEC.MIN_FLOOR,
            "Maximum floor of elevator:" + ELEVATOR_SPEC.MAX_FLOOR
        );
    }

    return isValid;
}

function validateElevatorLength(elevatorLength){
    var isValid = (
        typeof elevatorLength === "number" &&
        elevatorLength >= LIMIT.MIN_ELEVATOR && 
        elevatorLength <= LIMIT.MAX_ELEVATOR
    );

    if(!isValid){
        throw [
            "Invalid range of elevator.",
            "Minimum :" + LIMIT.MIN_ELEVATOR,
            "Maximum :" + LIMIT.MAX_ELEVATOR
        ].join(" ");
    }

    return isValid;
}

function getElem(selector, parent){
    var parentNode = 
        typeof parent === "undefined" ?
        document :
        parent;
    
    var childNodes = parentNode.querySelectorAll(selector);

    if(childNodes.length === 1){
        childNodes = childNodes[0];
    }

    return childNodes;
}