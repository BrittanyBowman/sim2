INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8)

-- PURPOSE: Adding extra columns for part 2 step 1.
-- Use SQLTabs to connect to your database. Alter the houses table, adding colums for the image, monthly mortgage amount, and desired rent(hint: save the SQL command for this to show your mentor). 
-- ALTER TABLE houses
-- ADD img TEXT;

-- ALTER TABLE houses
-- ADD mortgage INTEGER;

-- ALTER TABLE houses
-- ADD rent INTEGER;