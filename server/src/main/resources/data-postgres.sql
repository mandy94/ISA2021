
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, dtype) VALUES ('user', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Marko', 'Markovic', 'user@example.com', true, '2017-10-01 21:58:58.508-07', 'USER');
INSERT INTO USERS (username, password, first_name, last_name, email, enabled, last_password_reset_date, dtype) VALUES ('admin', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Nikola', 'Nikolic', 'admin@example.com', true, '2017-10-01 18:57:58.508-07', 'ADMIN');

INSERT INTO AUTHORITY (name) VALUES ('ROLE_USER');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 2);

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
