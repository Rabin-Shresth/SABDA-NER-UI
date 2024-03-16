// import React from "react";
// import CTA from "./CTA";
// import Main from "./Main";

// const onclickHandle = () => {
//   return <CTA/>
// }

// const Button = ({ styles }) => (
  
//     <button onClick={onclickHandle} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//       Get Started
//     </button>
  
// );

// export default Button;

import React from "react";
import CTA from "./CTA";
import Main from "./Main";

const Button = ({ styles }) => {
  // const handleClick = () => {
  //   return <CTA />;
  // };

  return (
    <button
      onClick={onclick}
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;

