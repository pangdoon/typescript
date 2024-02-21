// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  // 정말 return 문을 사용하고 싶지 않을 때는 void 를 사용한다.
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입, 모순적인 타입
// 절대 정상적으로 종료가 될수 없을 경우에는 void 를 쓰는 것 X , 함수에 반환 값이 있는 것 자체가 모순이다.
function func3(): never {
  while (true) {}
}

function func4(): never {
  // 함수의 경우에도 실행되면 바로 프로그램이 중지될 거기 때문에 반환값 타입으로는 Never
  throw new Error();
}
