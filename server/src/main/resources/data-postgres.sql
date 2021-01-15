--id: 1, user
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ('user', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Marko', 'Markovic', 'user@example.com', true, '2017-10-01 21:58:58.508-07','Pacient');
--id: 2, admin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'NIkola', 'Nikolic', 'admin@example.com', true, '2017-10-01 18:57:58.508-07', 'Admin');
--id: 3, superadmin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'superadmin','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Igor', 'Nikolic', 'superadmin@example.com', true, '2017-10-01 18:57:58.508-07','Superadmin');
--id: 4, dermatoog
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'dermatolog', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Miljana', 'Nikolic', 'dermatolog@example.com', true, '2017-10-01 18:57:58.508-07', 'Dermatolog');
--id: 5, farmaceut
INSERT INTO USERS(username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'pharmacolog','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sladjana', 'Nikolic', 'pharmacolog@example.com', true, '2017-10-01 18:57:58.508-07','Farmaceut');


INSERT INTO PHARMACY (name, adress) VALUES ('Apoteka dobro srce', 'Radnicka 23');
INSERT INTO PHARMACY (name, adress) VALUES ('Pharmacy good', 'Somborski bulevar 125');

INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 4, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 5, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 5, 2);

INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name,price,status,time,dermatolog_id,pacient_id) VALUES 
('15/01/2021', 'Kratki pregled', 1200, 'Aktivan', '08:00', 4, 1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name,price,status,time,dermatolog_id,pacient_id) VALUES 
('17/01/2021', 'Konsultacije oko lekova', 0, 'Aktivan', '09:00', 4, 1);

INSERT INTO AUTHORITY (name) VALUES ('ROLE_USER');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_DERMATOLOG');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_PHARMACOLOG');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_SUPER_ADMIN');


INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (1, 1); -- autoriteti nisu kulumativni negoi diskretni
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 5);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (4, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (5, 4);


INSERT INTO MANUFACTURER(name, adress) VALUES('HEMOFARM AD VRŠAC', 'Beogradski put bb, Vršac');
INSERT INTO MANUFACTURER(name, adress) VALUES('GALENIKA AD BEOGRAD', 'Batajnički drum b.b., Beograd');

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CR02', 50, 50, true , 'Panklav Forte', 'Prasak za oralnu suspenziju', 'Staklena bočica', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'B01AC06', 350, 350, false , 'Midol', 'Gastrorezistentna tableta', 'blister', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA04', 350, 350, false , '	Amoksicilin HF', 'Tvrda kapsula', 'blister', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'A06AB02', 350, 350, false , '	Panlax', 'Gastrorezistentna tableta', 'blister', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CE30', 350, 350, true , '	Pancillin', 'Prašak za suspenziju za injekciju', 'Staklena bočica', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01FA10', 350, 350, false , '	Hemomycin', 'Prašak za suspenziju za injekciju', 'Staklena bočica', null, null, 1, null); 

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'N02BE01', 350, 350, true , '	Paracetamol', 'Tableta', 'Blister', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA04', 350, 350, true , '	Sinacilin', 'Tableta', 'Blister', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA01', 350, 350, true , '	Pentrexyl', 'Tableta', 'Blister', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'S01AA30', 350, 350, true , '	Enbecin', 'Mast za oči', 'Tuba', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01EE01', 350, 350, true , '	Bactrim', 'Sirup', 'Staklena bočica', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01FA10', 350, 350, false , '	Defrinol', 'Sirup', 'Staklena bočica', null, null, 2, null); 

