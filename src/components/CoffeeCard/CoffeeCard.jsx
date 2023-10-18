import { useNavigate } from "react-router-dom";
import "./CoffeeCard.css";
//import coffee1 from "../../assets/images/CoffeeCups/5.png";

export default function CoffeeCard({coffee}) {

  const navigate = useNavigate();

  const {_id,coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl} = coffee;
  console.log(coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl);

  function handleEdit(id){

    navigate(`/update-coffee/${id}`);
  }

  function handleDelete(id){
    fetch(`http://localhost:5000/coffee/${id}`,{
      method:"delete",
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        window.location.reload();
      }
    })
  }


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
        <button className="btn join-item" onClick={()=>handleEdit(_id)}>Edit</button>
        <br/>
        <button className="btn join-item" onClick={()=>handleDelete(_id)}>Delete</button>
    </div>
    </div>
  )
}
