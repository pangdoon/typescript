// 타입 추론

let a = 10; // 모든상황에 type 을 이렇게 number 라고 추론해주는 것은아님..

// function func(param){ // typescript 가 매개변수에 값을 추론할 수 없음.
// }

let b = "hello"; // 변수의 초기값을 기준으로 추론한다.

let c = {
  id : 1,
  name: "김진영",
  profile : {
    nickname: "pangdoon",
  },
};

let { id, name, profile } = c;
let [one, two, three] = [ 1, "hello", true] // 구조분해할당, 초기값 기준으로 number, string, boolean

function func(message = "hello") { // 매개변수 또한 기본값을 잘 나타내어 줌 
  return "hello"; // 함수의 반환값 타입도 잘 나타내어준다. 함수에서는 return 문기준으로 값을 추측
};

let d;  // any 타입으로 추론 

d = 10; // any 타입으로 추론했던 것이 number로

d.toFixed(); // number 타입이므로 가능
// d.toUpperCase() // 불가능 

d = "hello"; // 문자열을 넣어줘도 괜찮 
d.toUpperCase();
// do.toFixed(); //문자열이기 때문에 불가능

const num = 10;
const str = "hello"

let arr = [1, "string"];






