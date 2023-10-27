import { Link, useNavigate, useParams } from "react-router-dom";
import "./UpdateCoffee.css";
import { useEffect, useState } from "react";

export default function UpdateCoffee() {

    const id = useParams();
    console.log(id);

    const [coffeeData, setCoffeeData] = useState();
    console.log(coffeeData);

    useEffect(()=>{
        fetch(`https://coffee-hub-server.vercel.app/coffee/${id.id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data){
                setCoffeeData(data);
            }
        })
    },[id])
  const navigate = useNavigate();
  function handleUpdate(e){
    
    e.preventDefault();
    const target = e.target;
    const coffeeId = target.coffeeId.value;
    const coffeeName = target.coffeeName.value;
    const coffeeChef = target.coffeeChef.value;

    const coffeeSupplier = target.coffeeSupplier.value;
    const coffeeTaste = target.coffeeTaste.value;

    const coffeeCategory = target.coffeeCategory.value;
    const coffeePrice = target.coffeePrice.value;

    const coffeePhotoUrl = target.coffeePhotoUrl.value;

    const sendData = {coffeeId,coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl};
    console.log(coffeeId,coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl);

    fetch("https://coffee-hub-server.vercel.app/coffee",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(sendData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.modifiedCount>0){
        target.reset();
        navigate("/");
      }
    });



  }

  if(!coffeeData){
    return "Loading!!!";
  }

  return (
    <div className="AddCoffeeContainer">
        <div className="AddCoffeeCard">
            <div>
             <Link to="/"><button className="backToHomeText">Back to home</button></Link>
            </div>
            <br/>
            <div style={{backgroundColor:"#F4F3F0", padding:"50px 0px"}}>
            <p className="AddCoffeeCardHeading">Update Coffee</p>
              <p className="AddCoffeeCardTag">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
              <br/>
              <form onSubmit={handleUpdate}>
                <input type="hidden" name="coffeeId" defaultValue={coffeeData._id}/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Name</span>
                      </label>
                      <input type="text" name="coffeeName" placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeeName} required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Chef</span>
                      </label>
                      <input type="text" name="coffeeChef" placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeeChef} required/>
                    </div>
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Supplier</span>
                      </label>
                      <input type="text" name="coffeeSupplier" placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeeSupplier} required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Taste</span>
                      </label>
                      <input type="text" name="coffeeTaste" placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeeTaste} required/>
                    </div>
                </div><br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Category</span>
                      </label>
                      <input type="text" name="coffeeCategory" placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeeCategory} required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Price</span>
                      </label>
                      <input type="text" name="coffeePrice" placeholder="Enter coffee price" className="input input-bordered w-full max-w-xs" defaultValue={coffeeData.coffeePrice} required/>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="max-w-full" style={{width:"700px"}}>
                      <label className="label">
                        <span className="label-text labelText">Photo</span>
                      </label>
                      <input type="text" name="coffeePhotoUrl" placeholder="Enter photo URL" className="input input-bordered w-full max-w-full" defaultValue={coffeeData.coffeePhotoUrl} required/>
                    </div>
                    
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={{width:"700px"}}>
                      <button type="submit" className="AddCoffeeButton"><span className="AddCoffeeText">Update Coffee</span></button>
                    </div>
                </div>
              </form>
            </div>
              

        </div>  

    </div>
   
  )
}
