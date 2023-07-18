const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// options 객체에서 params 속성을 추가
const options = {
  'method': 'GET',
  'url': 'https://openapi.naver.com/v1/search/book.json',
  'headers': {
    'X-Naver-Client-Id': 'j8PIiTpiuPi6PzcQD4MV',
    'X-Naver-Client-Secret': 'DuZ9KkT_ZH'
  },
  'params': {}
};

app.get('/', (req, res) => {
  // req.query에서 query 파라미터를 받아옴
  const query = req.query.query;
  // query 파라미터가 없으면 에러 메시지 전송
  if (!query) {
    res.status(400).send('query parameter is required');
    return;
  }
  // query 파라미터를 options 객체의 params 속성에 추가
  options.params.query = query;
  // axios로 API 요청
  axios.request(options).then(function (response) {
    res.send(response.data);
  }).catch(function (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/* axios.post 함수 추가 -> intellibook.org 로 데이터 전송 
const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// options 객체에서 params 속성을 추가
const options = {
  'method': 'GET',
  'url': 'https://openapi.naver.com/v1/search/book.json',
  'headers': {
    'X-Naver-Client-Id': 'j8PIiTpiuPi6PzcQD4MV',
    'X-Naver-Client-Secret': 'DuZ9KkT_ZH'
  },
  'params': {}
};

app.get('/', (req, res) => {
  // req.query에서 query 파라미터를 받아옴
  const query = req.query.query;
  // query 파라미터가 없으면 에러 메시지 전송
  if (!query) {
    res.status(400).send('query parameter is required');
    return;
  }
  // query 파라미터를 options 객체의 params 속성에 추가
  options.params.query = query;
  // axios로 API 요청
  axios.request(options).then(function (response) {
    // intellibook.org 서버로 데이터 전송
    axios.post('https://intellibook.org/api/data', response.data)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    res.send(response.data);
  }).catch(function (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
