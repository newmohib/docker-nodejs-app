FROM node:10

COPY . /user/src/app

WORKDIR  /user/src/app

COPY ./package.json .

RUN npm install


#EXPOSE 3000 

CMD ["npm", "start" ]