// 인터페이스

interface Person {
  readonly name: string; // 읽기전용 프로퍼티로 만들어줄 수 있다.
  age?: number; // ? 를 붙이면서 선택적 프로퍼티
  // sayHi : () => void; //sayHi라고 프로퍼티 이름을 쓰고 거기에 함수 타입 표현식으로 반환값 void로 정의
  sayHi(): void;  // 메세지의 오버로딩을 구현하고 싶다고 한다면 이렇게 써야한다.
  //기본적인 호출 시그니처와는 다르게 이렇게 메서드의 이름이 소괄호 앞에 붙는다.
  sayHi(a: number, b: number) : void; 
}

// type sayHi = {
  // () : void
// }

type Type1 = number | string;
type Type2 = number & string;

const person : Person = {
  name: "김진영",
  sayHi: function() {
    console.log("Hi");
  }, // 프로퍼티에 저장된 값이 함수인 이런 sayhi 같은 프로퍼티를 method 라고 부른다.
};

// person.name = "홍길동" // 읽기전용은 수정이 불가능하다.

person.sayHi();
person.sayHi(1, 2);