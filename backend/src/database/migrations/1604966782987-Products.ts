import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Products1604966782987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'categories',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'float(2)',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
