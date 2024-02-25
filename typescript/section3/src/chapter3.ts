// 기본 타입간의 호환성 

import * as path from "path";
import { ReadableByteStreamControllerCallback } from "stream/web";

let num1: number = 10;
let num2: 10 = 10;

num1 = num2


// 객체 타입간의 호환성 -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog ={
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color : "yellow",
}

let dog : Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

type Book = {
  name  :string ,
  price : number ,

};

type ProgrammingBook = {
  name : string,
  price: number,
  skill : string,
};


let book : Book;
let programmingBook: ProgrammingBook = {
  name: "한입크기로 잘라먹는 리액트",
  price: 33000,
  skill : "react.js"
}

book = programmingBook
// programmingBook = book , book 이 슈퍼타입이고 programmigBook 은 서브타입이다.


//초과 프로퍼티 검사
let book2: Book = {
  name: "한입크기로 잘라먹는 리액트",
  price: 33000,
//   skill : "react.js" , 객체타입에 정의된 프로퍼티만 넣을 수 있도록 해야 한다.
// 초과 프로퍼티 검사를 피하기위해선 객체리터럴을 사용하지않고 할당해줘야한다 book = programmigBook 과 같이
  }

