// 맵드 타입

interface User {
  id: number;
  name : string;
  age : number;
}

type PartialUser = { //맵드 타입은 interface 에서 불가능
  [key in "id" | "name" | "age"]? : User[key]; // 이렇게하면 맵드 타입이 정의하는 모든 프로퍼티가 다 선택적 프로퍼티가 되는것
}

type BooleanUser = {
  [key in keyof User]: boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User{
  // ... 기능
  return {
    id: 1,
    name: "김진영",
    age: 29,
  };
}

// 한명의 유저 정보를 수정하는 기능

function updateUser(user : User) {
  // .. 수정하는 기능
}

updateUser({
  id : 1,
  name : "김진영",
  age : 25,
})