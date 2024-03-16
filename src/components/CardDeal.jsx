import {application} from "../constants"
import styles, { layout } from "../style";
import Button from "./Button";

const ProductCard =({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== application.length - 1 ? "mb-6" : "mb-0"} product-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Model: <br className="sm:block hidden" /> Potential Applications
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our model was developed with the vision for potential expansion. SABDA NER can be used as the base application for other Natural Language Processing tools for anything from sensitivity analysis to text summarization. Some potential expansions are as follows.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`} >
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
      {application.map((application, index) => (
        <ProductCard key= {application.id} {...application} index={index}/>
      ))}
    </div>
    {/* <Button styles={`mt-10`} /> */}
  </section>
);

export default CardDeal;
