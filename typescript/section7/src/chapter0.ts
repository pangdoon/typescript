// 제네릭 함수 - 모든 타입 두루두루 범용적인 함수

function func<T>(value: T): T {
  return value;
}

let arr = func([1, 2, 3]);


