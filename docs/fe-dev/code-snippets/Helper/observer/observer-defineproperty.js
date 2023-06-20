const Observer = (obj, property, callback) => {
  let value = obj[property];

  Object.defineProperty(
    obj,
    property,
    {
      configurable: true,
      enumerable: true,
      set: (newValue) => {
        callback(newValue, value);
        value = newValue;
      },
      get: () => value
    }
  );
}

// AngularJs 형태 정의측
$scope = {};
$scope.$watch = (property, callback) => {
  Observer($scope, property, callback);
};

// AngularJs 사용측
$scope.counter = 0;

$scope.$watch('counter', (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

setInterval(() => {
  $scope.counter++;
}, 1000);

// 1 0
// 2 1
// 3 2
// 4 3
// ...
