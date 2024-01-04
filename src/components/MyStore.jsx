import React, { useState } from "react";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { useDispatch, useSelector } from "react-redux";
import { buySandwich } from "../redux/food/foodAction";

// const Mystore=({apple,orange,buyApple,buyOrange})=>{
    const Mystore=()=>{
        const [itemCount,setItemCount]=useState({
            apple:1,
            orange:1,
            sandwich:1
        })
        const {apple,orange}=useSelector((state)=>state.fruit)
        const {sandwich}=useSelector((state)=>state.food)
        const dispatch=useDispatch()
    return (
        <div>            
            
                <h5 className="text-center mt-4" style={{color:"greenyellow"}}>Apples:{apple}</h5>
                <h5 className="text-center mt-4" style={{color:"orange"}}>Oranges:{orange}</h5>
                <h5 className="text-center mt-4" style={{color:"red"}}>Sandwich:{sandwich}</h5>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="input-group mb-3 dir-ltr">
                            <input type="number" className="form-control" value={itemCount.apple} onChange={(e)=>setItemCount({...itemCount,apple:e.target.value})} />
                            <button className="input-group-text btn btn-success"style={{background:"greenyellow",color:"darkgreen"}} onClick={()=>dispatch(buyApple(itemCount.apple))}>Buy Apple {itemCount.apple}</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="input-group mb-3 dir-ltr">
                            <input type="number" className="form-control" value={itemCount.orange} onChange={(e)=>setItemCount({...itemCount,orange:e.target.value})} />
                            <button className="input-group-text btn btn-warning" onClick={()=>dispatch(buyOrange(itemCount.orange))}>Buy Orange {itemCount.orange}</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2">
                        <div className="input-group mb-3 dir-ltr">
                            <input type="number" className="form-control" value={itemCount.sandwich} onChange={(e)=>setItemCount({...itemCount,sandwich:e.target.value})} />
                            <button className="input-group-text btn btn-danger" onClick={()=>dispatch(buySandwich(itemCount.sandwich))}>Buy Sandwich {itemCount.sandwich}</button>
                        </div>
                    </div>
                </div>

            {/* <div className="text-center mt-3">
                <button className="btn btn-success mx-3" style={{background:"greenyellow",color:"darkgreen"}} onClick={()=>dispatch(buyApple())}>Buy Apple</button>
                <button className="btn btn-warning mx-3" onClick={()=>dispatch(buyOrange())}>Buy Orange</button>
                <button className="btn btn-warning mx-3" onClick={()=>dispatch(buySandwich())}>Buy Sandwich</button>
            </div>            */}
        </div>
    )
}
export default Mystore;
// const stateToProps= state=>{
//     return{
//         apple:state.apple,
//         orange:state.orange
//     }
// }
// const dispatchToProps = dispatch=>{
//     return{
//         buyApple:()=>dispatch(buyApple()),
//         buyOrange:()=>dispatch(buyOrange())
//     }
// }
// export default connect(stateToProps,dispatchToProps)(Mystore);