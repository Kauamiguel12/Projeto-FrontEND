import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';

import products from '../data/products.jsx';

import './ProductsPage.css';

function ProductsPage() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevance');

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('busca') || '';

  const brands = [
    ...new Set(products.map((product) => product.brand).filter(Boolean))
  ];

  const categories = [
    ...new Set(products.map((product) => product.category).filter(Boolean))
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const term = searchTerm.toLowerCase();

      const matchesSearch =
        (product.name || '').toLowerCase().includes(term) ||
        (product.brand || '').toLowerCase().includes(term) ||
        (product.category || '').toLowerCase().includes(term);

      return matchesBrand && matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const priceA = Number(
        (a.priceDiscount || a.price).replace(',', '.')
      );

      const priceB = Number(
        (b.priceDiscount || b.price).replace(',', '.')
      );

      if (sortOrder === 'lowest') return priceA - priceB;
      if (sortOrder === 'highest') return priceB - priceA;

      return 0;
    });

  return (
    <Layout>
      <main className="products-page">

        <div className="products-heading">
          <h1>Produtos</h1>
          <span>
            {filteredProducts.length} produtos encontrados
          </span>
        </div>

        <div className="products-layout">

          <aside className="products-filters">
            <h2>Filtrar por</h2>

            <FilterGroup
              title="Marca"
              options={brands}
              selectedValues={selectedBrands}
              onChange={setSelectedBrands}
            />

            <FilterGroup
              title="Categoria"
              options={categories}
              selectedValues={selectedCategories}
              onChange={setSelectedCategories}
            />
          </aside>

          <section className="products-results">

            <div className="products-sort">
              <label htmlFor="sort-products">
                Ordenar por:
              </label>

              <select
                id="sort-products"
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(event.target.value)
                }
              >
                <option value="relevance">Mais relevantes</option>
                <option value="lowest">Menor preço</option>
                <option value="highest">Maior preço</option>
              </select>
            </div>

            <Section title="Todos os produtos">
              {filteredProducts.length > 0 ? (
                <ProductListing products={filteredProducts} />
              ) : (
                <p>Nenhum produto encontrado.</p>
              )}
            </Section>

          </section>
        </div>
      </main>
    </Layout>
  );
}

export default ProductsPage;