// import React from 'react'

// function Main() {
//   return (
//     <div>
    
//     </div>
//   )
// }

// export default Main

import React, { useState } from "react";
import Button from "./Button";
import CTA from "./CTA";
//import Main from "./Main";

const Main = () => {
  const [showCTA, setShowCTA] = useState(false);

  const handleButtonClick = () => {
    setShowCTA(true); // Show CTA component when button is clicked
  };

  return (
    // <div>
    //   {showCTA ? (
    //     <CTA />
    //   ) : (
    //     <div>
    //       <CTA />
    //       <Button styles="custom-styles" onClick={handleButtonClick} />
    //     </div>
    //   )}
    // </div>
    <div>
      {!showCTA && (
        <div>
          <h2>Main Component</h2>
          <Button styles="custom-styles" onClick={handleButtonClick} />
        </div>
      )}
      {showCTA && <CTA />}
    </div>
  );
};

export default Main;

