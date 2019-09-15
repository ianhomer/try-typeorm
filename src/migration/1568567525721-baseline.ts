import {MigrationInterface, QueryRunner} from "typeorm";

export class baseline1568567525721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "user_categories_group" ("userId" integer NOT NULL, "groupId" integer NOT NULL, PRIMARY KEY ("userId", "groupId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bf731552c81ed98f550829a4b0" ON "user_categories_group" ("userId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_da769c52566d6d12dc884865eb" ON "user_categories_group" ("groupId") `, undefined);
        await queryRunner.query(`CREATE TABLE "group_users_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, PRIMARY KEY ("groupId", "userId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_fe6cce7d479552c17823e267af" ON "group_users_user" ("groupId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_55edea38fece215a3b66443a49" ON "group_users_user" ("userId") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_55edea38fece215a3b66443a49"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_fe6cce7d479552c17823e267af"`, undefined);
        await queryRunner.query(`DROP TABLE "group_users_user"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_da769c52566d6d12dc884865eb"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_bf731552c81ed98f550829a4b0"`, undefined);
        await queryRunner.query(`DROP TABLE "user_categories_group"`, undefined);
        await queryRunner.query(`DROP TABLE "group"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
