BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "wins" (
	"id"	INTEGER NOT NULL UNIQUE,
	"dateTime"	TEXT NOT NULL,
	"win_at_guess"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "words" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"word"	TEXT NOT NULL,
	"word_no_accent_mark"	TEXT NOT NULL,
	PRIMARY KEY("ID")
);
INSERT INTO "words" VALUES (1,'vuông','vuong');
INSERT INTO "words" VALUES (2,'gương','guong');
INSERT INTO "words" VALUES (3,'am hiểu','amhieu');
INSERT INTO "words" VALUES (4,'an ninh','anninh');
INSERT INTO "words" VALUES (5,'anh em','anhem');
INSERT INTO "words" VALUES (6,'anh chị','anhchi');
INSERT INTO "words" VALUES (7,'anh hùng','anhhung');
INSERT INTO "words" VALUES (8,'anh linh','anhlinh');
INSERT INTO "words" VALUES (9,'ban mai','banmai');
INSERT INTO "words" VALUES (10,'bao bọc','baoboc');
INSERT INTO "words" VALUES (11,'bao gạo','baogao');
INSERT INTO "words" VALUES (12,'bao phủ','baophu');
INSERT INTO "words" VALUES (13,'bao trùm','baotrum');
INSERT INTO "words" VALUES (14,'bay hơi','bayhoi');
INSERT INTO "words" VALUES (15,'bay nhẩy','baynhay');
INSERT INTO "words" VALUES (16,'bi kịch','bikich');
INSERT INTO "words" VALUES (17,'bi quan','biquan');
INSERT INTO "words" VALUES (18,'binh khí','binhkhi');
INSERT INTO "words" VALUES (19,'binh pháp','binhphap');
INSERT INTO "words" VALUES (20,'biên dịch','biendich');
INSERT INTO "words" VALUES (21,'biên tập','bientap');
INSERT INTO "words" VALUES (22,'biên chế','bienche');
INSERT INTO "words" VALUES (23,'biết ơn','bieton');
INSERT INTO "words" VALUES (24,'buôn bán','buonban');
INSERT INTO "words" VALUES (25,'buồn ngủ','buonngu');
INSERT INTO "words" VALUES (26,'buổi sáng','buoisang');
COMMIT;
