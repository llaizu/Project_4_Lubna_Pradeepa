DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    dayoftheweek VARCHAR(200) NOT NULL,
    starttime TIMESTAMP(6) NOT NULL,
    endtime TIMESTAMP(6) NOT NULL
),
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    surname VARCHAR(200) NOT NULL,
    firstname VARCHAR(200) NOT NULL,
    email_address VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL
);