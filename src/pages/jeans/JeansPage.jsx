import { useState } from "react"
import jeanData from "../../Data/jeanData.js"
import Card from "../../components/Card.jsx"
import {userCart } from "../../context/cardContext/CartContext.jsx"




function Jeans (){

    const [currentPage, setCurrentPage ] =useState(1);

    
    

    const {addToCart} = userCart()

    const itemsPerPage = 12;
    const totalPages = Math.ceil(jeanData.length / itemsPerPage)
    

    console.log(totalPages);
    
    const displayItemsPerPage = (product,size) => {
        return product.reduce((acc,_,i)=>{
            if(i % size === 0) acc.push((product.slice(i, i + size)))
                return acc
        },[])
    }

  const chunkedData = displayItemsPerPage(jeanData,itemsPerPage)
  console.log(chunkedData);
  
    

    return(
        <>
      
         <div className=" w-full bg-gray-300 flex justify-center items-center ">
            <div className=" flex bg-white h-[90%] w-[90%]" >
        <FilterBar/>
        <div className="h-[80%] w-full flex gap-3 p-1 justify-center flex-col ">
            <JeansNav/>
            <div className="w-full  h-[80%] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4" >
                {
                // jeanData.map((item,index)=>(
                //     <div key={index}>
                //         <Card title={item.name} price={item.price} url={item.image_url} addToCart= {addToCart} product={item}  />
                //     </div>))
                

                }
                <div>

                </div>
            </div>
        </div>


       </div>
         </div>
      
        </>
    )
}

function JeansNav  () {
    return(
        <>
       <div className=" h-[20%] w-full flex justify-center gap-4
        flex-col p-4 " >
        <p className="text-2xl text-blue-950 font-medium">Jeans</p>
        <div className="flex text-blue-950 gap-x-4 text-xs ">
             <div >
                <label for="sort" className="font-medium">Sort By:</label>
                <select name="sort" id="sort" 
                className=" ml-2 p-1 border focus:outline-none text-center rounded ">
                <option value="">New Arrivals</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
                <option value="" selected>All</option>
                </select>
            </div>
             <div>
                <label for="price">Price:</label>
                <select name="sort" id="sort" className=" ml-1 focus:outline-none">
                <option value=""> low to heigh</option>
                <option value=""> high to low</option>
                <option value="" selected> Mix </option>
                </select>
            </div>
            <div>
                <select name="best-selling" id="best-selling" className="focus:outline-none">
                    <option value="bestSeling" selected>Best Selling</option>
                    <option value="bigDiscount">Big Discount</option>
                </select>
            </div>        
        </div>
       </div>
        </>
    )
}

function FilterBar (){
    return(
        <>
           <div className=" h-[70%] w-[25%] min-w-[100px] rounded m-3 p-2 pt-12 text-blue-950" > 
           <div className=" w-full ">
            <h1 className="p-2 font-bold">Filter</h1>
           <div className="p-2">
            <label for="categories" className="font-medium">Style Categories</label>
            <div className="border-blue-950  w-full">
            <select name="collection" id="collection" className="w-full text-xs sm:text-base md:text-sm focus:outline-none  ">
            <option value="classicBlueJeans">Classic Blue Jeans</option>
            <option value="Distressed/Ripped Jeans">Distressed / Ripped Jeans</option>
            <option value="cargoJeans">Cargo Jeans</option>
            <option value="stackedJeans">Stacked Jeans</option>
            <option value="patchwork/printed Jeans">Patchwork / Printed Jeans</option>
            <option value="joggerJeans(denimJoggers)">Jogger Jeans (Denim Joggers)</option>
            <option value="all" selected>All</option>
           </select>
           </div>
           </div>
           <div className="flex flex-col p-2">
            <label for="size" className="font-medium">Size</label>
            <select name="size" id="size" className="w-full text-xs sm:text-base md:text-sm focus:outline-none">
                <option value="Small">Small → 28, 29, 30</option>
                <option value="Medium">Medium → 31, 32, 33, 34</option>
                <option value="Large">Large → 36, 38</option>
                <option value="extraLarge">Extra Large → 40, 42+</option>
                <option value="all" selected>All</option>
            </select>
           </div>
           </div>
           <div className=" w-full  ">
            <h1 className="font-medium">Colors</h1>
            <div className="p-2">
                <select name="colors" id="colors" className="w-full text-xs sm:text-base md:text-sm focus:outline-none">
                    <option value="ClassicBlue(Indigo)">Classic Blue (Indigo)</option>
                    <option value="lightBlue">Light Blue</option>
                    <option value="darkBlue/navy">Dark Blue / Navy</option>
                    <option value="grey">Grey</option>
                    <option value="white">White</option>
                    <option value="all" selected>All</option>
                </select>
            </div>

           </div>
           <div className=" w-full">Fit Fit</div>
           </div>

        </>
    )
}


export default Jeans;
