-- status table
CREATE TABLE IF NOT EXISTS "Status" (
  "id" SERIAL NOT NULL,
  "statusName" varchar(255) NOT NULL UNIQUE,
  "createdAt" TIMESTAMP,
  "updatedAt" TIMESTAMP,
  "version" INT NOT NULL,
  PRIMARY KEY ("id")
);

-- customer table
CREATE TABLE IF NOT EXISTS "Customer" (
  "id" SERIAL NOT NULL,
  "statusId" INT NOT NULL,
  "identifier" varchar(255) NOT NULL UNIQUE,
  "firstName" varchar(255) NOT NULL,
  "lastName" varchar(255) NOT NULL,
  "phoneNum" varchar(255) NOT NULL,
  "emailAdd" varchar(255) NOT NULL,
  "createdAt" TIMESTAMP,
  "updatedAt" TIMESTAMP,
  "version" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT fk_status
      FOREIGN KEY("statusId") 
	  REFERENCES "Status"("id")
);

-- note table
CREATE TABLE IF NOT EXISTS "Note" (
  "id" SERIAL NOT NULL,
  "customerId" INT NOT NULL,
  "noteContent" TEXT NOT NULL,
  "createdAt" TIMESTAMP,
  "updatedAt" TIMESTAMP,
  "version" INT NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT fk_note
      FOREIGN KEY("customerId") 
	  REFERENCES "Customer"("id")
);
