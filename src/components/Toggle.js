import React, {useState} from 'react'

const Toggle = () => {
 const [toggle, setToggle]= useState(true);

  return (
    <div style={{margin:"1rem", backgroundColor: "pink", padding: "1rem"}}>
       {toggle && (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem
         culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores 
         quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>)}
         <button onClick={()=>{setToggle(!toggle)}}>{toggle? "Hide":"Show"}</button>
         
    </div>
  )
}

export default Toggle