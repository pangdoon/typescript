// 분산적인 조건부 타입

// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 특정타입만 제거한 유니온 타입을 얻어냄 (string 제거 예시)

// 1 단계 
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | boolean
// never 는 공집합이기때문에 그냥 사라짐
