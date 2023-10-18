import "./LandingPage.css";
import cup1 from "../../assets/images/icons/1.png";
import cup2 from "../../assets/images/icons/2.png";
import cup3 from "../../assets/images/icons/3.png";
import cup4 from "../../assets/images/icons/4.png";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { Link, useLoaderData } from "react-router-dom";

export default function LandingPage() {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  return (
    <div>

      {/* Hero Section */}
      <div className="herosection">
        <div className="herosectionInnerDiv">
          <p className="heroTitle">Would you like a Cup of Delicious Coffee?</p>
          <p className="heroText">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of
            <br /> every moment!!! Enjoy the beautiful moments and make them
            memorable.
          </p>
          <button className="heroButton">
            <span>Learn More</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div>
          <img
            src={cup1}
            alt="cup1"
            style={{ width: "70px", height: "70px" }}
          />
          <p className="heading">Awesome Aroma</p>
          <p className="featuresText">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={cup2} alt="cup1" />
          <p className="heading">High Quality</p>
          <p className="featuresText">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img src={cup3} alt="cup1" />
          <p className="heading">Pure Grades</p>
          <p className="featuresText">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={cup4} alt="cup1" />
          <p className="heading">Proper Roasting</p>
          <p className="featuresText">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>

      {/* Popular Products */}
      <div className="popularProduct">
        <div className="popularProductHeadDiv">
          <p className="popularProductTagLine">--- Sip & Savor ---</p>
          <p className="popularProductHeading">Our Popular Products</p>
          <Link to="/add-coffee"><button className="popularProductAddButton"><span className="addButtonText">Add Coffee</span></button></Link>
        </div>
        <br/>

        <div className="coffeeProduct grid grid-cols-2 gap-4">
          {
            coffeeData.map((coffee,index)=>{
              return(
                <CoffeeCard key={index} coffee={coffee}/>
              )
            })
          }
          {/* <CoffeeCard/>
          <CoffeeCard/>
          <CoffeeCard/>
          <CoffeeCard/>
          <CoffeeCard/>
          <CoffeeCard/> */}
        </div>


      </div>

      



    </div>
  );
}
