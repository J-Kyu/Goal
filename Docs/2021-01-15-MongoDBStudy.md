### MongoDB로 부터 data를 Array로 받아와 React에서 Render하기

* Back-end

  ```javascript
  //get algorithm from mongoDB whose isDone is false
  app.get('/api/GetNotDoneAlgoList',(req,res) => {
    SchemaAlgo.find({
      isDone: false
    })
    .exec((err,algoList) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({success: true,algoList})
    })
  
    SchemaAlgo.find({
      isDone: false
    })
    .then(algoList => res.status(200).json(algoList))
  
  })
  ```

  

* Front-end

  > Router로 data 읽어오기

  ```javascript
  //get algorithm from mongoDB whose isDone is false
  app.get('/api/GetNotDoneAlgoList',(req,res) => {
    SchemaAlgo.find({
      isDone: false
    })
    .exec((err,algoList) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({success: true,algoList})
    })
  
    SchemaAlgo.find({
      isDone: false
    })
    .then(algoList => res.status(200).json(algoList))
  
  })
  ```

* Array 형태의 Data를 item by item으로 render하는 함수

  > ``map()``를 사용하자.

  ```javascript
      //generate list of algo lines
      const renderLines = algoList.map((algo,index)=>{
        
          return<Row gutter={4}>
                  <div style={{ margin:"5px" }}>
                  <Space>
                      <Button type="primary">Confirm</Button>
                      <a href={'/${algo.link}'}>{algo.title}</a>
                      <span>{algo.level}</span>
                  </Space>
                  </div>
              </Row>
      })
  ```

  