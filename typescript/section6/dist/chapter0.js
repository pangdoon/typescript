// 클래스
// let studentA = {
//   name: "김진영",
//   grade: "A+",
//   age: 29,
//   study() {
//     console.log("열심히 공부함"); //메서드 하나 만들어 주기
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// };
// let studentB = {
//   name: "홍길동",
//   grade: "C+",
//   age: 33,
//   study() {
//     console.log("열심히 공부함"); //메서드 하나 만들어 주기
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// };
// 클래스는 이러한 비슷하게 생긴 모양의 객체를 마치 공장에서 찍어낸듯한..
class Student {
    // 필드
    name;
    grade;
    age;
    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log("안녕하세요");
    }
}
// 클래스를 이용해 만든 객체를 인스턴스라고 한다.
// 스튜던트 인스턴스
let studentB = new Student("김진영", "A+", 29);
console.log(studentB);
studentB.study();
studentB.introduce();
export {};
