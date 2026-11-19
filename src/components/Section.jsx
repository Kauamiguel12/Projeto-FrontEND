
 
import './Section.css';

function Section({ title, titleAlign = 'left', children }) {
  return (
    <section className="section">
      <div className={`section-title ${titleAlign}`}>
        <h2>{title}</h2>
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
