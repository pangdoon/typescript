// Exclude<T, U>
// -> 제외하다, 추방하다
// -> T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T; 
// T가 U를 확장하면 그때는 never 그리고 아닐 때는 T를 그대로 반환해줘라 
// 1e단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean> 밑에 내용을 풀어준다면 union 타입이었던 것들이 이렇게 두가지로 나옴

// 2단계
// string
// extends 관계가 성립이 되어서 never가 나온다. 

// 최종적으로는
// string | never -> 합집합에서 공집합은 결국 사라지므로 string 만 남는다.

type A = Exclude<string | boolean, boolean>;



// Extract<T, U>
// Exclude와는 반대로 -> T에서 U를 추출하는 타입

type Extract<T, U> = T extends U? T : never;
// T가 U를 확장하면 T 아니면 never

type B = Extract<string | boolean, boolean>


// ReturnType 
//-> 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args : any) => any > = T extends (...agrs : any) => infer R ? R : never  

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;
