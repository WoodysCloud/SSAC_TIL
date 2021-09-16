# 데이터베이스



## 09.13.21

> ***review***

- CRUD
- API 명세서
- 흐름제어: callback method => callback hell => `async, await` / `promise` => 비동기 방식을 동기 방식으로
  - 성공 - `then`
  - 실패 - `error`
- AWS - EC2
- Filezilla





***DataBase***

통합하여 관리되는 데이터의 집합체

- SQL을 사용하는 RDB(Relational DataBase), 사용하지 않는  NoSQL(Not only SQL - ex. MongoDB)
- 데이터베이스 관리 시스템(DBMS): 데이터베이스를 관리하는 미들웨어



>***SQL*** (Structured Query Language)

데이터베이스에서 데이터를 정의, 조작, 제어하기 위해 사용하는 언어

- DDL(Data Definition Language) - CREATE, ALTER, DROP
- DML(Data Manipulation Language) - INSERT, UPDATE, DELETE, SELECT, ...
- DCL(Data Control Language) - GRANT, REVOKE, ...



> ***RDB*** (Relational Data Base)

key, value 의 간단한 관계를 테이블화 시킨 매우 간단한 원칙의 전산정보 데이터베이스

- RDBMS: 관계형 데이터베이스를 생성하고 수정하고 관리할 수 있는 소프트웨어 - ex. MySQL
- Key: 테이블의 각 row 에는 저만의 고유키(pk, primary key) 존재 - "다른 튜플들과 구별할 수 있는 유일한 기준"
- 1:1 관계, 1:N 관계, N:N 관계
  - 1:1관계: "한 명의 학생은 하나의 학번만 가질 수 있다"
  - 1:N 관계: "한 명의 학생은 하나의 파트에 속할 수 있지만, 파트는 여러 사람이 속할 수 있다"
  - N:N 관계: "한 명의 학생은 여러 학과를 선택할 수 있고, 하나의 학과는 여러 학생을 포함한다"





***AWS S3***

S3: Simple Storage Service - 파일 전송, 저장, 읽기



> ***multer***



> ***AWS IAM***

모든 권한을 가진 키







## 09.14.21

***DataBase***

> ***Index*** (색인)

RDBMS에서 검색 속도를 높이기 위해 사용하는 방법

- 해당 Table의 column을 색인화(따로 파일로 저장)하여 검색 속도를 빠르게
  - 고유성 강화, 테이블의 기본 키(pk, primary key)는 자동으로 인덱스됨
  - 데이터를 변경(추가/수정/삭제)할 때 인덱스 파일도 변경 필요해서 성능 저하, 추가저장공간 필요



> ***데이터 처리 - CRUD***

INSERT(C), SELECT(R), UPDATE(U), DELETE(D)

- INSERT
  - `INSER INTO table_name (col1, col2) VALUES (val1, val2);`
    - Table column 개수, 위치가  values의 개수, 위치가 일치해야 한다.
- UPDATE
  - `UPDATE table_name SET col1 = val1, col2=val2 WHERE condition;`
- DELETE
  - `DELETE FROM table_name WHERE condition;`
- SELECT
  - 기본조회, 중복제거, 정렬, JOIN("RDB의 꽃")





***MySQL Workbench***





***Node.js 연동***

> ***mysql 모듈***

- createConnection => 실무에서 잘 안씀. 요청을 할때마다 생성, 제거 반복..(단일 연결 방식)
  - `connection.query(query, [values], callback);`
- createPool => 실무에서 많이 사용
  - 여러 개의 connection pool을 미리 만들어 놓고 거기서 connection을 가져다 씀
  - `connection.release();`
  - 





## 09.15.21

***review***

> ***MySQL***

Workbench - GUI



***exercise***

> ***exercise*** - node.js 연동

1. express 프로젝트 생성 => `express --view=ejs projectName`
2. npm install => express project folder로 change directory 후 `npm install` + `npm install myql2`
3. DB table 생성
4. server - DB 연결 => config, modules folder 생성



=> "Controller" 기능구현 파일 따로 생성



> ***exercise*** - multer

multer setting 

1. awsConfig.json 파일 config 폴더에 
2. awsUpload.js 파일 modules 폴더에
3. `npm install multer multer3 aws-sdk`



> ***img upload on S3***

1. upload 미들웨어
2. 포스트맨에서
   - Headers: Content-Type => multipart/form-data
   - Body: form-data -> key: img - file
3. `console.log`로 `req.file`을 보면 정보 나옴 
4. db 연동 
   - Headers: Content-Type => application/json
   - Body: raw



> ***react***

- import BrowserRouter: 페이지 새로고침 없이 주소 변경해주는 모듈

- `<Router path="/경로" components={컴포넌트} />`

- `exact={true}`: 해당 라우트만 렌더링

- Styled Component

- html `<a>`태그 대신 `<Link>`태그 사용

  - `<a>`태그 사용 시, reload
  - `<Link>`태그로 SPA

- component, container 분리

  - component: css, view
  - containter: 기능구현

  => pages폴더에서 components, containers 불러와서 배치



- `yarn add axios` => 서버 통신





## 09.16.21

***react - server - database***

- cors error 발생시 (npm install cors를 했음에도 불구하고)

- aws s3 권한 cors에서

  ```json
  [
      {
          "AllowedHeaders": [
              "*"
          ],
          "AllowedMethods": [
              "HEAD",
              "GET",
              "PUT",
              "POST",
              "DELETE"
          ],
          "AllowedOrigins": [
              "http://localhost"
          ],
          "ExposeHeaders": [
              "ETag",
              "x-amz-meta-custom-header"
          ]
      }
  ]
  ```

  

>  ***redirection***

upload 제출 완료하면  Home화면으로





***RDB***

관계형 데이터베이스

> ***RDB***

- membership table 있는 곳에 tables 2개(comment, user) 새로 생성
- 참조당하는 곳: primary, 참조하는 곳: foreign
- on update, on delete - CASCADE
  - 참조하는곳(primary, )의 데이터가 바뀌면 참조당하는곳(foreign)도 따라서 변경/삭제



















> ***reference***

https://kyounghwan01.github.io/blog/React/container-presenter-dessign-pattern/#gist-%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6

