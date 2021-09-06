## 08.31.21

***Visual Studio Code***

> **React 프로젝트 설치**
>
> - npx create-react-app [폴더이름]
> - 폴더이름: '.' - 현재폴더
> - 터미널에서 `yarn start` 명령하면 react 웹 브라우저 생성
> - src -> App.js 파일에서 `header`에 `Hello World`
> - 기본 폴더: "public" -> 기본 파일: "index.html"
> - public폴더가 보여지는 부분,  src폴더가 작업하는 공간(실제 개발 공간)
>   - -> 흐름: 최종적으로 src폴더의  App.js로 모이고 그 내용이 index.js로 넘어가고 다시 그 넘어간 내용들이 public폴더의 index.html로 넘어감

> **React 특징**
>
> 화면에 컨텐츠가 어떻게 표시될 것인가
>
> - Virtual DOM
>   - 실제 DOM에 접근하는 것이 아닌 실제 DOM과 똑같은 DOM을 복제한 메모리상의 DOM에 접근(변수에 DOM을 저장하는 것과 비슷한 맥락). Virtual DOM과 데이터를 주고 받고 작업이 완료되면 실제 DOM과 비교. 바뀐 내용만 실제 DOM에서 변경 후 반영. Virtual DOM을 이용하는 것이 과정이 복잡할지라도 속도는 빠름(퍼포먼스).
> - SPA(Single Page Application)
>   - Traditional Web Application은 페이지를 물리적으로 나눠서 만듬 - 새로고침하면 여러 페이지들이 동시에 리프레시
>     - FrontEnd에서 요청하면 BackEnd에서 받아서 내용 변경
>   - SPA는 공통된 부분을 제외한 나머지 부분 내용을 바꿔주는 방식 - 물리적인 페이지가 하나 있고 내용만 바뀜 => "Virtual DOM"
>     - 백엔드로부터 API나 data를 받아온 상태에서 virtual DOM을 활용하여 웹페이지 표시
> - Component: 코드 조각 단위
>   - 



***Exercise***

> - 웬만하면 component 파일 이름은 대문자로 시작하도록
> - component(function/class)이름은 파일이름과 동일하게
> - 마지막에 `export default`
> - App.js에 태그 쓰듯이 `< >`(꺽은 괄호)안에 새로 만든 component 파일이름을 입력하면 자동으로 위에 `import` 코드 생성



> **JSX**
>
> - JavaScript Syntax Extension: 자바스크립트 구문 확장
> - `return()`안에는 하나의 영역으로 그룹핑되어 있어야 한다. 정 나누고 싶다면, `<react.Fragment>`사용. -> 축약표현은  `<> </>`
> - 변수 사용 가능 - 중괄호 `{}` 사용
> - class를 사용할때는  `className=""`으로 사용



> **Properties**: component와 component 사이에서 값을 전달할때 사용하는 객체
>
> - 값을 호출 -> attribute 형태로
> - 매개변수로 전달받음
> - 





> **Condition**
>
> - 



> **todo app**
>
> - https://dev.to/hariramjp777/todo-app-using-html-css-and-js-local-storage-design-html-and-css-1m0j
> - HTML - 전반적인 구조 만들기
>   - header - 제목, input
>   - main
>   - footer
> - CSS
>   - reset
>   - 



## 09.01.21

***stage, commit, push***

> - **'+'**: stage
> - **'체크모양'**: commit (w/ message)
> - **'점3개'**: push
> - VS code 창 밑에 파란줄: pull/push 상태

> **node_modules**
>
> - 용량은 작지만, 파일량이 매우 많기 때문에 gitignore로 node_modules 제외한 나머지만 push



***todo***

> **margin: 0 auto;**: 가운데 정렬

> **developer tools** - computed
>
> - 자세한 프론트엔드 설정값 볼 수 있음

> **svg image file**: xml 형태로 되어있는 이미지 데이터 -> 이미지로 렌더링해줌
>
> - 데이터 수정 가능 => 색 변경: `style=fill:#000000`

> **마우스 커서가 인풋창에 놓였을때 테두리가 없어지게**
>
> - `className:focus {outline: none;}`

> **보통 기본 폰트 사이즈는 16px**

> **`flex: 1`**: 공간을 자동으로 채워줌

> **margin collapse**
>
> - 부모요소는 그대로, 자식요소만 부모요소 내에서 위치를 조금만 내리려 한다면?
> - 자식요소한테 마진을 적용하면 부모요소도 같이 적용됨
> - -> 부모요소 padding

> **input창 너비**
>
> - `max-width`를 설정하면 반응형으로 적용
> - `padding`설정해주면 브라우저 창을 줄여도 좌우 여백 생김

> **checkbox**
>
> - 디자인적 요소는 적용불가

> 폰트마다 기본적인 여백이 다름
>
> -  `line-height`를 맞춰도 폰트에 따라 위아래여백이 다를수 있음

> footer를 페이지 하단으로
>
> - `position`활용

***markup -> component***

> **나누기**
>
> - header, main, footer
> - 동적 생성 있는지 파악
>   - header(A) => 1개
>   - main - main(B), section1(C) > 추가되는 list(D), section2(E) => 4개
>   - footer(F) => 1개
> - 총 6개의 components
> - class => className

> **Header**
>
> - 그대로 복붙
> - css는 적용이 안되므로 뼈대만 보임
> - 경로를 바꾸지 않아도 사진이 보이는 이유는 모든 components의 렌더링은 결국 `index.html`(in public folder)로 되는 것이기 때문. 같은 폴더안에 존재

> **Main**
>
> - TodoMain, TodoList는 껍데기만 만듬
>   - TodoMain 태그 안에는 TodoList
>   - TodoList 태그 안에는 TodoItem
>   - => TodoMain과 TodoList는 props(children) 필요
> - TodoItem

> **Footer**
>
> - 마찬가지로 그대로 복붙

> **CSS 적용**
>
> - `App.css`에 `style.css` 복붙하면 되지만 비추
> - css파일은 적을수록 좋다.
>   - 클라이언트 < == request / response == > 서버
>     - 100MB x 1file : 1MB x 100 files
>       - 파일 하나가 훨씬 빠름 => "퍼포먼스가 좋다"
>       - But, 코드가 길기 때문에 개발자들이겐 불편함
>       - => 따로따로 작업해서 하나의 파일로 합침 = "component 개념"
> - reset css의 경우는 전역으로 적용돼야 하기 때문에 module css방식이 아닌 일반적인 방식으로 App.css에 코딩하여 전역으로 적용
> - 파일이름형식: `[filename].module.css`
> - css파일의 이미지는 다른 폴더에 있기 때문에 따로 경로 설정 필요
>   - 가장 쉬운 방법은 이미지를 css폴더로 이동
>   - component파일에서 class를 import하는 것은 객체로 가져오는 것
>     - 따라서, component파일에서 return으로 가져올 때 className을 객체의 속성 형식의 이름으로 설정
>       - ex. `className={objectName.classNameInCss}`
>     - 클래스 이름에'-'이 들어갈 경우, 인덱스 방식으로 스트링으로 클래스 지정
>       - ex. `className={objectName.['className-inCss']}`



## 09.02.21

*** VS Code extenstion 설치***

> - syntax error -> ESlint
> - 코드모양 -> Prettier

> **.prettierrc**
>
> - setting값 설정

***Event 설정***

> DOM에 접근할 필요 없음 => "JS내에서 어떻게 동작할하게 할 것인가"
>
> => 모두 변수에 저장
>
> - jsEvent, AppEvent component 만들고 index.js 수정
> - 이벤트감지는 인라인형식과 유사
> - JS 함수호출이므로 HTML처럼 `A="B"`가 아닌 `A={B}` 형식
> - 함수는 작동하지만 업데이트된 변수값이 반영이 안됨 => "rerendering, 리렌더링" 필요 => "Hook"

> **Hook** function
>
> - "상태"
> - 구조 분해 할당: `const [변수이름, 함수이름] = useState(initialState);`
> - 이벤트 안에 함수를 정의하고 함수를 정의할 때는 등식이 아닌 그냥 식을 사용
> - `useState`: 변수값을 "상태"라고 생각
> - `useRef`: DOM 접근

> **Mapping**: 데이터 변환
>
> - 고유key값 설정 필요 => id

> **useState**
>
> - 변수 선언: 구조 분해 할당 방식
> - useState() 괄호 안에는 객체 방식, 고유key값(id)은 제외 => 자동으로 생성됨
> - 기존데이터 설정 + 추가할 데이터 설정
>   - 비어있는 데이터를 return
>   - input 받아서 데이터 update

> **흐름**
>
> - 보다 포괄적인 component가 다른 component에 데이터를 전달 
> - 웹브라우저에 데이터 표시
> - 웹브라우저에서 event발생
> - event발생하면 포괄적 component에서 함수 수행
> - 함수로 인하여 데이터 변경
> - 다시 반복

> **리액트 데이터 불변성**
>
> - 리액트 데이터 변경시 의도치 않은 변경을 막기 위해 사본을 만들어서 데이터 변경
> - spread(전개) 연산자



## 09.03.21

***리렌더링 정리***

> **map** 함수
>
> - 객체 데이터 동적 생성/제거/변경
> - 기본객체수만큼 렌더링해줌 -> 반복문 필요없음
> - 키 생성 필요 -> 컴포넌트 만들면서 생성
> - 화면에 표시되는 것과 input값을 구분해야함
>   - input값을 함수 안에 변수에 담음.
>   - -> 변수에 담은 input값을 다시 return

> **제거**
>
> - 불변성의 원리로 인하여, 원래 있던 것을 삭제하는 것이 아닌, 원래 있던 것에서 삭제할 것을 제외한 나머지를 다시 새로 만든다.

> **key**
>
> - key값은 매개변수로 전달할 필요 X

***FTP***

> 