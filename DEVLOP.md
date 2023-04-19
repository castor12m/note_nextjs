쉽게 설명하기 위해 생성한 프로젝트 명을 "fresh" 라고 가정하고 path 설명 할 것.

fresh/app/page.js               # 이게 메인 페이지  (react 문법써야함..)
          layout.js             # page.js 를 감싸는 레이아웃

          globals.css           # 모든 페이지에 적용되는 css
          page.module.css       # 특정 페이지에만 적용

fresh/app/api/hello/route.js    # api 폴터, 서버기능 만드는 곳.

fresh/node_modules              # 설치한 라이브러리 보관해줌

fresh/public                    # 이미지 등 소스코드 외의 파일들 보관용

fresh/package.json              # 터미널에서 쓸수 있는 명령어
                                # 설치한 라이브러리 자동으로 기록

$ npm run dev       # 실행