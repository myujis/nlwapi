import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614338507315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type:"varchar"
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
