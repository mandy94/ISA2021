
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


INSERT INTO PHARMACY (name, adress, city, rating) VALUES ('Apoteka dobro srce', 'Radnicka 23', 'Novi Sad', 5.0);
INSERT INTO PHARMACY (name, adress, city, rating) VALUES ('Pharmacy good', 'Somborski bulevar 125', 'Novi Sad', 4.8);
INSERT INTO PHARMACY (name, adress, city, rating) VALUES ('Medisan d.o.o', 'Djordja Rajkovica bb', 'Beograd', 2.3);
INSERT INTO PHARMACY (name, adress, city, rating) VALUES ('Medisan d.o.o', 'Branka Ćopića 134', 'Subotica', 2.8);
INSERT INTO PHARMACY (name, adress, city, rating) VALUES ('Benu', 'Svetozara MIletića 12', 'Bečej', 3.7);

INSERT INTO PHARMACY_ADMINS ( pharmacy_id, admins_id) VALUES (1, 10);
INSERT INTO PHARMACY_ADMINS ( pharmacy_id, admins_id) VALUES (2, 11);
INSERT INTO PHARMACY_ADMINS ( pharmacy_id, admins_id) VALUES (3, 12);


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
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 5, 2);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 6, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 7, 2);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 7, 3);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 8, 3);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 8, 1);
INSERT INTO users_work_in_pharmacies(user_id, pharmacy_id ) values( 9, 2);

INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (29010, 35420, 4 , 1);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (28810, 39600, 5 , 1);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (43210, 46820, 5 , 2);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (28810, 46820, 6 , 1);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (28810, 46820, 7 , 2);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (50410, 64820, 7 , 3);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (50410, 64820, 8 , 3);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (28810, 32420, 8 , 1);
INSERT INTO business_hours(start_time,end_time, employee_id, at_pharmacy_id) VALUES (28810, 32420, 9 , 2);

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
('17/01/2021',  'Odrzan', 32400, 39600, 5, 1);

INSERT INTO appointment_at_pharmacist (date,status,start_time, end_time, pharmacist_id ,pacient_id) VALUES 
('17/02/2021',  'Rezervisan', 37800, 39600, 5, 1); -- 10:30 do 11:00

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

INSERT INTO INGREDIENT (name, code) VALUES ( 'Diklofenak-kalijum', 2352);
INSERT INTO INGREDIENT (name, code) VALUES ( 'Aspirin', 4532);
INSERT INTO INGREDIENT (name, code) VALUES ( 'Ibuprofen', 6336);
INSERT INTO INGREDIENT (name, code) VALUES ( 'cefaleksin', 8908); -- Palitrex
INSERT INTO INGREDIENT (name, code) VALUES ( 'Diazepam', 6806); -- bensedin
INSERT INTO INGREDIENT (name, code) VALUES ( 'Laktoza', 5789);-- bensedin
INSERT INTO INGREDIENT (name, code) VALUES ( 'Monohidrat', 2463);-- bensedin
INSERT INTO INGREDIENT (name, code) VALUES ( 'Magnezijum-stearat', 2322);-- bensedin
INSERT INTO INGREDIENT (name, code) VALUES ( 'Povidon', 1223); -- bensedin

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01CA01', 350, 350, true , 'DEXTROSE / VIOSER 10%', 'Rastvor za infuziju', 'Glukoza', null, 3, 2, null); 

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'S01AA30', 350, 350, true , 'Anexate', 'Rastvor za injekciju', 'Flumazenil', null, null, 2, null); 

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01EE01', 350, 350, true , 'Bensedin', 'Tableta', 'Diazepan', null, null, 2, null); 

INSERT INTO MEDICINE (code, initial_price, current_price, mandatory_prescription, name, shape, type, warning_notes, active_discount_id, manufacturer_id, medicine_id) VALUES ( 'J01FA10', 350, 350, false , 'Palitrex', 'Prašak za oralnu suspenziju', 'Cefaleksin', null, 2, 2, null); 

INSERT INTO stock_item (pharmacy_id, medicine_id,available_quantity) values (1, 1, 3);

INSERT INTO pharmacy_has_medicines (pharmacy_id, has_medicines_id) VALUES (1,1);

INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 3, 3);
INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 4, 3);
INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 5, 3);
INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 6, 3);
INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 7, 3);
INSERT INTO ingredient_found_in (ingredient_id, found_in_id) VALUES ( 4, 4);

INSERT INTO prescription_item (amount, medicine_id) VALUES (2, 1); -- dve dekstroze
INSERT INTO prescription_item (amount, medicine_id) VALUES (1, 4); -- jedan palitrex
INSERT INTO prescription_item (amount, medicine_id) VALUES (1, 4); -- jos jedan palitrex
INSERT INTO prescription_item (amount, medicine_id) VALUES (1, 3); -- odbijeno bensedin

INSERT INTO prescription (code, date,pacient_id,status) VALUES (3456124, '30/01/2021', 1, 'Nov');
INSERT INTO prescription (code, date,pacient_id,status) VALUES (3456938, '15/01/2021', 1, 'Nov');
INSERT INTO prescription (code, date,pacient_id,status) VALUES (94762, '13/01/2021', 5, 'Odbijen');

INSERT INTO prescription_item_medicine( prescription_id, item_medicine_id) VALUES ( 1 , 1);
INSERT INTO prescription_item_medicine( prescription_id, item_medicine_id) VALUES ( 1 , 2); -- na provm receptu 2 leka
INSERT INTO prescription_item_medicine( prescription_id, item_medicine_id) VALUES ( 2 , 3); -- na drugom jedan lek
INSERT INTO prescription_item_medicine( prescription_id, item_medicine_id) VALUES ( 3 , 4); -- odbijeni lek. ne moze 5 kutija bensedina bre


