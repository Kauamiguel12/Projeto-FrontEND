
import Section from './Section';
import './CollectionSection.css';

const collections = [
  {
    id: 1,
    image: '/collection-1.png',
    title: 'Coleção em destaque 1',
  },
  {
    id: 2,
    image: '/collection-2.png',
    title: 'Coleção em destaque 2',
  },
  {
    id: 3,
    image: '/collection-3.png',
    title: 'Coleção em destaque 3',
  },
];

function CollectionSection() {
  return (
    <Section title="Coleções em destaque">
      <div className="collection-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.id}>
            <img
              src={collection.image}
              alt={collection.title}
            />

            <div className="collection-overlay">
              <h3>{collection.title}</h3>
              <a href="/produtos">Ver coleção</a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default CollectionSection;
