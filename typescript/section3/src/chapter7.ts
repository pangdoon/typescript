// 타입좁히기 , 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name : string;
  age: number;
};

// value => number : toFiexd
// value => string : toUpperCase
// value => Date : getTime
// value => Poerson : name은 age 살입니다.

function func(value: number | string | Date | null | Person) {
  if (typeof value ==="number"){  // number 타입으로 좁혀짐 , 타입가드
    console.log(value.toFixed())
  }
  else if (typeof value ==="string"){  // string 타입으로 좁혀짐, 타입가드
    console.log(value.toUpperCase());
  } else if (value instanceof Date){
    console.log(value.getTime()); // 객체로 할시에 Date 와 Null 값이 둘다 들어올 수 있어서 오류가나온다
  } // instanceof 를 통해서 오류를 막아줌 ( 타입가드 ) , 왼쪽에 있는 값이 오른쪽의 인스턴스냐 하고 묻는 것
  else if (value && "age" in value) { // instacneof 연산자는 우측에 type 이 들어와서는 안된다.
    // value 가 있다라고 해준이유는 in 연산자 뒤에는 null 이나 undifined 값이 들어와서는 안되기 때문이다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}