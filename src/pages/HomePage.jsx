import Layout from './Layout';
import Hero from '../components/Hero';
import CollectionSection from '../components/CollectionSection';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import products from '../data/products.jsx';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <main className="home-content">
        <CollectionSection />

        <Section title="Produtos em alta">
          <ProductListing products={products} />
        </Section>
      </main>
    </Layout>
  );
}

export default HomePage;