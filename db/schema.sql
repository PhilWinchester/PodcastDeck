BEGIN;

-- deploying schema to heroku
-- `heroku pg:psql --app block-ed < db/schema.sql`

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

INSERT INTO
  users(id, username, password, created_at)
VALUES
  ('test','test','test', current_timestamp);

COMMIT;
