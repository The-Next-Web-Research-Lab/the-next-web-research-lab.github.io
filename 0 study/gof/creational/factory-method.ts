enum EmployeeEnum {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  TEMPORARY = 'TEMPORARY',
}

interface EmployeeInterface {
  hourly: string
}

class FullTime implements EmployeeInterface {
  hourly: string;
  constructor () {
    this.hourly = '$12';
  }
}

class PartTime implements EmployeeInterface {
  hourly: string;
  constructor () {
    this.hourly = '$11';
  }
}

class Temporary implements EmployeeInterface {
  hourly: string;
  constructor () {
    this.hourly = '$10';
  }
}

class Employee {
  static create (type: EmployeeEnum): EmployeeInterface {
    switch (type) {
      case EmployeeEnum.FULL_TIME:
        return new FullTime()
      case EmployeeEnum.PART_TIME:
        return new PartTime()
      case EmployeeEnum.TEMPORARY:
        return new Temporary()
    }
  }
}

const employees: EmployeeInterface[] = [];

employees.push(Employee.create(EmployeeEnum.FULL_TIME))
employees.push(Employee.create(EmployeeEnum.PART_TIME))
employees.push(Employee.create(EmployeeEnum.TEMPORARY))

employees.forEach(employee => console.log(employee.hourly))
