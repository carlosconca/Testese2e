# Testese2e_Cypress
 e2e com Cypress
  Instalando
 npm init --y
 npm install cypress@9.7.0 --save-dev
 Isso instalará o Cypress localmente como uma dependência de desenvolvimento para o seu projeto.

 Executando os testes com interface
 npx cypress open
 npm run test

 Executando os testes em background
 npx cypress run

 Confugurando relatório em HTML | mochawesome
 npm i -D mochawesome
 arquivo de configuração do cypress.json
 {
  "reporte": "mochawesome",
  "reporterOptions": {
    "reporterDir": "cypress/report/mochawesome-report",
    "overWrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"
  },
  "projectId": "3e26zr"
}
após configurado o arquivo, executar o seguinte comando
-npx cypress run --reporter mochawesome

Executando em Dashborad
npx cypress run --record --key 
dd079867-8074-4e3b-b6dc-288ec5c9daae
