import React from 'react'

const Signup = () => {

    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
  
  const add = ()=>{
    Axios.post("http://localhost:4500/api/v1/addusers",{
      username:username,
      password:password
    }).then(()=>{
      alert("Data added successfully")
    })
  }
  return (
    <>
    <div className='form1'>
      <input placeholder='Enter the username here' onChange={(e)=>{setusername(e.target.value)}}></input>
      <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
      <button onClick={add}>Submits</button>
    </div>
    </>
  )
}

export default Signup