import { Button } from "./CompnentsStore";
import { Link } from "react-router-dom";

function ProductDisplayBlock (){
    const array = ["jeans","kameez shalwar","polo shirts","sneakers","watches","event wearings"]
    return(
        <>
            {array.map((value,index)=>{
                return(
                     <div className="min-h-[500px] pt-12 pb-4 flex justify-between items-center flex-col">
                        <div className="text-3xl" key={index}> {value} </div>
                        <Button props="visit"/>
                    </div>
                )
        })}
       
        </>
    )
}


export default ProductDisplayBlock;