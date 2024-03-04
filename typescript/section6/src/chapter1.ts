// 타입스크립트의 클래스

const employee = {
  name : "김진영",
  age : 29,
  position: "developer",
  work() {
    console.log("일함")
  },
};

class Employee { 
  // 필드
  name: string;
  age : number;
  position : string;

  constructor (name:string, age:number, position:string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함")
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber : number;

  constructor (
    name:string, 
    age:number, 
    position:string, 
    officeNumber:number) 
    {
    super(name, age, position)
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee('김진영', 29, '개발자')

console.log(employeeB)