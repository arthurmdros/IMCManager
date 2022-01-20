create table tb_classification (id int8 generated by default as identity, nome varchar(255), primary key (id));
create table tb_pessoa (id int8 generated by default as identity, altura float8, cpf varchar(255), data_nasc date, nome varchar(255), peso float8, sexo varchar(255), classimc_id int8, primary key (id));
alter table if exists tb_pessoa add constraint FKoi48edbbd0nm6j6fy85apmh73 foreign key (classimc_id) references tb_classification;
INSERT INTO tb_classification(nome) VALUES ('Não atribuido');
INSERT INTO tb_classification(nome) VALUES ('Magreza');
INSERT INTO tb_classification(nome) VALUES ('Normal');
INSERT INTO tb_classification(nome) VALUES ('Sobrepeso');
INSERT INTO tb_classification(nome) VALUES ('Obesidade grau I');
INSERT INTO tb_classification(nome) VALUES ('Obesidade grau II');
INSERT INTO tb_classification(nome) VALUES ('Obesidade grau III');
INSERT INTO tb_pessoa(nome, data_nasc, cpf, sexo, altura, peso, classIMC_id) VALUES ('joao','1998-05-26','111.222.333-44','M',1.81,98.7,4);
INSERT INTO tb_pessoa(nome, data_nasc, cpf, sexo, altura, peso, classIMC_id) VALUES ('maria','1995-03-01','555.666.777-88','F',1.65,56.8,2);
INSERT INTO tb_pessoa(nome, data_nasc, cpf, sexo, altura, peso, classIMC_id) VALUES ('rafael','1999-10-30','999.000.111-22','M',1.76,83.0,3);
INSERT INTO tb_pessoa(nome, data_nasc, cpf, sexo, altura, peso, classIMC_id) VALUES ('laura','2000-02-11','333.444.555-66','F',1.70,58.0,2);
INSERT INTO tb_pessoa(nome, data_nasc, cpf, sexo, altura, peso, classIMC_id) VALUES ('ingrid','1990-08-25','777.888.999-00','F',1.60,60.5,2);
