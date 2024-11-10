/* 
  실행 시 swagger API 문서가 초기화되므로 최초의 한 번만 실행
*/
const swaggerAutogen = require('swagger-autogen')();
const PORT = process.env.PORT || 3000;

// swagger setting
const options = {
    info:{
      title: "퀴푸 토이프로젝트 API 문서",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = [
    '../app.js',
];

swaggerAutogen(outputFile, endpointsFiles, options);