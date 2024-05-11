USE articuloDualDB;
ALTER TABLE tbl_autor ADD COLUMN usuario_id INT(20);
ALTER TABLE tbl_autor ADD CONSTRAINT fk_autor_usuario_id FOREIGN KEY (usuario_id) REFERENCES tbl_usuario(id);

UPDATE tbl_autor SET usuario_id = 1;