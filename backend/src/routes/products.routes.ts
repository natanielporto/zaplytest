import { Router } from 'express';

import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateAppointmentService';

const productsRouter = Router();
const productsRepository = new ProductsRepository();

productsRouter.get('/', (request, response) => {
  const products = productsRepository.all();
  return response.json(products);
});

productsRouter.post('/', (request, response) => {
  try {
    const { id, image, name, categories, price, brand, date } = request.body;

    const createProduct = new CreateProductService(productsRepository);

    const product = createProduct.execute({
      id,
      image,
      name,
      categories,
      price,
      brand,
    });
    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
