import React, { useState } from "react";
import axios from "axios";


function RegisterUser()  {
  const [registation, setRegistration] = useState({
    userName:"",
    email:"",
    password:"",
  });

  const [message, setMessage] = useState("")


  const handleChange = (e) => {

   const {name, value} = e.target
   setRegistration((prev)=>{
    return(
      {  ...prev, [name]: value,}
    )
   })
  }

  const handlesubmit = async (e) => {
      e.preventDefault();
         console.log("Form submitted:", registation);

       try {
        const reponse = axios.post(
            "http://localhost:4000/api/users/register",
            registation
        )

        setMessage(response.data.message);
        console.log("response: ",response.data);
        
       } catch (error) {
            if(error.response) {
                 setMessage(error.response.message)
                console.log("error response: ", error.response);
            } else{
                setMessage("something went wrong");
                console.log(setMessage);
                
            }
           
       }
  }




  return (
    <>
      <div className="">
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" name="userName" onChange={handleChange}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange} />
          </div>

          <button className="bg-green-400 p-1 rounded cursor-pointer" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
