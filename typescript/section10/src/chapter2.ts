// Pick<T, K>
// 뽑다 고르다
// 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL? : string;
}

type Pick<T, K extends keyof T> = { // K 타입에 제약을 걸어주는 것은 아래에 객체의 프로퍼티 키만 전달할 수 있도록 하는 것
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'  -> keyof T가 바로 이것들이다.
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 왼쪽의 유니온타입이 오른쪽 keyof T 인 것들의 서브타입이 되냐고 묻는 것 -> 결과적으로 참
  [key in K] : T[key];
}

const legacyPost : Pick<Post, "title" |"content">= { // 객체의 프로퍼티 키만 전달할수 있다는 조건을 만들어준다. 
  title: "옛날 글",
  content: "옛날 컨텐츠",
};


// Omit<T, K> 
// -> 생략하다, 빼다 / 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T,K>>;
// T = Post, K ='title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title' >>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL' > Exclude 는 제외하고 보여준다.

const noTitlePost : Omit<Post, "title"> = {
  content : "",
  tags: [],
  thumbnailURL:"",
}

// Record<K, V>
// 인덱스 시그니처 처럼 유연하지만 그것보다는 조금 더 제한적인 객체 타입을 정의할 때 
// Record 타입은 객체 타입을 만들어주는 유틸리티 타입

// type ThumbnailLegacy = {
//   large: {
//     url : string;
//   };
//   medium : {
//     url : string;
//   };
//   small : {
//     url : string;
//   };
// };

type Record<K extends keyof any, V> = { // 이렇게 extends를 한다는 건, 이게 무슨 타입이 될지 모르겠는데 적어도 이 타입변수 k에 들어오는 타입은 어떤 객체 타입의 키를 추출해 놓은 유니온 타입이라고 이야기해주는 것
  [key in K] : V
}

type Thumbnail = Record<'large' | 'medium' | 'small', { url : string}>
// 첫번째 타입 변수로는 객체의 property 키를 union으로 받는다. 두번째타입 변수로는 이키들의 value 타입을 받는다.