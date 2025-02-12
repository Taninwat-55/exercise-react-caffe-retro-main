/* eslint-disable react/prop-types*/

export default function Section({
  title,
  description1,
  description2,
  menuItems,
  background,
  sectionRef,
}) {
  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="title">{title}</h1>

      <div className="description-box box1">{description1}</div>
      <div className="description-box box2">{description2}</div>

      {menuItems && (
        <div className="menu-box">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.name} <span>€{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
