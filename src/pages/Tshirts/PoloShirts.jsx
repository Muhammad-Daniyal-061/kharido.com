import Card from "../../components/Card";
import polo from "../../assets/pictures/polo.jpg"
import poloBlue from "../../assets/pictures/poloBlue.jpg"

function PoloShirts (){
    return(
        <>
        <div className=" h-[100vh] flex justify-center items-center ">
            <Card image={polo} title="polo jacket" price="$22.00"  />
            <Card image={poloBlue} title="polo blue" price="$25.00"  />
        </div>
        </>
    )
}


export default PoloShirts;