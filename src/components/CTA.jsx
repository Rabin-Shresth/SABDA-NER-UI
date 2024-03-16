import React, { useState } from "react";
import styles from "../style";

const entityLabels = {
  0: "Other",
  1: "B-Person",
  2: "I-Person",
  3: "B-Organization",
  4: "I-Organization",
  5: "B-Location",
  6: "I-Location",
};


const CTA = () => {
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const response = await fetch("http://127.0.0.1:5000/predict", {
      // Update the URL here
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResults(data);
  };
  

  return (
    <section
      id="product"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      style={{ height: "1000px" }}
    >
      <div className="flex-1 flex flex-col" >
        <div className="flex-1 flex items-center flex-col">
          <h2 className={`${styles.heading2} text-center `} >Try out our application now!</h2>
          <p className={`${styles.paragraph} max-w-[500px] mt-5 text-center`}>
            The only tool you will ever need to tackle complex documents worded
            in Nepali Language!
          </p>
        </div>
        <div className={`${styles.flexCenter} sm:mt-10 mt-5`}>
          <form id="nerForm" onSubmit={handleSubmit}>
            <label
              htmlFor="sentence"
              style={{ color: "white", marginBottom: "10px", fontSize:"25px" }}
            >
              Enter a sentence:
            </label>
            <br />

            <textarea
              type="text"
              id="sentence"
              name="sentence"
              required
              style={{
                marginBottom: "10px",
                width: "50vw",
                height: "150px",
                resize: "none", // Prevent resizing
                overflowX: "auto",
                wordWrap: "break-word",
              }}
              maxLength={500}
            />
            <br />

            <input
              type="submit"
              value="Submit"
              className={`${styles.flexCenter} ${styles.button} ${styles.buttonPrimary} rounded-full w-[100px] h-[40px] bg-blue-gradient p-[2px] cursor-pointer mx-auto`}
            />
          </form>
        </div>
        <div id="results" className="mt-5" style={{ color: "white", display: 'flex', flexDirection: 'row' }}>
  {/* First column */}
  <div style={{ flex: 1}}>
    <h2 style={{fontSize:'18px'}}>NER Predictions:[Entity]:[Label],[Score] </h2>
    {results.slice(0, 20).map((item, index) => (
      <p key={index}>
        {item.word}: {entityLabels[item.entity]}, {item.score}
      </p>
    ))}
  </div>
  
  {/* Second column */}
  <div style={{ flex: 1}}>
    <h2 style={{fontSize:'18px'}}>NER Predictions:[Entity]:[Label],[Score] </h2>
    {results.slice(20, 40).map((item, index) => (
      <p key={index}>
        {item.word}: {entityLabels[item.entity]}, {item.score}
      </p>
    ))}
  </div>
  
  {/* Third column */}
  <div style={{ flex: 1}}>
    <h2 style={{fontSize:'18px'}}>NER Predictions:[Entity]:[Label],[Score] </h2>
    {results.slice(40, 60).map((item, index) => (
      <p key={index}>
        {item.word}: {entityLabels[item.entity]}, {item.score}
      </p>
    ))}
  </div>
</div>


        
      </div>
    </section>
  );
};

export default CTA;
