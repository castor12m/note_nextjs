ref : https://www.youtube.com/watch?v=PCkiz2GUFg8


# 1. node.js 설치

Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

https://nodejs.org/ko

여기서 LTS version 으로 설치 ㄱ


# 2. 프로젝트 생성

```
    $ npx create-next-app@latest --experimental-app 
    >>>
    Need to install the following packages:
    create-next-app@13.3.0
    Ok to proceed? (y) y
    √ What is your project named? ... fresh
    √ Would you like to use TypeScript with this project? ... No / Yes
    √ Would you like to use ESLint with this project? ... No / Yes
    √ Would you like to use Tailwind CSS with this project? ... No / Yes
    √ Would you like to use `src/` directory with this project? ... No / Yes
    √ What import alias would you like configured? ... @/*
    Creating a new Next.js app in E:\workspace\project_win\workshop_nextjs\fresh.
```

# 3. Next.js version 맞추기

현재 Next.js version 이 자주 바뀌므로 강의하는 버전과 통일하기위해
next.js 13.2.4 로 맞출것.

생성한 프로젝트 폴더 root 에 있는 package.json에서 

(...)

  "dependencies": {
    "next": "13.3.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }

(...)

다음으로 수정

(...)

  "dependencies": {
    "next": "13.2.4",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }

(...)

수정한뒤 다음 커맨드 수행
(fresh 프로젝트 루트에서)

...\fresh $ npm install