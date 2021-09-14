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





