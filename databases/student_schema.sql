CREATE TABLE Student (
 id INTEGER NOT NULL,
 firstname VARCHAR(50) NOT NULL,
 lastname VARCHAR(50) NOT NULL,
 streetaddress VARCHAR(100) NOT NULL,
 postcode CHAR(5) NOT NULL,
 postoffice VARCHAR(100) NOT NULL,
 CONSTRAINT pk_student PRIMARY KEY(id)
)
//Populate the Student table with test data

INSERT INTO Student (id, firstname, lastname, streetaddress, postcode,
postoffice) VALUES
(30, 'Chrissie', 'Hynde', 'Kuusikuja 6', '01200', 'VANTAA'),
(20, 'Eric', 'Clapp', 'Luuttutie 4', '54120', 'PULP'),
(10, 'Jack', 'Bruce', 'Asematori 3', '00520', 'HELSINKI'),
(40, 'Ginger', 'Baker', 'Rumputie 10', '54120', 'PULP')
