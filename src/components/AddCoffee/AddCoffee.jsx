import { Link, useNavigate } from "react-router-dom";
import "./AddCoffee.css";

export default function AddCoffee() {
  const navigate = useNavigate();
  function handleSubmit(e){
    
    e.preventDefault();
    const target = e.target;
    const coffeeName = target.coffeeName.value;
    const coffeeChef = target.coffeeChef.value;

    const coffeeSupplier = target.coffeeSupplier.value;
    const coffeeTaste = target.coffeeTaste.value;

    const coffeeCategory = target.coffeeCategory.value;
    const coffeePrice = target.coffeePrice.value;

    const coffeePhotoUrl = target.coffeePhotoUrl.value;

    const sendData = {coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl};
    console.log(coffeeName,coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory,coffeePrice,coffeePhotoUrl);

    fetch("http://localhost:5000/coffee",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(sendData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.insertedId){
        target.reset();
        navigate("/");
      }
    });



  }

  return (
    <div className="AddCoffeeContainer">
        <div className="AddCoffeeCard">
            <div>
             <Link to="/"><button className="backToHomeText">Back to home</button></Link>
            </div>
            <br/>
            <div style={{backgroundColor:"#F4F3F0", padding:"50px 0px"}}>
            <p className="AddCoffeeCardHeading">Add New Coffee</p>
              <p className="AddCoffeeCardTag">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
              <br/>
              <form onSubmit={handleSubmit}>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Name</span>
                      </label>
                      <input type="text" name="coffeeName" placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Chef</span>
                      </label>
                      <input type="text" name="coffeeChef" placeholder="Enter coffee chef" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Supplier</span>
                      </label>
                      <input type="text" name="coffeeSupplier" placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Taste</span>
                      </label>
                      <input type="text" name="coffeeTaste" placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                </div><br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Category</span>
                      </label>
                      <input type="text" name="coffeeCategory" placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text labelText">Price</span>
                      </label>
                      <input type="text" name="coffeePrice" placeholder="Enter coffee price" className="input input-bordered w-full max-w-xs" required/>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div className="max-w-full" style={{width:"700px"}}>
                      <label className="label">
                        <span className="label-text labelText">Photo</span>
                      </label>
                      <input type="text" name="coffeePhotoUrl" placeholder="Enter photo URL" className="input input-bordered w-full max-w-full" required/>
                    </div>
                    
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={{width:"700px"}}>
                      <button type="submit" className="AddCoffeeButton"><span className="AddCoffeeText">Add Coffee</span></button>
                    </div>
                </div>
              </form>
            </div>
              

        </div>  

    </div>
   
  )
}
