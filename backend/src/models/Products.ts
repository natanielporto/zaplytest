import { Entity, Column } from 'typeorm';

@Entity('products')
class Product {
  @Column()
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  categories: string;

  @Column('float')
  price: number;

  @Column()
  brand: string;
}

export default Product;
