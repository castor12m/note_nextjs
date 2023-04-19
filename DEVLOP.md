
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


###

###

###

###

###

###