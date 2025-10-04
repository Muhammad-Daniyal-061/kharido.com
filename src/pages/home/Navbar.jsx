import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { userCart } from '../../context/cardContext/CartContext.jsx';
function Navbar(){
   const { totalItems } = userCart();


    return(
        <>
      <div className=" bg-gray-200 w-full h-12 rounded flex justify-between items-center  ">
          <div className="  flex justify-around ">
            <div className="ml-6 capitalize font-mono cursor-pointer p-1 hover:bg-blue-950  hover:rounded hover:text-white  " >home</div>
            <div className="ml-6 capitalize font-mono cursor-pointer p-1 hover:bg-blue-950  hover:rounded hover:text-white  relative group" >
              <div className='p-1 hover:bg-blue-950 hover:rounded hover:text-white'>Products</div>
              <ul className='absolute mt-2  bg-white text-black flex  flex-col space-x-3 opacity-0 group-hover:opacity-100 transition '>
                <Link to="/poloshirts" ><li className=' px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Polo Shirts</li></Link>
                <Link to="/sneakers" ><li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Sneakers</li></Link>
                <Link to="/watches" ><li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Watches</li></Link>
                <Link to="/eventwearings"><li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Event Wearings</li></Link>
                <Link to="/officialshirts"><li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Official Shirts</li></Link>
                <Link to="/kameezshalwar"><li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Kameez Shalwar</li></Link>
               <Link to="/jeans"> <li className='px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer'>Jeans</li></Link>
                
              </ul>
            </div>
            <div className="ml-6 capitalize font-mono cursor-pointer  p-1 hover:bg-blue-950  hover:rounded hover:text-white ">Help&Support</div>
            <div className="ml-6 capitalize font-mono cursor-pointer  p-1 hover:bg-blue-950  hover:rounded hover:text-white ">about us</div>
          </div>
          <div className="flex justify-center items-center ">
            <input type="text" className=" bg-white rounded focus:outline-none text-xs p-1 w-60"  />
            <label for="search" className="ml-2 capitalize font-mono cursor-pointer  p-1 bg-blue-950 rounded text-white hover:bg-black " ><SearchIcon/></label>
            </div>
          <div className="  flex justify-around  " >
            <div className="ml-6 capitalize font-mono cursor-pointer p-1 hover:bg-blue-950  hover:rounded hover:text-white  " >
             
              <div><ShoppingCartIcon/> {totalItems} </div>
            </div>
            <div className="ml-6 capitalize font-mono cursor-pointer  p-1 hover:bg-blue-950  hover:rounded hover:text-white " >login</div>
            <div className="ml-6 capitalize font-mono cursor-pointer  p-1 hover:bg-blue-950  hover:rounded hover:text-white " >signup</div>
            {/* <div className="ml-6 capitalize font-mono cursor-pointer  p-1 hover:bg-blue-950  hover:rounded hover:text-white " >wishlist</div> */}
          </div>
      </div>
        </>
    )
}



export default Navbar;