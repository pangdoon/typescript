// 서로소 유니온 타입, 교집합이 없는 타입들로만 만든 유니온 타입을 말함

type Admin = {
  tag : "ADMIN"; // 태그라는 프로퍼티를 추가하면서 직관적이지 않은 코드를 직관적으로 만든다
  // tag 로 인해서 서로소 관계로 만들어준다
  name: string;
  kickCount: number;
};

type Member = {
  tag : "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag : "GUEST";
  name: string;
  visitCount : number;
};

type User = Admin | Member | Guest; // tag 로인해서 서로소 관계가 된것을 나타내므로 서로소 union 타입

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
// function login(user:User){
//   if ('kickCount' in user){
//     // admin 타입
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
//   } else if('point' in user){
//     // Member 타입
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`)
//   } else if('visitCount' in user){
//     // Guest 타입
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
//     user;
//   }
// } // 결론적으로 코드를 이렇게 작성하면 직관적이지 않다.

function login(user:User){
  if (user.tag === "ADMIN"){
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
  } else if(user.tag === "MEMBER"){
    // Member 타입
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다..`)
  } else if(user.tag === "GUEST"){
    // Guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
    user;
  }
} // 결론적으로 코드를 이렇게 작성하면 직관적이지 않다.



// 복습겸 한가지 더 사례

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

//   state : "LOADING" | "FAILED" | "SUCCESS";
// error? : {
//   message : string;
// };
// response? : {
//   data: string;
// }
// }

// 로딩 중 -> 콘솔에 로딩중 추력
// 실패 -> 실패 : 에러메세지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch(task.state){
    case "LOADING": {
      console.log("로딩 중")
      break;
    }
      case "FAILED": {
        console.log(`에러 발생 : ${task.error.message}`)
        break;
      }
        case "SUCCESS": {
          console.log(`성공 : ${task.response.data}`);
          break;
        }
  }
}

const loading : AsyncTask = {
  state: "LOADING",
};

const failed : AsyncTask = {
  state : "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success : AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
