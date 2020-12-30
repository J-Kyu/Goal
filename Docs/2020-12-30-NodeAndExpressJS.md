#### MongoDB 가입

* 먼저 Mongo DB에 가입을한다.
* 이후 Cluster를 생성한다.
* 생성된 cluster에서 ``connect``를 클릭하고, user를 생성한다.
* 이후, ``connect method``에서 "connect to your application"에서 mongoose를 복사한다.

### Mongo DB 연동

* 연동을 위해서는 node js에서 mongo DB를 설치한다.

  ```bash
  npm install mongoose --save
  ```

* 이제 mongo DB와 연동하기 위해 index.js에서 다음 lines을 추가다.

  ```javascript
  const mongoose = require('mongoose')
  mongoose.connect("mongodb+srv://kyu:<password>@goal.ywtqn.mongodb.net/<dbname>?retryWrites=true&w=majority",{
      useNewUrlParser: true, userUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  }).then(() => console.log("MongoDB Connected........"))
  .catch(err => console.log(err))
  ```

  * 이 때, ``<password>``와 ``<dbname>``에는 올바른 값인 본인의 MongoDB의 정보를 입력한다.

* 이후, 다시 ``npm run start`` 를 하면, "Mongoose DB Connected............" 문구를 볼 수 있다.