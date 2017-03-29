/* Create a table */
CREATE TABLE Persons (
    PersonID integer PRIMARY KEY,
    LastName text,
    FirstName text,
    Age int
);
CREATE TABLE Orders (
    OrderID int,
    OrderNumber int,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

CREATE TABLE provincia (
  id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  nombre VARCHAR(50) NOT NULL ,
  codigo31662 CHAR(4) NOT NULL ,
  PRIMARY KEY (id) ,
  UNIQUE INDEX codigo31662_UNIQUE (codigo31662 ASC))
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE localidad (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT ,
  provincia_id TINYINT UNSIGNED NOT NULL ,
  nombre VARCHAR(50) NOT NULL ,
  codigopostall SMALLINT(6) NOT NULL ,
  PRIMARY KEY (id) ,
  INDEX fk_localidad_provincia_idx (provincia_id ASC) ,
  CONSTRAINT fk_localidad_provincia
    FOREIGN KEY (provincia_id )
    REFERENCES provincia (id )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

/* Create few records in this table */
INSERT INTO Persons VALUES(1,'Hansen','Ola',30);
INSERT INTO Persons VALUES(2,'Svendson','Tove',23);
INSERT INTO Persons VALUES(3,'Pettersen','Kari',20);
INSERT INTO Orders VALUES(1, 77895, 3);
INSERT INTO Orders VALUES(2, 44678, 3);
INSERT INTO Orders VALUES(3, 22456, 2);
INSERT INTO Orders VALUES(4, 24562, 1);
COMMIT;


/* Display all the records from the table */
SELECT * FROM Persons;
SELECT * FROM Orders;
SELECT
    Orders.OrderNumber
    FROM
        Persons, Orders
    where
        Orders.PersonId=Persons.PersonId
        AND
        Persons.LastName='Pettersen';