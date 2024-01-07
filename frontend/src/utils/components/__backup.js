CREATE TABLE wards (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ward_name VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES wardNames(id)
);

// Tabela para armazenar os nomes das alas (ward_names)
CREATE TABLE wardNames (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ward_name VARCHAR(255) NOT NULL
);

// Tabela para cada sala de cada ala (ward)
CREATE TABLE ward_rooms (
  id INT PRIMARY KEY,
  ward_id INT,
  capacity INT,
  FOREIGN KEY (ward_id) REFERENCES wards(id)
);

// Tabela para armazenar informações sobre cada sala (room)
CREATE TABLE rooms (
  id INT PRIMARY KEY,
  ward_room_id INT,
  ward_id INT,
  FOREIGN KEY (ward_room_id) REFERENCES ward_rooms(id),
  FOREIGN KEY (ward_id) REFERENCES wards(id)
);