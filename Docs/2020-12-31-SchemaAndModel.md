### MongoDB: Schema and Model

* Schema
  * MongoDB에 저장될 data의 양식
* Model
  * Schema를 감싸주는 친구

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