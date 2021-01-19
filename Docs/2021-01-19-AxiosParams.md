###  Aixos에서 Node js Router로 parameter 보내기

> Axios에서 parameter를 보낼 때는, ``req``의 ``body``에 씌워서 보내야 한다.

* Axios Code

  ```javascript
  function ActionButton(id,e){
      e.preventDefault();
      console.log(id)
  
      //chang isDone to Done
      axios({
          method: 'put',
          url: '/api/confirmAlgoProb/',
          data:{
              id: id
          }
      })
      //add today's date
      //weekly goal update 
  }
  ```

* Node js Router Code

  ```javascript
  //update algo data states
  app.put('/api/confirmAlgoProb/', (req, res) => {
  
    try{
      console.log("PUT: "+req.body.id);
      var temp = JSON.parse(req.body.id);
    }catch(err){
      console.log("Error: Cannot Parse Parmeter: "+err)
      console.log(req.body)
    }
  })
  
  
  ```

  