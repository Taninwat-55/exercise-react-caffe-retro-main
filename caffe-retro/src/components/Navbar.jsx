// import { Link } from "./Link";

// export const Navbar = (props) => {
//   return (
//     <nav className="navbar">
//       <div className="links">
//         {props.links.map((link) => {
//           return <Link key={link.id} link={link} />;
//         })}
//       </div>
//     </nav>
//   );
// };

// import { Link } from "./Link";

// export const Navbar = () => {
//   const links = ["Hot", "Juicy", "Cosy"];

//   return (
//     <nav className="navbar">
//       <div className="links">
//         {links.map((name, index) => (
//           <Link key={index} name={name} />
//         ))}
//       </div>
//     </nav>
//   );
// };

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
