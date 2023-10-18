import "./CoffeeCard.css";
//import coffee1 from "../../assets/images/CoffeeCups/5.png";

export default function CoffeeCard({coffee}) {

  const {coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl} = coffee;
  console.log(coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl);
  return (
    <div className="card card-side shadow-xl CoffeeCard" style={{backgroundColor:"#F5F4F1"}}>
    <figure><img src={coffeePhotoUrl} alt="Coffee" style={{width:"185px", height:"240px"}}/></figure>
    <div className="card-body">
        <div>
            <p>Name : {coffeeName} </p>
            <p>
               Chef : {coffeeChef}
            </p>
            <p>Price : {coffeePrice} Taka</p>
        </div>
        
    </div>
    <div className="join join-vertical">
        <button className="btn join-item">View</button>
        <br/>
        <button className="btn join-item">Edit</button>
        <br/>
        <button className="btn join-item">Delete</button>
    </div>
    </div>
  )
}
