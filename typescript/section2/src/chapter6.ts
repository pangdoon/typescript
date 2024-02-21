// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10; // typescript 는 자동적으로 타입을 지정해준다 (number)

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
