### MongoDB: Schema and Model

* Schema

  * MongoDB에 저장될 data의 양식

* Model

  * Schema를 감싸주는 친구

* 다음은 MongoDB에 올라갈 Schema 형식이다

  ```javascript
  const mongoose = require("mongoose");
  
  const schemaName = mongoose.Schema({
      title: {
          type: String,
          maxLength: 25,
      },
      link: {
          type: String,
          maxLength: 1000,
      }
  })
  
  const SchemaName = mongoose.model("SchemaName", schemaName)
  
  module.exports = { SchemaName }
  ```

  

### Body Parser

* BodyParser는 client를 통해서 보내주는  data를  parsing해주는 친구이다.

* 만약 DB에 새로운 model을 쓰기 원한다면 BodyParser를 통해서 schema에 정의된 일부  data를 읽어 올 수 있다.

* Body Parser를 설치하기 위해서는 다음 cmd를 치면된다.

  ```bash
  npm install body-parser --save
  ```

  

### Postman

> Postman은 node js의 router 기능을 web page 없이도 실험해 볼 수 있는 tool. 공식 싸이트에서는 API development tool이라고 설명한다.

* Postman을 통해  body Parser로 정제된 data를 DB에 쓰기를 test해 볼 수 있다.

* 나 처럼 Ubuntu 환경에서 사용하는 경우 다음 cmd를 통해서  postman을 설치할 수 있다.

  ```bash
  sudo snap install postman 
  ```

### Test하는 방법

* Postman을 실행시킨 뒤,  접속한다.
* POST를 통해서 node js에 등록한  router로 작성한 json파일을 보낸다.
  * 이 때 주의할 점은, 현 시점에서 실행 프로그램이 아닌 경우(web을 통해서 하는 경우) CROS 정책으로 안될 수 있다. 고로 꼭 실행 프로그램을 받아서 하길 권장한다. 