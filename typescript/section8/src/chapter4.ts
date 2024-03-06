// 템플릿 리터럴 타입

type Color = 'red' | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// 조합을 하나하나 손으로 다 넣지말고

type ColoredAnimal = `${Color}-${Animal}`

// 이렇게만 해주면 조합이 저절로 전부다 만들어진다.
// 템플릿 리터럴 타입은 보통 이렇게 문자열로 여러가지의 상황들을 표현해야 되는 경우에 사용된다.