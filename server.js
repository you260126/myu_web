const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, './build')));

app.get('/download', function(req, res){
  const file = path.join(__dirname, '../bulid/assets/download/MyU_App.zip');
  res.download(file); // 파일을 제공합니다.
});

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, './build/index.html'));
});

