/*
//서버 실행+naver-api.js
const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

const options = {
  'method': 'GET',
  //'url': 'https://openapi.naver.com/v1/search/book_adv',
  'url': 'https://openapi.naver.com/v1/search/book.json',
  'params': { query: '', display: 10, start: 1 }
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
*/
const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
const axios = require('axios');

const CLIENT_ID = 'j8PIiTpiuPi6PzcQD4MV';
const CLIENT_SECRET = 'DuZ9KkT_ZH';

const options = {
  method: 'GET',
  url: 'https://openapi.naver.com/v1/search/book.json',
  params: { query: 'YOUR_QUERY', display: 10, start: 1 },
  headers: { 'X-Naver-Client-Id': CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);

app.get('/', (req, res) => {
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});




/*  삭제해도 관계없을
const express = require('express')
const axios = require('axios') //추
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, Cloudtype!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
