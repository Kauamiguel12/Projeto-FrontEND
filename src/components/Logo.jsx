import './Logo.css';
function Logo({ src }) {
  return (
    <img
      src={src}
      alt="Digital Store"
      className="logo"
    />
  );
}

export default Logo;