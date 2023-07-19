/*------------------------------------------기존적용-API 호출하고 응답받은 데이터를 인텔리북.org로 전송하는--------------------
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
    // items 배열에서 원하는 속성만 추출
    const items = response.data.items.map(item => ({
      책제목: item.title,
      링크: item.link,
      사진: item.image,
      저자: item.author,
      가격: item.discount,
      출판사: item.publisher,
      출간일: item.pubdate
    }));
    
    // intellibook.org 서버로 데이터 전송
    axios.post('https://intellibook.org/api/data', items)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    res.send(items);
  }).catch(function (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/

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
    // items 배열에서 원하는 속성만 추출
    const items = response.data.items.map(item => ({
      책제목: item.title,
      링크: item.link,
      사진: item.image,
      저자: item.author,
      가격: item.discount,
      출판사: item.publisher,
      출간일: item.pubdate
    }));
    res.send(items);
  }).catch(function (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*---------------------------------- axios.post 함수 추가 -> intellibook.org 로 데이터 전송 
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
