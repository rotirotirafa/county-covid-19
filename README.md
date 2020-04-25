# COYNTY COVID-19 - API

Esta Api foi desenvolvida utilizando [AdonisJS](https://adonisjs.com/).

## Setup

Faça o clone deste projeto

```bash
git clone git@github.com:rotirotirafa/county-covid-19.git
```

entre na pasta `cd county-covid-19` e instale as dependencias necessárias `npm install` ou `yarn`.


### Configure o banco de dados.

Foi utilizado o [Postgres](https://www.postgresql.org/) e o Node utiliza o pacote `pg` para comunicar a Api com o Postgres [pg](https://www.npmjs.com/package/pg). Então rode `npm install pg --save-dev` ou `yarn add pg`.

Crie o banco de dados `county_covid`

*** Certifique-se de que você tenha um usuário do banco de dados com permissão de acesso ao `county_covid` ***

Na raíz do projeto, no arquivo `.env` altere os seguintes dados:


```.env
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
DB_DATABASE=county_covid
```
Após realizar a conexão com o Banco de dados, para criar as tabelas digite no terminal:

```js
adonis migration:run
```

Rode o projeto com: `yarn dev` ou `adonis serve`
