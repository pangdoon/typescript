// 대수 타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합 -> Union 타입

let a : string | number;
a = 1;
a = "hello"

let arr : (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name : string;
  color : string;
}

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person

let union1 : Union1 = {
  name: "진돌이",
  color: "파랑",
};

let union2 : Union1 = {
  name: "",
  language: "",
};

let union3 : Union1 = {
  name: "",
  color: "", 
  language: "",
}

// let union4 : Union1 = {
//   name: "",
// } 
// union4 는 합집합 밖에 있는 것. 어느 곳에도 들어갈 수 없음.

// 2. 교집합 타입 = Intersction 타입

let variable : number & string; // 공집합


type Cat = {
  name : string;
  color : string;
}

type People = {
  name: string;
  language: string;
};

type Intersction = Cat & People;

let intersection1 : Intersction = {
  name: "",
  color : "",
  language: "",
}; // 프로퍼티가 하나라도 빠지면 안됌.


