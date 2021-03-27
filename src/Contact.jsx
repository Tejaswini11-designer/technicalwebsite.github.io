import React, { useState } from 'react'

const Contact = () =>{
    const[data,setdata]=useState({
        name:"",
        mobile:"",
        email:"",
        message:"",
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;
        setdata((preval) => {
            return{
                ...preval,
                [name] : value,
            }
        })
    };
    const formSubmit =(e) => {
        e.preventDefault();
        alert(
            `My name is ${data.name}.My mobile number is ${data.mobile} my email address is ${data.email}`
        );
    };
    
    return (<> 
    <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
    </div>
    
    <div className="container contact-div">
        <div className="row">
        <div classname="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit} >
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Enter your Name
  </label>
  <input type="text"
   class="form-control" 
   id="exampleFormControlInput1"
   name="name"
   value={data.name}
   onChange={InputEvent}
    placeholder="Enter your Name" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
      Enter Your Mobile number
  </label>
  <input type="number" 
  class="form-control" 
  id="exampleFormControlInput1"
  name="mobile"
   value={data.mobile}
   onChange={InputEvent}
   placeholder="mobile number" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address
  </label>
  <input type="email" 
  class="form-control"
   id="exampleFormControlInput1"
   name="email"
   value={data.email}
   onChange={InputEvent}
    placeholder="name@example.com" />
</div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Any Suggetion/Message</label>
  <textarea class="form-control" 
  id="exampleFormControlTextarea1"
   rows="3"
   name="message"
   value={data.message}
   onChange={InputEvent}></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
        </div>

        </div>
    </div>
    
    </>)

};

export default Contact;