import { useParams } from 'react-router-dom';

import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductDetails from '../components/ProductDetails';

import products from '../data/products.jsx';

import './ProductViewPage.css';

function ProductViewPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Layout>
        <main className="product-not-found">
          <h1>Produto não encontrado</h1>
        </main>
      </Layout>
    );
  }

  const images = [
    product.image,
    '/product-thumb-1.jpeg',
    '/product-thumb-2.jpeg',
    '/product-thumb-3.jpeg',
    '/product-thumb-4.jpeg',
    '/product-thumb-5.jpeg',
  ];

  return (
    <Layout>
      <main className="product-view-page">

        <div className="product-view-layout">
          <Gallery images={images} />

          <BuyBox product={product} />
        </div>

        <ProductDetails product={product} />

      </main>
    </Layout>
  );
}

export default ProductViewPage;