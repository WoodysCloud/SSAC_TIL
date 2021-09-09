# Node.js



## 09.06.21

***JavaScript***

> **소개**
>
> - 객체 기반 스크립트 언어
> - 거의 모든 것이 객체
> - 프로토타입 기반 프로그래밍 - 클래스가 없어서 객체를 원형(프로토타입)으로 하여 복제의 과정을 통해 객체의 동작 방식을 사용할 수 있음
> - ES6문법에서 class문법이 추가됐지만, 문법이 추가된 것이지, 자바스크립트가 클래스 기반으로 바뀐 것은 아님

> **스크립트 언어**
>
> - 코드를 한줄씩 번역하고 실행
> - 쉽다
> - 컴파일 언어보다 실행 속도는 느리다

> **문법**
>
> - ECMAScript: 다양한 웹 브라우저에서 자바스크립트가 공통되게 잘 작동하기 위해 만든 표준 규격
> - 2015년에 나온 ES6에서 새로운 기술들 도입
> - 동적 언어이기 때문에 변수 타입을 미리 선언할 필요가 없다
>   - `var` - Function scope => 웬만하면 안씀
>   - `let` / `const` -Block scope

> **객체(Object)** - 배열
>
> - 배열 선언: 모든 형태의 자료형 들어갈 수 있음
> - 배열 요소 순회: `for()`
> - 배열 요소 삽입: `push()` - 맨 뒤에 삽입  / `unshift()` - 맨 앞에 삽입 / 동적으로도 삽입 가능
> - 배열 요소 반환: `array.pop()` - 맨 뒤 값 삭제하고 제거된 요소 반환, `array.shift()` - 맨 첫 값 삭제하고 제거된 요소 반환

> **객체(Object)** - 함수
>
> - 

> **JSON**(JavaScript Object Notation)
>
> - 객체 요소 접근
> - 객체 요소 순회

> **연산자**
>
> - 사칙연산
> - typeof 연산자
> - 비교 연산자

- vscode terminal에서 `node filename` 하면 javascript 실행

> **범위**
>
> - function scope
> - block scope

- back tic(``)으로 변수 포맷팅 가능
  - ex. console.log(`Hello ${World}`)

> **변수**
>
> - 지역 변수
> - 전역 변수



***Node.js***

> **Intro**
>
> - JS기반 서버 플랫폼
> - 구글 V8 엔진 기반 동작
> - 이벤트 기반
> - non-blocking I/O 비동기 방식
> - 싱글 스레드 기반

> **이벤트 기반 시스템**
>
> : 이벤트가 발생할 때 미리 지정해 둔 작업을 수행하는 방식
>
> - 이벤트 리스너에 콜백 함수를 등록
> - 발생할 이벤트가 없거나 발생했던 이벤트를 다 처리하면 다음 이벤트 발생할 때까지 대기
> - 여러 이벤트 동시 발생 시 어떤 순서로 콜백 호출할 지는 이벤트 루프가 판단
> - **이벤트 루프**
>   -  이벤트 발생 시 호출할 콜백 함수들을 관리하고 호출된 콜백 함수의 실행 순서를 결정
>   - 호출 스택이 비어 있을 때만 테스크 큐에 있는 함수를 호출 스택으로 가져옴
>   - 노드가 종료될 때까지 이벤트 처리 작업 반복해서 루프라고 부름
> - **테스크 큐**
>   - 이벤트 발생 후 콜백 함수들이 기다리는 공간
>   - 이벤트 루프가 정한 순서대로 줄 서 있음("콜백 큐"라고도 부름)
> - **백그라운드**
>   - 타이머나 I/O 작업 콜백 또는 이벤트 리스너들이 대기하는 곳
> - 시간이 걸리는 작업을 호출 스택에서 백그라운드로 보내고 백그라운드에서 작업 처리 -> 정해진 시간이 지나고 태스크 큐에서 대기하고 있다가 호출 스택이 비워지면 대기중이던 태스크 큐가 이벤트 루프로 다시 호출 스택으로 
>   - 호출 스택: "코드"
>   - 백그라운드: 시간이 걸리는 작업을 수행하는 공간
>   - 태스크 큐: 백그라운드 작업이 진행되는 동안 대기중인 공간, 호출스택이 비워지면 실행됨

> **동기**
>
> : 요청과 그 결과가 동시에 일어남(요청을 하면 시간이 얼마나 걸리든지 그 자리에서 결과가 주어져야 함)
>
> - 다른 함수 호출 시, 이 함수의 결과를 호출한 쪽에서 처리
> - 호출되는 함수의 작업 완료를 호출한 함수가 신경씀
> - 설계가 직관적이고 간단함

> **비동기**
>
> : 요청과 결과가 동시에 일어나지 않음
>
> - 다른 함수 호출 시, 함수의 결과를 호출한 쪽에서 처리하지 않음
> - 호출되는 함수의 작업 완료를 호출된 함수가 신경 씀
> - 결과가 주어질 때까지 그 시간동안 다른 작업을 할 수 있어서 효율적

> **non-blocking I/O**
>
> - blocking: I/O 작업이 진행되는 동안 유저 프로세스는 자신의 작업을 중단한 채 대기
>   - I/O작업이 CPU자원을 거의 쓰지 않기 때문에 리소스 낭비가 심함
> - non-blocking: I/O 작업이 완료될때 가지 멈추지 않고 다음 작업 수행
>   - 오래 걸리는 함수를 백그라운드로 보내서 다음 코드가 먼저 실행되게 하고, 그 함수가 다시 태스크 큐를 거쳐 호출 스택으로 올라오기를 기다리는 방식

> **싱글 스레드**
>
> - 프로그램 > 프로세스 > 스레드
> - 프로그램: 정적인 상태.
> - 프로세스: 프로그램이 실행중인 상태. 운영체제로부터 시스템 자원 할당 받는 작업의 단위. 컴퓨터에서 연속적으로 실행되고 잇는 컴퓨터 프로그램 메모리에 올라와 실행되고 잇는 프로그램의 인스턴스. 프로세스 간에는 메모리 등 자원 공유 x
> - 스레드: 프로세스 내에서 실행되는 여러 흐름의 단위(컴퓨터 작업을 처리할 수 있는 일손). 1프로세스 : n스레드. 프로세스가 할당 받은 자원을 이용하는 실행의 단위. 스레드들은 부모 프로세스의 자원 공유 (같은 메모리 접근 가능)

> ***"Node.js는 non-blocking 방식을 사용하는 이벤트 기반의 싱글 스레드, 비동기 방식"***



***실습***

```javascript
const moduleArr = [7, 2, "Hello World", 11, "node", "server", 8, 1];

function sqrt(num) {
  let cnt = 0;
  while (true) {
    if (num % 2 == 0) {
      num = num / 2;
      cnt += 1;
    } else break;
  }
  return cnt;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

for (let i = 0; i < moduleArr.length; i++) {
  if (typeof moduleArr[i] === "string") {
    console.log(reverseStr(moduleArr[i]));
  } else {
    if (moduleArr[i] % 2 == 0) {
      console.log(sqrt(moduleArr[i]));
    } else {
      console.log("홀수입니다");
    }
  }
}
```





### 통신

***HTTP*** (Hyper Text Transfer Protocol)

***npx*** vs ***npm***

- npx: Node Package Manager
  - Node.js의 오픈소스 모듈을 모아둔 저장소
  - 세계에서 가장 큰 오픈소스 라이브러리 생태계
  - 모듈의 버전관리가 쉽게 가능
  - npm에 업로드 된 노드 모듈을 "패키지"라고 부름
- package.json: 설치한 패키지 버전을 관리하는 파일 => 패키지 리스트 => `npm install` 터미널에 명령하면 모든 패키지 다운
  - 다양한 패키지들이 서로 의존하고 있기 때문에 다량의 파일들 설치됨
  - 의존성 모듈을 쉽게 관리해줌
- npm: 단순 패키지 구성
- `npm run start`: 서버 작동 시작 명령어
- 화면에 나타나는 것을 담당하는 파일은 ejs파일 (in views folder)
  - routes folder에 index.js파일에서 데이터 가져옴



### > ***Express***

- 코드 변경하고 적용하려면 서버 중지시키고 다시 가동

  - 패키지 중 자동으로 적용시켜주는 패키지 존재 => ***nodemon***: 서버를 재가동하지 않고도 변경사항 적용시켜줌
  - `-D`: 개발환경에서만 사용 => `npm install -D nodemon` => `-g`로 install
  - `nodemon ./bin/www`
  - package.json 파일에 "scripts"에 사용자 설정의 명령어 추가 가능 => "dev" - `npm run dev`
    - `npm run` 다음에 명령어를 입력: "scripts" object에 명령어에 해당하는 명령 수행

  

  **route**

  - json 형태로 전달
  - "root router": http://localhost:3000
  - postman(client: 요청을 보내는 주체)으로 request + server(: 요청을 받는 주체)가 response => "통신"
  - url에 정보를 입력하여 통신 => "query"형식 (get method): 문자열로 정보를 요청
    - query 날리고 - 콜백함수로 정보 받아서 변수에 저장 - 요청한 변수, 저장된 변수를 object형식으로 응답 => get method





## 09.07.21

> ### review

- JavaScript: 객체 기반의 스크립트 언어

- ES6: ECMAScript - 표준 규격

- 변수: var (function scope), let - 재할당, const - 상수처리 (안전)

- 배열 선언

  - `const array = new Array();`
  - `const anything = [ ];`

- 배열 요소 순회 - for문

- 함수 선언

  - `const func = function () {}`
  - `const func = () => {}`

- JSON (JavaScript Object Notation): 간결하고 경량화된 데이터. JS에서 객체를 만들 때 사용하는 표현식

  - 객체 요소 접근: `json["key"]` /  `json.key`

  - 객체 요소 순회:  `for (key in json) {console.log(key + ':' + json[key]);}`

    - ```javascript
      // 틀린 코드
      for (key in obj) {
        console.log(`key : ${obj.key}`); // key값에는 obj배열의 요소값
      }
      
      // 수정
      for (key in obj) {
        console.log(`key : ${obj["key"]}`);
      }
      ```

- Node.js: JavaScript Runtime - 자바스크립트 실행환경

  - "비동기", "non-blocking I/O"
  - 싱글 스레드: 스레드는 많지만 control할 수 있는 것은 1개 <-> 멀티 스레드는 안전하지만 비용문제
  - **Node.js는 non-blocking 방식을 사용하는 이벤트 기반의 싱글 스레드, 비동기 방식**
  - 대규모 프로젝트, 게임서버보다는 RESTful API, 채팅, Push 서버에 적합

- Server

  - 클라이언트: 요청을 보내는 주체
  - 서버: 요청을 받고 응답을 보내는 주체 
    - 서버가 서버에 요청을 보낼 수도 있음 - 요청을 보내는 서버가 클라이언트가 됨





> ### 모듈

- express - `module.exports = nameModule;`: 구버전 export
- 모듈 가져오기: `const 모듈 = require(파일경로)
- 실습
  - 모듈
    1. 문자열 중에 중복된 문자를 제거하는 함수. ex) ssac => sac
    2. number값을 받았을 경우 홀수면 '홀수입니다.', 짝수면 '짝수입니다' + 2의 제곱형태
  - main
    - const moduleArr = [1, 2, apple, ssac, 5]
  - solution
    1. `new Set()` 활용
       - unique한 속성이 들어가는 객체





> ### HTTP (Important)

- HTTP Request (Client -> Server)
  - Content-Type
    - application/xml : XML 데이터
    - **application/json** : json 객체 데이터 (주로 응답 보낼 때)
    - **application/x-www-form-urlencoded** : html form data (주로 request 받을 때)
    - **multipart/form-data** : xml 데이터 (사진, 데이터 전송 받을 때)
    - text/plain : text 데이터
    - text/html : html 데이터
- HTTP Response (Server -> Client)
  - Status Code: 1xx, 2xx(성공), 3xx(리다이렉팅), 4xx(요청 오류), 5xx(서버 오류) 등이 들어감
    - ex) google.com/1231213213124 => 구글에게 다음과 같은 url을 get method로 request => "404. page not found."





> ### Express

: node를 위한 "빠르고 간결한" 웹 프레임워크

- HTTP 요청에 대하 라우팅 및 미들웨어 기능 제공
  - 라우팅: 서버 경로 제어, 통신 데이터를 보낼 경로 선택
  - 미들 웨어: 부가적인 기능이나 처리를 제공하는 목적. 요청 사이사이에 들어가는것(?)
  - 설치: `npm install -g express` => `sudo` 필요할 수도
- express-generator
  - Node.js +  Express구조의 뼈대를 만들어 줌
  - 프로젝트 생성 시 폴더 및 파일들을 자동으로 생성
- 프로젝트 구조
  - **/bin/www** 
    - 서버를 실행하는 스크립트
    - 프로젝트 돌아가는 포트번호 바꿀 수 있음
  - **/public**
    - 외부에서 접근 가능한 파일 모아둠
    - 리소스들이 올라감
    - 딱히 건드릴 일 없음
  - **/routes**
    - 페이지 라우팅과 관련된 파일 저장(주소별 라우터들을 모아둠)
    - url 별로 실행되는 실제 서버 로직
    - index.js 파일로 라우팅 관리
  - **/views**
    - jade, ejs파일들 모아둠
  - **/app.js**
    - 핵심적인 서버 역할 (프로젝트의 중심)
    - 미들웨어 관리
    - 라우팅으 시작점
  - **/package.json**
    - npm의 의존성 파일
    - 현재 프로젝트에 사용된 모듈을 설치하는데 필요한 내용을 담음
- /route 파일 기본 구조
  - /routes/index.js 파일 참고
- request 처리
  - method는 GET, POST, PUT, DELETE
  - request parameter
    - `req.query`: url에서의 query문자열
      - ex) url/?str=HelloNode => req.query.str = "HelloNode"
    - `req.params`: url에서 변수로 넘어온 것
      - ex) url/:idx로 지정후 url/1024 접속 => req.params.idx = 1024
    - `req.body`: body로 넘어온 값
    - `req.file`: 파일을 전송받았을 때
- response 처리
  - `res.status()`
  - `res.send()`
- "미들웨어"
  - 다음 것을 수행하기 전 중간에 거치는 작업
  - `next()`: 코드 실행 후 그 다음 해당되는 경로, 라우트로 이동
  - app.js에 코딩하여 반복되는 코드/작업을 피함
- "모듈화" -> 기능성 있게, 짧게
  - "동일한 상위폴더경로에 다른 라우트들 접근"
  - routes 폴더에 모듈폴더/파일 생성
  - routes 최상위 폴더에 있는 index.js파일에서 app.js파일처럼 `use` method 이용하여 미들웨어 형태로 



> ### 라우팅 - 파일 접근 과정

- 라우팅 시 파일 접근 과정
  1. app.js에서 라우팅 정보 찾음
     1. 라우팅 미들웨어는 첫 번째 인자로 주소를 받음
     2. 
  2. routes/index.js로 접근 => 





> ### POST

- postman에서 method post로 바꾸고, body에 raw - json으로 데이터 입력
- 요청 보내고, `console.log(req.body)`하면 객체로 터미널에 데이터 나타남
  - => "통신 완료"
- key값을 property로 value를 뽑아냄
- 변수에 데이터 저장해서 `res.json` 객체에 넣어서 활용 가능
- "변수 저장하기가 불편" - 비효율적 => "한번에 변수에 담을 수 없을까?"
  - "비구조화 할당" - key, value 값 개수 맞춰줘야 함



> ### DELETE (params 접근)

- `router.delete("/:username/:sns",` 
  - postman에서 url에 parameters인 username과 sns에 해당하는 value값을 요청하면 데이터 전송됨
  - params 순서 중요



> ### CRUD API

```javascript
// DB 역할 Object
// Read 전체 데이터 조회 : GET

// Create 데이터 생성
// Method : POST
// Header : {context-type : application/json} => 자동 생성됨

// Request
// Body : {
//   fruit : 과일 이름 하나
// }
// 해당 과일 이름을 비구조화 할당으로 가져와서 fruitArr에 추가
// 그리고 추가한 후에 알파벳 순으로 정렬
// 만약 중복된 과일이 존재한다면, status code 500 에러 발생

// Response
// type : json
// {
// 		message : "과일 추가가 완료 되었습니다."
// }

// Fail
// status 500 Code
// {
//    message : '중복된 과일이 존재합니다.'
// }
```







## 09.08.21

> ***review***

- 모듈: 특정한 기능을 하는 함수나 변수들의 집합
- HTTP: TCP와 UDP, IP 프로토콜 사용, 연결 상태를 유지하지 않는다.
  -  Request Message
    - Status Line - METHOD: 통신 메소드, URL: 요청할 url 주소, VERSION: HTTP 버전
      - HTTP Method: GET - 조회, POST - 생성, PUT - 수정,  DELETE - 삭제
    - Header - Content-Type, Content-Length, Set-Cookie, Token 등이 들어감
    - A blank line
    - Body - 데이터가  html, json, xml, form-data 등의 형식으로 들어감
  - Response





> ***New Project***

- 프로젝트 생성: `express --view=ejs projectName`
- 패키지 확인 및 다운: package.json 파일 확인 후 `npm install`
- nodemon으로 서버 실행: `nodemon ./bin/www` -> nodemon: 
- params는 되도록 맨 밑에 작성. 코드는 위에서부터 읽어지고 id에는 무슨 값이든 다 들어가기 때문



> ***req.methods***

- url 접근 (보안 취약) => GET, DELETE methods에 많이 쓰임
  - `req.params`: `/:id` => `const {id} = req.params`
    - DB index로 주로 사용
  - `req,query`: `/?name=lee` => `const {name} = req.query`
    - string값을 보낼 때 주로 사용
- 보안(개인정보) => POST, PUT methods에 많이 쓰임
  - `req.body`: `const { keys } = req.body`



> ***유저 생성, 조회, 수정***

indexing, 배열 삭제, 

- `findIndex(a, b)`
- 배열 삭제 => `.splice(index, ea)`
  - `delete`와 `splice`차이
    - splice: 해당 인덱스 삭제하고 길이 줄여줌.
    - delete: 해당 인덱스를 삭제하는데 공간은 남겨둠, 길이는 그대로 => 배열보다는 object의 property 삭제할 때 사용
- 다수의 유저 생성을 한번에 한다면? => 



> ***REST API***



- URI vs URL
  - URI: Uniform Resource Identifier
    - 통합 자원 식별자 => 자원을 식별할 수 있는 문자열
    - 하위개념으로 URL, URN
  - URL: Uniform Resource Loctor
    - 통합 자원 지시자
- API: Application Programming Interface
  - 서버 애플리케이션의 기능을 사용하기 위한 방법/수단
  - 구현 방식을 알지 못해도 서비스가 서로 통신 가능
  - 리소스에 대한 액세스 권한을 제공하고 보안과 제어를 유지
  - URI는 서버 설계 도면, API는 서버 사용 설명서
- REST: Representational State Transfer
  - 네트워크 기반의 아키텍쳐
  - REST 원리를 따르는 시스템 => RESTful
- "RESTful 하다"
  - https://meetup.toast.com/posts/92 참고







> ***흐름제어***

비동기 작업 => 어떤 작업이 언제 완료될 지 모름 => call back method가 중첩될 수 밖에 없음 =>  Call Back Hell: **Node.js의 딜레마**

비동기적인 흐름에서 동기적인 흐름으로 바꾸고 싶을 때:  **"promise"**, **"async-await"** 사용

- **"Promise"**, **"Async"** => Callback Hell (중첩 콜백) 해소
- **Promises**
  - 비동기 작업을 순차적으로 실행하거나, 병렬로 진행
  - 내부적 예외처리 구조 탄탄하여 오류 처리 가시적으로 관리 가능
- resolve -> then
- reject -> catch -> 에러 관리





## 09.09.21

> ***review***

body, params, query

HTTP 통신은 정보를 저장하지 않는다. => cookies / local storage (WEB)에 저장 - 자동로그인

`npm install` : 노드 모듈 패키지 설치 (dependencies)

**REST API**

- Uniform Interface: HTTP 표준에만 따른다면, 어떠한 기술이든 사용 가능한 인터페이스 스타일
- Stateless: HTTP Session(서버에 저장)과 같은 컨텍스트 저장소에 상태 정보를 저장하지 않음. API 서버는 들어오는 요청만을 들어오는 메시지로만 처리하면 되며, 세션과 같은 정보를 신경 쓸 필요 없음
- Layered System: 대상 서버에 직접 연결되었는지, 또는 중간 서버를 통해 연결되었는지를 알 수 없음. 중간 서버는 로드 밸런싱 기능이나 공유 캐시 기능을 제공함
- Self-descriptiveness
- Client-Server 구조
- Cacheable



**API 문서(명세서)** => swagger, git wiki 추천





> ***서버의 꽃: "배포"***

**AWS**

- on-demand 방식 - 종량 과금제
- **EC2**: 컴퓨팅 파워를 클라우드에서 제공하는 웹 서비스
- 아무나 들어올 수 있도록 적절한 포트 번호 개방
- elastic IP address 할당 받아서 인스턴스랑 연결
  - 연결 해제하고 릴리즈해야 과금 안됨!!!!
- 인스턴스 연결
- 터미널
  - `cd rootFolder` - `cd keyFolder`
  - 인스턴스 연결 페이지에서 키를 공개적으로 볼 수 없도록 하는 명령어 실행: `chmod 400 keyName`
  - 퍼블릭 DNS을(를) 사용하여 인스턴스에 연결 항목에 example) 긁어서 명령
- 파일질라 - 파일관리자 열고
  - Protocol: SFTP
  - Host: AWS에서 탄력적 IP 복붙
  - Logon Type: Key file
  - User: ubuntu
  - Key file: pem flie 위치



터미널을 종료하면 서버는 종료됨 => Process Manager (PM2)로 서버 가동

- **pm2** - https://velog.io/@hojin9622/PM2-%EC%A0%95%EB%A6%AC 참고
  - 원활한 서버 운영을 위한 패키지
  - npm start로 서버 작동 시 일정시간 지날 시 프로세스 자동 중지
  - 항상 서버를 작동시켜놓고 로그를 수집하기 위해 pm2 사용
  - 에러 발생시 자동 restart 기능





**서버 종료** (과금 방지)

- 탄력적 IP - 연결 해제 -> 릴리즈
- 인스턴스 종료



















`<scratch section>`

`use`: "모든 methods를 허용하겠다"

Terminal customizing: iTerm2 - https://ooeunz.tistory.com/21

redirection port number 80 to port number 3000: `sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`

`sudo apt-get update`

`sudo apt-get install nodejs`

`sudo apt-get install npm`

`sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000`





