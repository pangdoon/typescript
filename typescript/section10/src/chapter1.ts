// Partial<T>
// -> 부분적인, 일부분의
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL? : string;
}

type Partial<T> = {  //Partial 타입을 직접 구현해보기
  [key in keyof T]? : T[key]; //맵드 
};

const draft: Partial<Post> = {   
  // Post 의 모든 프로퍼티를 선택적으로 바꿔줘서 임시저장되어져있는 것도 허용이 되게 만들어준다.
  title : "제목 나중에 짓자",
  content: "초안 ...",
}


// Required<T> 
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입.

type Required<T> = { //Required 타입을 직접 구현해보기
  [key in keyof T]-? : T[key];
};

const withThumbnailPost : Required<Post> = {
  // 선택적 프로퍼티도 반드시 있어야하는 필수 프로퍼티로 바꿔준다.
  title: "한입 타스 후기",
  tags : ['ts'],
  content : "",
  thumbnailURL: "https://...",
}

// Readonly<T>
// -> 읽기전용 수정불가
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
  readonly[key in keyof T]: T[key];
}

const readonlyPost : Readonly<Post> = {
  title : "보호된 게시글 입니다.",
  tags : [],
  content: "",
};

