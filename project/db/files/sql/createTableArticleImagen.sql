USE articuloDualDB;

CREATE TABLE tbl_articulo_imagen (
     id INT auto_increment primary key not null,
     articulo_id INT,
     imagen_id INT,
     FOREIGN KEY fk_articulo_imagen_articulo_id (articulo_id) REFERENCES tbl_articulo(id),
     FOREIGN KEY fk_articulo_imagen_imagen_id (imagen_id) REFERENCES tbl_imagen(id)
);