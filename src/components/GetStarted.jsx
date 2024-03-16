import styles from "../style";
import { navLinks } from "../constants";
import { arrowUp } from "../assets";
// import { navLinks } from "../constants";


const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[25px] leading-[23.4px] padding-[20px] p-3.5">
          <a className="text-gradient" href="#product">Explore</a>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
      </div>
      
      <p className="font-poppins font-medium text-[40px] leading-[23.4px]">
        <a className="text-gradient" href="#product">⬇</a>
      </p>
    </div>
  </div>
);  //add link to text box

export default GetStarted;
