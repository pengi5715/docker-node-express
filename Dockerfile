# 의존성 설치
FROM node:16-buster
WORKDIR /app

RUN install docker-compose
#COPY 전에 Docker 캐싱 매커니즘 활용
RUN npm install  
COPY package*.json ./ 
RUN npm ci --only=production
# 추가된 부분
RUN npm install axios
RUN npm install request

ENV NODE_ENV production

COPY . .

# node 이미지에 이미 "node"라는 사용자가 uid/gid 1000번으로 생성되어 있음
USER node

EXPOSE 3000
CMD ["npm", "start"]
