import React from 'react';

// Stateless Functional Component
const Navbar = (props) => {
  console.log('NavBar - Rendered')
  return (
    <ul>
      <li>
        <a className="active white" href="#home"> Navbar <span>{ props.totalCounter }</span>
        </a>
      </li>
    </ul>
  );
};

// class Navbar extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>
//           <a className="active white" href="#home"> Navbar <span>{ this.props.totalCounter }</span>
//           </a>
//         </li>
//       </ul>
//     );
//   };
// }

export default Navbar