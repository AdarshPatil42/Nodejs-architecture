## nodejs-architecture

Manual add below entry one time db operaction

- product Categories
- sub-product Categories

- add product required mst tables add one filed =='Others' using add new text.

## Dependencies

- npm install express sequelize mysql2 dotenv express-validator cors bcryptjs axios body-parser jsonwebtoken uuid
- npm install --save-dev nodemon
- npm install cross-env --save-dev
- npx sequelize-cli init
- npm install winston
- npm install winston-daily-rotate-file
- npm install eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-sonarjs --save-dotenv

# Migrations Example commands

- npx sequelize-cli migration:generate --name create_tr_roles --migrations-path src/migrations (create_tr_roles is name)
- npx sequelize-cli db:migrate --migrations-path src/migrations
- npx sequelize-cli seed:generate --name seed-tr-roles --seeders-path src/seeders
- npx sequelize-cli db:seed:all --seeders-path src/seeders

## Required VS code IDE extensions
- Prettier - Code formatter
- ESLint
- Prettier - Code formatter