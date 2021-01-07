### Axios

* Axios는 jQuery 처럼,  request를 보내주는 친구이다.

  * 우리가 

* Install

  ```bash
  npm instsll axios --save
  ```

### Clinet와 Server연결

* 이제 Axios를 사용해서 react의 요청을 node에다 해볼 수 있다. 

* Client에는 다음과 같은 코드를 작성해보자.

  ```javascript
  import React,{ useEffect } from 'react'
  import axios from 'axios';
  
  function LandngPage() {
  
      useEffect(() => {
          axios.get('http://localhost:5000/api/hello')
          .then(response => console.log(response.data))
      },[])
  
      return (
          <div>
              Landing page
          </div>
      )
  }
  
  export default LandngPage
  ```

  * 여기서 ``axios.get(....)``부분이  node의 app router ``get``을 요청하게 되는 것이다.

* 하지만 여기서 2가지 문제가 있다.

  * 첫번째, 같은 project임에도 불구하고,  client인  react에서는 node 딴을 알 수 없다. 즉, 실제 주소인  ``localhost:5000``으로 접속하는 방법으로 접근해야 한다.
  * 두번째, 위와 같이 접속해도 CORS POLICY로 인해서 막힌다.

### 두번째 문제에 대한 해결

* CORS Policy에 의해서 막히는 문제는 다음과 같다.

  * 먼저, CORS가 있는 이유는, 아무 client 로 부터 우리의 back-end인 node에  request할 수없게 하기 위해 막하놓은 것이다.

* 이 문제를 해결하는 방법은 여러가지이지만, 여기서는 proxy server를 사용해서 해결하자.

  * 해결이 핵심은, back이든, front든, 검증된 친구들은 pass하는 것이다.

* [CRA Proxying Dev](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

  1. Middle Ware를 설치하자

     ```bash
     npm install http-proxy-middleware --save
     ```

  2. Client의 src 폴더에 ``setupProxy.js``의 이름으로 code를 추가해주자.

     ```javascript
     const { createProxyMiddleware } = require('http-proxy-middleware');
     
     module.exports = function(app) {
       app.use(
         '/api',
         createProxyMiddleware({
           target: 'http://localhost:5000',
           changeOrigin: true,
         })
       );
     };
     ```

     * 이렇게 하는 경우, 첫번째 문제도 문제 되지 않기에, ``localhost:5000``을 지워져도 된다.

* 이렇게 설정해준다면, browser에서 깔끔하게 node의 get router에서 정의된 response를 console에서 볼 수 있다.



### [Concurrently](https://www.npmjs.com/package/concurrently)

* node js와 react를 실행하기 위해서는 각 폴더에서 특정 cmd를 각각 실행시켜야 했다.

* 이것을 한번에 실행하는 방법이 ``concurently``이다.

* 이것을 root dir에서 실행하면된다.

  ```bash
  npm ionstall concurrently --save
  ```

  * 이후, ``package.json``의 scripts에 ``dev``라는 이름의 script를 추가한다.

    `` "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""``