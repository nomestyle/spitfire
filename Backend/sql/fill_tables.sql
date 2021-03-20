INSERT INTO public."Status" VALUES
    (0, 'non-active', current_timestamp, current_timestamp,0),
	(1, 'prospective', current_timestamp, current_timestamp,0),
	(2, 'current', current_timestamp, current_timestamp,0);

INSERT INTO public."Customer" ("id","statusId","identifier","firstName","lastName","phoneNum","emailAdd","createdAt","updatedAt","version") VALUES
	(0, 0, '000', 'test', 'user', '000-0000', 'test@test.test', current_timestamp, current_timestamp,0),
	(1, 1, '001', 'alpha', 'beta', '000-0000', 'alpha@test.test', current_timestamp, current_timestamp,0),
	(2, 2, '002', 'charlie', 'delta', '000-0000', 'charlie@test.test', current_timestamp, current_timestamp,0),
	(3, 2, '003', 'omega', 'zulu', '000-0000', 'omega@test.test', current_timestamp, current_timestamp,0);

INSERT INTO public."Note" ("id","customerId","noteContent","createdAt","updatedAt","version") VALUES
	(0, 0, 'test note', current_timestamp, current_timestamp,0);
