// 인터페이스의 확장

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal { // 이렇게 적으면 인터페이스 Dog 는 인터페이스 Animal 을 확장하는 타입이다.
  // 여기서도 다시 수정이가능하다 .
  isBark : boolean;
}

interface Cat {
  name: string;   // 이렇게 중복된 값들을 위의 extends 를 통해 인터페이스 확장가능.
  age: number;
  isScratch: boolean;
}
