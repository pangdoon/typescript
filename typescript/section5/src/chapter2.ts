// 선언 합침
// 인터페이스는 동일한 이름으로 중복 선언이 가능 -> 모든 선언이 합쳐진다.

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person : Person = {
  name: "",
  age: 29,
}

// 모듈 보강

interface Lib {
  a: number;
  b: number;
}

interface Lib { // 모듈보강
  c: string;
}

const lib : Lib = {
  a: 1,
  b: 2,
  c : "hello",
}