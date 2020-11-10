import Product from '../models/Products';
import ProductsRepository from '../repositories/ProductsRepository';

interface RequestDTO {
  id: string;

  image: string;

  name: string;

  categories: string;

  price: number;

  brand: string;
}

class CreateProduct {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public execute({
    id,
    image,
    name,
    categories,
    price,
    brand,
  }: RequestDTO): Product {
    const product = this.productsRepository.create({
      id,
      image,
      name,
      categories,
      price,
      brand,
    });

    return product;
  }
}

export default CreateProduct;
