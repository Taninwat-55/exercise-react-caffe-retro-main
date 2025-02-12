/* eslint-disable react/prop-types*/



export const Navbar = ({ hotRef, juicyRef, cozyRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="links">
        <span className="nav-link" onClick={() => scrollToSection(hotRef)}>
          Hot
        </span>
        <span className="nav-link" onClick={() => scrollToSection(juicyRef)}>
          Juicy
        </span>
        <span className="nav-link" onClick={() => scrollToSection(cozyRef)}>
          Cozy
        </span>
      </div>
    </nav>
  );
};
