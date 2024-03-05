// 제네릭 인터페이스

interface KeyPair<K, V> { 
  key : K,
  value: V;
}

let KeyPair : KeyPair<string, number> = {  //제네릭 인터페이스를 사용하실 때에는 반드시 타입으로 정의할 때 타입변수에 할당할 타입을 꺽쇠와 함께 반드시 사용해야 한다.

  key: "key",
  value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key : true,
  value: ['1'],

}

// 인덱스 시그니처

interface NumberMap {
  [key : string]: number;
}

interface Map<V> {
  [key: string]: V;
}

let booleanMap : Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭

type Map2<V> = {
  [key: string]: V;
};

let stringMap2 : Map2<string> = { 
  key: "hello",
}

// 제네릭 인터페이스의 활용 예시
// 유저 관리 프로그램
// 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
  type : "student";
  school : string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school
    console.log(`${school}로 등교 완료`);
}

const developerUser : User<Developer> = {
  name: "김진영",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser : User<Student> = {
  name: "김진영",
  profile: {
    type: "student",
    school: "계명대학교",
  },
}