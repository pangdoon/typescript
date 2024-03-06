// 인덱스드 엑세스 타입

// 인터페이스는 배열타입을 쓰기엔 불편하다 타입 별칭으로 바꿔주고 시작
type PostList = {// interface Post {
  title: string;
  content: string;
  author : {
    id : number;
    name: string;
  };
}[];

function printAuthorInfo (author: PostList[number]['author']) { // 이렇게 해주면 하나하나 안해줘도 된다. 포스트 타입으로 부터 특정 프로퍼티 타입만 이렇게 똑 떼어낸 것을 확인할 수 있다.
  console.log(`${author.name}-${author.id}`)
}

const post : PostList[number] ={
  title: "게시글 제목" ,
  content: "게시글 본문",
  author : {
    id: 1,
    name: "김진영",
  }
}

printAuthorInfo(post.author)

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];