CREATE TABLE residents (
	"id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "transfer" BOOLEAN NOT NULL, 
    "notes" VARCHAR(250));

INSERT INTO residents (name, age, gender, transfer, notes)
	VALUES
		('Scotty', 4, 'M', true, 'Born in Guatemala'),
		('Jean', 5, 'F', true, 'Allergic to lots of lava'),
		('Ororo', 7, 'F', false, 'Loves listening to Paula (Abdul)'),
		('Logan', 15, 'M', false, 'Loves the sauna'),
		('Charlie', 9, 'M', true, 'Favorite band is Nirvana'),
		('Betsy', 4, 'F', true, 'Has a pet iguana');