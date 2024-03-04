// 접근 제어자
// access modifier
// public private proteced


class Employee { 
  // 필드
  public name: string;      // 공공의 , 전부 오픈되어있는 것이 기본 셋팅
  public age : number;
  public position : string;

  constructor (name:string, age:number, position:string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함")
  }
}

const employee = new Employee("김진영", 29, "개발자");

employee.name = "홍길동"  //public으로 기본값이 설정되어있어서 자유롭게 변경가능
// private 으로 되어있으면 오류가 난다. 클래스 외부에서는 접근 자체가 불가능 내부에서만 가능
// 파생클래스 내부에서는 가능하게하는 것은 protected
