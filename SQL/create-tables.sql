DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    surname VARCHAR(200) NOT NULL,
    firstname VARCHAR(200) NOT NULL,
    email_address VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    day INTEGER NOT NULL CHECK(day >=1 and day <=7),
    starttime TIME NOT NULL,
    endtime TIME NOT NULL
);