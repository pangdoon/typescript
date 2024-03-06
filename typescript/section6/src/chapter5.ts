// 프로미스

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
})

promise.then((response)=> {
  console.log(response); //20
})


// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id : number;
  title: string;
  content: string;
}

function fetchPost() : Promise<Post>{ // 이렇게 Promise<Post> 로 해준이유는 그 아래에 해주면 함수선언식에서 바로 직관적으로 첫줄만보고 알 수 없기 때문에! 
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve({
        id : 1,
        title: "게시글 제목",
        content: "컨텐츠",
      })
    })
  })
}

const postRequest = fetchPost();

postRequest.then((post)=> {
  post.id
})