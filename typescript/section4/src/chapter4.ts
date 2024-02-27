// 사용자 정의 타입가드

type Dog = {
  name : string;
  isBark: boolean;
}

type Cat = {
  name: string;
  isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal:Animal):animal is Dog{ // 직접만든함수의 반환값을 가지고는 타입을 잘 좁혀주지 않는다. 그래서 이럴 때에는 이 함수 자체를 타입 가드 역할을 하도록 만들어 줘야한다.
  // is dog라는 함수의 반환값의 타입이 이렇게 animal is dog라고 되어있으면 이 함수가 참이면 내가 인수로 전달한 이 animal 이라는 값이 Dog 타입이겠구나 알아먹게 된다.
  return (animal as Dog).isBark !== undefined
}

function isCat(animal:Animal):animal is Cat{
  return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {
  if(isDog(animal)){
    //강아지
    animal 
  } else if (isCat(animal)){
    //고양이
    animal
  }
}