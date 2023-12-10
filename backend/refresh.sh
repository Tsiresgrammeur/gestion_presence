#!/bin/bash

npx knex migrate:rollback --knexfile db/knexfile.js
npx knex migrate:latest --knexfile db/knexfile.js
npx knex seed:run --knexfile db/knexfile.js
