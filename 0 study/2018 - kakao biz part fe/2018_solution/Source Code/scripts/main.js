document.addEventListener("DOMContentLoaded", function(){
    var elevatorController = new ElevatorController();
    
    /**
     * 엘레베이터를 조작할 수 있는 전역 인터페이스
     * 
     * @namespace elevatorInterface
     */
    window.elevatorInterface = {
        /**
         * 층 숫자를 입력받아 해당 층을 활성화한다.
         * 
         * @memberof elevatorInterface
         * @function activeFloor
         * @param {Number} floor 활성화할 층 숫자
         * @returns {Number} '0' 미허용 숫자, '1' 해당층 사용중, '2' 엘레베이터 모두 사용중, '3' 성공
         * @example
         * var responseCode = elevatorInterface.activeFloor(2);
         * switch(responseCode){
         *     case 0:
         *         console.log("Invalid number");
         *     break;
         *     case 1:
         *         console.log("Used floor");
         *     break;
         *     case 2:
         *         console.log("Full elevators");
         *     break;
         *     case 3:
         *         console.log("Success");
         *     break;
         * }
         */
        activeFloor: elevatorController.activeFloor.bind(elevatorController),
        /**
         * 층을 입력 받아 해당 층의 활성화 여부를 확인한다.
         * 
         * @memberof elevatorInterface
         * @function isActivationFloor
         * @param {Number} floor 활성화 확인할 층 숫자
         * @returns {Number} '0' 미허용 숫자, '1' 미사용중, '2' 사용중
         * @example
         * var responseCode = elevatorInterface.isActivationFloor(2);
         * switch(responseCode){
         *     case 0:
         *         console.log("Invalid number");
         *     break;
         *     case 1:
         *         console.log("No");
         *     break;
         *     case 2:
         *         console.log("Yes");
         *     break;
         * }
         */
        isActivationFloor: elevatorController.isActivationFloor.bind(elevatorController)
    };
});