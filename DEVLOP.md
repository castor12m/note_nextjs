
# 1. 기본 설명들

쉽게 설명하기 위해 생성한 프로젝트 명을 "fresh" 라고 가정하고 path 설명 할 것.

```
fresh/app/page.js               # 이게 메인 페이지  (react 문법써야함..)
          layout.js             # page.js 를 감싸는 레이아웃

          globals.css           # 모든 페이지에 적용되는 css
          page.module.css       # 특정 페이지에만 적용

fresh/app/api/hello/route.js    # api 폴터, 서버기능 만드는 곳.

fresh/node_modules              # 설치한 라이브러리 보관해줌

fresh/public                    # 이미지 등 소스코드 외의 파일들 보관용

fresh/package.json              # 터미널에서 쓸수 있는 명령어
                                # 설치한 라이브러리 자동으로 기록

$ npm run dev           # 실행

```

# 2. 기초 문법

next.js 는 react 위에서 작동한다고함.
그래서 react 문법을 사용해야함

react 버전의 html 문법을 'JSX' 라고함.

큰 특징 4개가 있음.


### 2.1 return() 안에 HTML을 넣을 때

아래와 같이 평행한 태그 존재 하면 안됨.

return (
    <div>
      <h4>test</h4>
    </div>
    <div></div>
  )

하고 싶으면 다음과 같이 감싸줘야함

return (
    <div>
      <h4>test</h4>
        <div></div>
        <div></div>
    </div>
  )

### 2.2 class 넣고 싶으면 className

스타일을 적용하고 싶으면 보통 css 클래스를 만들고
html 에 해당 클래스를 적어서 반영함
그때 다음과 같이 class 가 아니라

return (
    <div>
      <h4 class="testclass">test</h4>
    </div>
  )

className 이라고 적어줘야함
왜냐하면 javascript 문법에서의 class와 겹치지 않기 위해서라고함.

return (
    <div>
      <h4 className="testclass">test</h4>
    </div>
  )

### 3

아래의 "let name = 'park'" 이라고 써진 공간에 자바스크립트 작성.

```js
    export default function Home() {

        let name = 'park'

        return (
            ...
                <h4 className="name-style">name : {name}</h4>
            ...
        )
    }
```

jsx 에 자바스크립트 변수를 사용하고자 할 때는 다음과 같이 중괄호 안에 자바스크립트 변수 넣으면 됨.

이를 jsx에 데이터바인딩 했다고 함.

```js
    <h4 className="name-style">name : {name}</h4>
```


### 4

다음과 같이 style을 바로 부여하고자 할 때, style 속성에 바로 스타일문법을 쓰면
동작 안함.

```js
    <p style="color : red">age : {age}</p>
```

다음과 같이 작성해야함...

```js
    <p style={{color: 'red'}}>age : {age}</p>
     or
    <p style={{color: 'red', fontSize:'30px'}}>age : {age}</p>
```

보통 css 에서 font-size 하나봄?
하지만 jsx에서는 object자료형이라 dash 불가
따라서 font-size인 경우 fontSize로 해주는 식으로 입력
케밥케이스를 케멀케이스로 한다고 생각하면 됨

### 5. Routing

/list 로 적송하면 상품목록.html 보여주기
Next.js는 파일,폴더 하나 만들면 라우팅 가능

fresh/app/list              # 폴더 생성
fresh/app/list/page.js      # 파일 생성

test 하려면 fresh/app/page.js 에 작성한 내용을
fresh/app/list/page.js 에 카피 한뒤에
http://localhost:3000/list 접속해서 확인

### 6.

fresh/app/list/page.js 에서 export default function Home() {..}
Home 대신 list와 비슷한 List로 변경

function List() {..}

위와 같이 라우팅과 유사하게 하는 경우가 많음

export default 도 잘붙여주기 (컴포넌트를 만들어서 하는 작업이라고 함? 머시기..?)

export default function List() {..}

### 7.

```js
    상품.map(function(){
      
    })
```
    혹은
```js
    상품.map(()=>{
      
    })
```
    둘다 가능


    map 함수의 소괄호 안에 파라미터를 2개 까지 작성가능

```js
    상품.map((a, i)=>{
      
    })
```
    참고로 a는 각 반복되는 item, i는 각 반복 될 때의 인덱스임.
    (i, a)로 바꿔서 작성하면 i가 item, a가 인덱스가 됨.
    무슨 원리인지 알지😉?


    반복 문 쓸때는 key 속성 넣는것을 추천함.

```js
        <div className="food" key={i}>
```    

### 8 이미지 삽입시 몇가지 고려하는 방법들이 있음

  + Lasy loading
  + 사이즈 최적화
  + layout shift 방지

  위를 통한 최적화된 이미지 삽입

### 9 컴포넌트

컴포넌트란. html 덩어리를 function화 해서 사용하는 것?!

```js
export default function Cart() {
    return (
      ...
        <CartItem/>
    ...
    )
  }


function CartItem(){
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}
```

위와 같이 바로 작성 하면 server component 이며
상단에 'use client' 라고 적으면 client component 이다.


server component 와 client component 차이?

server component는 html에 자바스크립트 넣기 불가능
```js
    <p onClick={()=>{}} >상품명</p>   // 이런거 불가능
```
그리고 useState, useEffect 등 사용 불가라고함..
  
하지만 server component는 로딩이 빠르고 검색 노출에 유리

client component는 로딩속도가 느림 
이유1. 자바스크립트가 많이 필요
이유2. hydration 이 필요하기 때문

그래서
큰페이지는 server component
기능들 필요한것은 client component
로 만듬.


###

###

###

###

###

###

###

###
