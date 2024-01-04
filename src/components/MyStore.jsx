import React from "react";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { useDispatch, useSelector } from "react-redux";
import { buySandwich } from "../redux/food/foodAction";

// const Mystore=({apple,orange,buyApple,buyOrange})=>{
    const Mystore=()=>{
        const {apple,orange}=useSelector((state)=>state.fruit)
        const {sandwich}=useSelector((state)=>state.food)
        const dispatch=useDispatch()
    return (
        <div>            
            <div>
                <h5 className="text-center mt-4" style={{color:"greenyellow"}}>Apples:{apple}</h5>
                <h5 className="text-center mt-4" style={{color:"orange"}}>Oranges:{orange}</h5>
                <h5 className="text-center mt-4" style={{color:"red"}}>Sandwich:{sandwich}</h5>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-success mx-3" style={{background:"greenyellow",color:"darkgreen"}} onClick={()=>dispatch(buyApple())}>Buy Apple</button>
                <button className="btn btn-warning mx-3" onClick={()=>dispatch(buyOrange())}>Buy Orange</button>
                <button className="btn btn-warning mx-3" onClick={()=>dispatch(buySandwich())}>Buy Sandwich</button>
            </div>           
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