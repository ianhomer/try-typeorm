import { MigrationInterface, QueryRunner } from "typeorm";

export class change1568613787263 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`,
      undefined
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "name") SELECT "id", "name" FROM "user"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "user"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_user" RENAME TO "user"`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME TO "temporary_user"`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`,
      undefined
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "name") SELECT "id", "name" FROM "temporary_user"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`, undefined);
  }
}
