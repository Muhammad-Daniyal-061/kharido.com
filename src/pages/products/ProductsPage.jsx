import ProductDisplayBlock from "../../components/ProductDisplayBlock.jsx";


function ProductsPage() {

    
    return (
        <>
            <div className="h-full w-full  flex justify-center items-center  bg-white " >
               <div className="flex justify-center items-center w-[95%] shadow-2xl mt-5 bg-[#f4f3ee] rounded-3xl ">
                 <div className=" flex justify-center items-center flex-col mt-10 w-[90%]  ">
                <h1 className="text-4xl font-semibold pt-2 pb-2 capitalize ">shop by category</h1>           
                    <ProductDisplayBlock/>
            </div>
               </div>
            </div>
        </>
    )
}



export default ProductsPage;