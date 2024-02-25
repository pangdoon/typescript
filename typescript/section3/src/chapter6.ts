// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // Person 타입으로 간주해라~
person.name = "김진영";
person.age = 29;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name : "팽둔이",
  color : "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙, 값 as 단언 << 단언식 
// A as B, A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

// const 단언

let num4 = 10 as const; // const 로 선언한것과 동일하게 된다.

let cat = {  
  name: "야옹이",
  color: "yellow",
} as const; // 안에 있는 값을 수정할 수 없게 된다. 일기 전용속성으로 된다.

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post : Post = {
  title: "게시글1",
  author : "김진영",
}

// const len : number = post.author?.length; //.author? << 옵셔널체이닝 , 만약에 없다면 오류없게 하기위해서
const len : number = post.author!.length; //.author? << 옵셔널체이닝 , 만약에 없다면 오류없게 하기위해서
// !로 인해서 null 이거나 undifined 가 아닐 거라고 typescript 가 믿게한다.

// 단언은 typescript의 눈을 잠깐 가리는 것으로 생각하면된다. 위험한 문법들

