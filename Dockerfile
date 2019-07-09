# Node 버젼 8의 이미지를 기본으로 합니다.
FROM node:alpine

# 애플리케이션이 위치할 디렉토리를 생성합니다.
WORKDIR /user/src/app

# npm을 이용하여 필요한 패키지를 설치합니다.
COPY package*.json ./
RUN npm install

# 모든 애플리케이션 파일을 복사합니다.
COPY . .

# 포트를 익스포즈 합니다.
EXPOSE 8080

# 애플리케이션를 실행합니다.
CMD ["npm", "start"]
