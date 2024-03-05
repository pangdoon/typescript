// 첫번째 사례

function swap<T, U>(a:T, b:U) { 
  return[ b, a ];
}

const [a, b] = swap(1, 2)

// 두번째 사례

function returnFirstValue<T>(data: [T, ...unknown[]]){
  return data[0];
}

// 세번째 사례 
function getLength<T extends { length : number}>(data : T){ // 이러면 unknown 타입으로 본다.
  return data.length
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10});
