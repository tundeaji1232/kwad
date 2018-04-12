BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS opportunities CASCADE;
DROP TABLE IF EXISTS  networth CASCADE;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE opportunities (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) NOT NULL,
    brandName VARCHAR(100) NOT NULL,
    brandUrl VARCHAR(200),
    brandDescription TEXT,
    usp TEXT,
    tags VARCHAR(100),
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE networth (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id) NOT NULL,
    facebookPage VARCHAR (100),
    instagram VARCHAR (100),
    blogSite VARCHAR (100),
    twitter VARCHAR (100),
    dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password) VALUES ('Mike', 'mike@gmail.com','$2a$10$KvGtPMwZ.yo2Wd9m48zeGeGNWon74vbXqNjPr9IrQuavhGrPtsdVi'), ('Jim', 'jim@gmail.com', '$2a$10$KvGtPMwZ.yo2Wd9m48zeGeGNWon74vbXqNjPr9IrQuavhGrPtsdVi');

INSERT INTO opportunities (userId, brandName, brandurl, brandDescription, usp, tags) VALUES (2, 'cake', 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg?itok=OVpUSQm9', 'flour\neggs\ncream', 'make cake\n\neat it', 'health');

INSERT INTO networth (userId, facebookPage, instagram, blogSite, twitter) VALUES (2, 'https://www.facebook.com/webstartnow/', 'https://www.instagram.com/webstartnow', 'https://ajiboyetunde.wixsite.com/webstartnoww', 'https://www.twitter.com/webstartnow');
COMMIT;