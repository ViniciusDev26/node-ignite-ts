import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteColumnUsername1636783545826
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
    );
  }
}
