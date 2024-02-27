// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

//기준 1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a:A = () => 10; // 반환 값이 number
let b:B = () => 10; // 반환 값이 number 리터럴 

a = b; // 가능 업캐스팅 
// b = a; // 불가능 다운캐스팅

// 기준2. 매개변수가 호환되는가?

// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: number) => void;


let c : C = (value) => {};
let d : D = (value) => {};

// c = d; 업케스팅일때는 안됌
d = c;

type Animal = {
  name : string;
}

type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업캐스팅 되는 상황임에도 불가하고 할당이 불가능하다.
dogFunc = animalFunc;

// let testFunc = (animal: Animal)=>{
  // console.log(animal.name);
  // console.log(animal.color);   // Animal 에는 할당하려는 color 라는 프로퍼티가 없다. 이렇기 때문에 업케스팅이 불가능하다. 즉 매개변수를 기준으로할때는 업캐스팅이면 불가능하다. 오히려 다운캐스팅일때 가능
// }

let testFunc2 = (dog : Dog) => {
  console.log(dog.name);
  console.log(dog.color);  
}


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b:number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // func1 의 매개변수 개수는 2개인데 func2에 넣으려니 안됌