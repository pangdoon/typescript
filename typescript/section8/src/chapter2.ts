// key of 연산자

type Person = typeof person;

// interface Person {
//   name: string;
//   age : number;
// }

function getPropertyKey(person: Person, key: keyof Person){ // 모든 프로퍼티를 union 타입으로 추출한다. keyof 연산자는 뒤에 무조건 타입이 와야한다.
  return person[key]
}

const person = {
  name : "김진영",
  age : 29,
};

getPropertyKey(person, "name");