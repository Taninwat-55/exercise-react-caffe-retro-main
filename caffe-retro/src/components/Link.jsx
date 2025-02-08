// export function Link({ link }) {
//     return (
//       <div>
//         <span>{link.name} - ${link.price.toFixed(2)}</span>
//       </div>
//     );
//   }

export function Link({ name }) {
  return <span className="nav-link">{name}</span>;
}
