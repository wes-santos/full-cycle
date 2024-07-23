USE nodedb;

CREATE TABLE IF NOT EXISTS people(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
);

INSERT INTO people (id, name) VALUES (1, 'Weslley');
