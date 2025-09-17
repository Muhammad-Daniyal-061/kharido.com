import ProfileBlock from "../components/ ProfileBlock";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage"


function HomePage() {


    return (
        <>

        <h1 className="text-2xl text-center pb-3 flex w-full justify-between">
            <div className="">logo</div>
           <div className=""> <ProfileBlock/></div>
        </h1>
        <Navbar/>
        <ProductsPage/>

        </>)
}



export default HomePage;