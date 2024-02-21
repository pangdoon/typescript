// enum 타입 (자바스크립트에는 없고 타입스크립트에는 있습니다.)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "김진영",
  role: Role.ADMIN, // 관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 일반유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
