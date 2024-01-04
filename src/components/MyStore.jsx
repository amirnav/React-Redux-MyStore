import React from "react";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { connect } from "react-redux";

const Mystore=({apple,orange,buyApple,buyOrange})=>{
    return (
        <div>            
            <div>
                <h5 className="text-center mt-4" style={{color:"greenyellow"}}>Apples:{apple}</h5>
                <h5 className="text-center mt-4" style={{color:"orange"}}>Oranges:{orange}</h5>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-success mx-3" style={{background:"greenyellow",color:"darkgreen"}} onClick={buyApple}>Buy Apple</button>
                <button className="btn btn-warning mx-3" onClick={buyOrange}>Buy Orange</button>
            </div>           
        </div>
    )
}
const stateToProps= state=>{
    return{
        apple:state.apple,
        orange:state.orange
    }
}
const dispatchToProps = dispatch=>{
    return{
        buyApple:()=>dispatch(buyApple()),
        buyOrange:()=>dispatch(buyOrange())
    }
}
export default connect(stateToProps,dispatchToProps)(Mystore);