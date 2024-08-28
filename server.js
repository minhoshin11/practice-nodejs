const express = require('express')
const app = express()
//express 라이브러리 사용법임

app.use(express.static(__dirname + '/public'))
//server.js에 폴더 등록하면 폴더안의 파일들 html에서 사용가능하다. 
//.css,.js,.jpg 같은 걸 스태틱 파일이라 부름.


app.listen(8080,()=> {
    console.log('http://localhost:8000에서 서버 활동중')
})

//유저에게 파일 보내는 건 sendFile
//_dirname <= 현재 프로젝트 절대경로라는 뜻
app.get('/',(요청,응답)=>{
    응답.sendFile(__dirname + '/index.html')
})

app.get('/news',(요청,응답)=>{
    응답.send('뉴스임')
})