BEGIN TRANSACTION;

/* Create a table */


CREATE TABLE Orders (
    OrderID int,
    OrderNumber int,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);


CREATE TABLE Persons (
    PersonID integer PRIMARY KEY,
    LastName text,
    FirstName text,
    Age int
);


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