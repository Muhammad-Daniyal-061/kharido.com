import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function Admin() {
const [addProduct, setAddProduct] = useState({
    productName : "",
    stock: "",
    category:"",
    images:[],
    colors:[],
    attributes:{},
    price:""

})
const [attribute, setAttribute] = useState([])
const [attributeKey,setAttributeKey] = useState("")
const [attributeValue,setAttributeValue] = useState("")




const HandleImages = (e) => {
  const files = Array.from(e.target.files)
  const urls = files.map((file)=> URL.createObjectURL(file))
  setAddProduct((pre)=>(
    {...pre.images, ...urls}
  ))
}

const HandleSubmit = () => {
  
  if (!addProduct.productName) return alert("Product name is required");
  if (!addProduct.category) return alert("Category is required");
  if (!addProduct.price || addProduct.price <= 0) return alert("Price must be > 0");
  if (addProduct.stock < 0) return alert("Stock cannot be negative");
  if (addProduct.images.length === 0) return alert("Upload at least 1 image");

  // Merge attributes into addProduct object
  const productData = { ...addProduct, attribute };

  console.log("Submitting product:", productData);
  // Send productData to your backend API here
}
  return (
    <div>
        <h1 className='text-5xl'>admin</h1>
        <div className=' mt-3' >
            <h1 className='text-2xl'>add product</h1>
            <div className='flex flex-col gap-5 capitalize'>
              {/* select category & add stock, productName price */}
              <div>
                  <label for="category" className='text-sm'>select category</label>
                <select name="categoryOptions" id="categoryOptions" className=' ml-3 text-sm' onChange={(e)=> setAddProduct((pre)=>({
                  ...pre,category: e.target.value
                }))}
                  value={addProduct.category}
                >   
                     <option value="">-- Select Category --</option>
                    <option value="jean">Jeans</option>
                    <option value="tShirt">T-Shirts</option>
                    <option value="eventWearing">Event Wearing</option>
                    <option value="kameezShalwar">Kameez Shalwar</option>
                    <option value="kameezShalwar">Offical Shirts</option>
                    <option value="sneaker">Sneaker</option>
                </select>
              </div>
              <div>
                <input type="text"
                  name='product' 
                  placeholder=' Product Name'
                  value={addProduct.productName}
                  onChange={(e)=> {
                    setAddProduct((pre)=>(
                      {...pre, productName : e.target.value}
                    ))
                  }}
                  />
                <input type="number" 
                name='price' 
                placeholder=' Price $'
                value={addProduct.price}
                onChange={(e)=> setAddProduct((pre)=>(
                  {...pre, price : Number(e.target.value)}
                ))}
                />
                  <label for="Stock">Stock</label>
                  <input type="number" 
                  name='Stock' 
                  placeholder=' Stock'
                  value={addProduct.stock}
                  onChange={(e)=> setAddProduct((pre)=>(
                    {...pre,stock:Number(e.target.value)}
                  ))}
                  />
              </div>
               {/* imgaes */}
              <div>
               
                <h1>Images </h1>
                <input type="file" multiple onChange={HandleImages}/>
                <div>
                    {addProduct.images.map((img,idx)=>(
                        <img src={img} alt={idx} width={100} height={100} />
                    ))}
                </div>
              </div>
              {/* add attribute */}
              <div>
                <h1>add attributes</h1>
                <input type="text" name='attributes-key' placeholder='attribute-key'  />
                <input type="text" name='attributes-value' placeholder='attribute-value' /> 
                <button className='bg-white p-2 hover:bg-blue-950 hover:text-white rounded m-1 cursor-pointer'><IoIosAdd /></button>
                <button className='bg-white p-2 hover:bg-blue-950 hover:text-white rounded m-1 cursor-pointer'><FaRegEdit /></button>
                    
                   
              </div>
                <div>
                   
                </div>
            </div>
            <button className='bg-white p-2 hover:bg-blue-950 hover:text-white rounded m-1 cursor-pointer' 
              onSubmit={HandleSubmit}
            >Submit</button>
        </div>
    </div>
  )
}

export default Admin