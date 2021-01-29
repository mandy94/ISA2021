
--id: 1, user
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ('user', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Marko', 'Markovic', 'user@example.com', true, '2017-10-01 21:58:58.508-07','Pacient');
--id: 2, user
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'user1', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'NIkola', 'Nikolic', 'admin@example.com', true, '2017-10-01 18:57:58.508-07', 'Pacient');
--id: 3, superadmin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'superadmin','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Igor', 'Nikolic', 'superadmin@example.com', true, '2017-10-01 18:57:58.508-07','Superadmin');
--id: 4, dermatoog
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'dermatolog', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Miljana', 'Nikolic', 'dermatolog@example.com', true, '2017-10-01 18:57:58.508-07', 'Dermatolog');
--id: 5, farmaceut
INSERT INTO USERS(username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'pharmacolog','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sladjana', 'Nikolic', 'pharmacolog@example.com', true, '2017-10-01 18:57:58.508-07','Farmaceut');
--id: 6, dermatoog
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'dermatolog2', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sara', 'Nadj', 'dermatolog2@example.com', true, '2017-10-01 18:57:58.508-07', 'Dermatolog');
--id: 7, dermatoog
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'dermatolog3', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milos', 'Komazec', 'dermatolog3@example.com', true, '2017-10-01 18:57:58.508-07', 'Dermatolog');
--id: 8, farmaceut
INSERT INTO USERS(username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'pharmacolog','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Ivan', 'Zivkovic', 'pharmacolog2@example.com', true, '2017-10-01 18:57:58.508-07','Farmaceut');
--id: 9, farmaceut
INSERT INTO USERS(username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'pharmacolog2','$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Kristijan', 'Golubovic', 'pharmacolog3@example.com', true, '2017-10-01 18:57:58.508-07','Farmaceut');
--id: 10, admin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Filip', 'Nikolic', 'admin1@example.com', true, '2017-10-01 18:57:58.508-07', 'Admin');
--id: 11, admin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'admin1', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milenko', 'Nikolic', 'admin2@example.com', true, '2017-10-01 18:57:58.508-07', 'Admin');
--id: 12, admin
INSERT INTO USERS( username, password, first_name, last_name, email, enabled, last_password_reset_date, work_role) VALUES ( 'admin2', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Kosta', 'Nikolic', 'admin3@example.com', true, '2017-10-01 18:57:58.508-07', 'Admin');


INSERT INTO PHARMACY (name, adress, admin_id)VALUES ('Apoteka dobro srce', 'Radnicka 23',10);
INSERT INTO PHARMACY (name, adress, admin_id)VALUES ('Pharmacy good', 'Somborski bulevar 125',11);
INSERT INTO PHARMACY (name, adress, admin_id)VALUES ('Medisan d.o.o', 'Djordja Rajkovica bb',12);

UPDATE users
SET dedicated_pharmacy_id = 1
WHERE id = 10;

UPDATE users
SET dedicated_pharmacy_id = 2
WHERE id = 11;
UPDATE users

SET dedicated_pharmacy_id = 3
WHERE id = 12;

INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 4, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 5, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 6, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 5, 2);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 7, 2);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 7, 3);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 8, 3);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 9, 2);

INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (29010, 35420 , 1,4);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (28810, 32420 , 1,5);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (43210, 46820 , 2,5);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (28810, 46820 , 1,6);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (28810, 46820 , 2,7);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (50410, 64820 , 3,7);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (50410, 64820 , 3,8);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (28810, 32420 , 1,8);
INSERT INTO business_hours(start_time,end_time, at_pharmacy_id, employee_id) VALUES (28810, 32420 , 1,9);

INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pacient_id, pharmacy_id) VALUES 
('25/01/2021', 'Ponovljeni kratki pregled', 0, 'Rezervisan', 28800, 32400, 6, 1, 1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pacient_id, pharmacy_id) VALUES 
('17/01/2021', 'Konsultacije oko lekova', 0, 'Odrzan', 32400, 39600, 4, 1,  1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pacient_id, pharmacy_id) VALUES 
('15/01/2021', 'Kratki pregled', 1200, 'Odrzan', 28800, 32400, 6, 1,  1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pharmacy_id) VALUES 
('26/01/2021', 'Pregled uha', 1800, 'Slobodan', 28800, 32400, 4, 1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pharmacy_id) VALUES 
('27/01/2021', 'Pregled pluca', 1200, 'Slobodan', 28800, 32400, 6, 1);
INSERT INTO APPOINTMENT_AT_DERMATOLOG (date, name, price, status, start_time, end_time, dermatolog_id, pharmacy_id) VALUES 
('27/01/2021', 'Pregled pluca i dijafragme', 1400, 'Slobodan', 50400, 54000, 7, 3);

INSERT INTO appointment_at_pharmacist (date,status,start_time, end_time, pharmacist_id ,pacient_id) VALUES 
('17/01/2021',  'Aktivan', 32400, 39600, 5, 1);

INSERT INTO AUTHORITY (name) VALUES ('ROLE_USER');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_DERMATOLOG');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_PHARMACOLOG');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_SUPER_ADMIN');


INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (1, 1);

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 1);

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (10, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (10, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (10, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (10, 4);


INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (11, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (11, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (11, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (11, 4);

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (12, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (12, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (12, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (12, 4);

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 5);

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (4, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (5, 4);

INSERT INTO DISCOUNT(about, valid_from, valid_until,value, is_active) VALUES ('Sezonsko snizenje', '17/01/2021', '28/02/2021', 40, true);
INSERT INTO DISCOUNT (about, valid_from, valid_until,value, is_active) VALUES ('Pojedinacne akcija', '22/02/2021', '25/02/2021', 35, false);
INSERT INTO DISCOUNT (about, valid_from, valid_until,value, is_active) VALUES ('Poklon paket', '31/02/2021', '31/03/2021', 20, false);


INSERT INTO MANUFACTURER(name, adress) VALUES('HEMOFARM AD VRŠAC', 'Beogradski put bb, Vršac');
INSERT INTO MANUFACTURER(name, adress) VALUES('GALENIKA AD BEOGRAD', 'Batajnički drum b.b., Beograd');

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CR02', 50, 50, true , 'Panklav Forte', 'Prasak za oralnu suspenziju', 'Staklena bočica', null, 1, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'B01AC06', 350, 350, false , 'Midol', 'Gastrorezistentna tableta', 'Blister', null, 1, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA04', 350, 350, false , '	Amoksicilin HF', 'Tvrda kapsula', 'Blister', null, 2, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'A06AB02', 350, 350, false , '	Panlax', 'Gastrorezistentna tableta', 'Blister', null, 3, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CE30', 350, 350, true , '	Pancillin', 'Prašak za suspenziju za injekciju', 'Staklena bočica', null, null, 1, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01FA10', 350, 350, false , '	Hemomycin', 'Prašak za suspenziju za injekciju', 'Staklena bočica', null, null, 1, null); 

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'N02BE01', 350, 350, true , '	Paracetamol', 'Tableta', 'Blister', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA04', 350, 350, true , '	Sinacilin', 'Tableta', 'Blister', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA01', 350, 350, true , '	Pentrexyl', 'Tableta', 'Blister', null, 3, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'S01AA30', 350, 350, true , '	Enbecin', 'Mast za oči', 'Tuba', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01EE01', 350, 350, true , '	Bactrim', 'Sirup', 'Staklena bočica', null, null, 2, null); 
INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01FA10', 350, 350, false , '	Defrinol', 'Sirup', 'Staklena bočica', null, 2, 2, null); 

