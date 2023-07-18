const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
const axios = require('axios'); //추가

// options 객체에서 params 속성을 제거
const options = {
  'method': 'GET',
  //'url': 'https://openapi.naver.com/v1/search/book_adv',
  'url': 'https://openapi.naver.com/v1/search/book.json',
  'headers': {
    'X-Naver-Client-Id': 'j8PIiTpiuPi6PzcQD4MV',
    'X-Naver-Client-Secret': 'DuZ9KkT_ZH'
  }
};

app.get('/', (req, res) => {
  // req.query에서 query 파라미터를 받아옴
  const query = req.query.query;
  // query 파라미터가 없으면 에러 메시지 전송
  if (!query) {
    res.status(400).send('query parameter is required');
    return;
  }
  // query 파라미터를 options 객체에 추가
  //options.params = {query};
  options.qs = {query};
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
//추가
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


/*
//서버 실행+naver-api.js
const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
const axios = require('axios'); //추가

const options = {
  'method': 'GET',
  //'url': 'https://openapi.naver.com/v1/search/book_adv',
  'url': 'https://openapi.naver.com/v1/search/book.json',
  'params': { query: 'YOUR_QUERY', display: 10, start: 1 }, //추가
  'headers': {
    'X-Naver-Client-Id': 'j8PIiTpiuPi6PzcQD4MV',
    'X-Naver-Client-Secret': 'DuZ9KkT_ZH'
  }
};

app.get('/', (req, res) => {
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//추가
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
*/
