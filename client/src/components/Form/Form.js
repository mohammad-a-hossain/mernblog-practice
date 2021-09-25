
import { React } from 'react';



const Form = ()=>{
  //  const [user, setUser] = useState({})

    // const handleChange = e => {
    //     setUser({
    //         ...user,
    //         [e.target.name]:e.target.value
    //     })
        // const newUser = { ...user };
        // newUser[e.target.name] = e.target.value;
        // console.log(newUser)
        // setUser(newUser);

    // }
    // const handleSubmit=(e)=>{
    //      e.preventDefault()
    //   //const formData = new FormData()
    //   console.log(user);
    
     /*  formData.append('name', user.name);
      formData.append('email', user.email); 
      formData.append('phone', user.phone);  */
     // formData.append('dateOfBirth',user.dateOfBirth); 

    //   fetch('http://localhost:4000/user/', {
    //       method:'POST',
    //       body:JSON.stringify(user)
    //   })
    //       .then(response => response.json())
    //       .then(data => {
    //           console.log(data)
    //       })
    //       .catch(error => {
    //           console.error(error)
    //       })
    //  }

    return(
      <div className='col-lg-10 p-4 pr-5 justify-content-center' style={{backgroundColor: "#F4FDFB"}}>
      <h1 className='col-md-8'>add data page</h1> 
     <form /* onSubmit={handleSubmit}  */  className='col-md-8'>
         
         <div className="form-group">
             <label htmlFor="exampleInputName">Name</label>
             <input /* onChange={handleChange} */ type="text" className="form-control" name="name" placeholder="Name" />
         </div>
         <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input /* onChange={handleChange} */ type="email" className="form-control" name="email" placeholder="Enter email" />
         </div>
         <div className="form-group">
             <label htmlFor="exampleInputPhone">phone no</label>
             <input /* onChange={handleChange} */ type="number" className="form-control" name="phone" placeholder="Enter phone no" />
         </div>
    
     
     <div className="form-group">
     <input type="hidden" className="form-control" name="id" />
 </div>
     <br/>
         <button type="submit" className="btn btn-primary">Submit</button>

     </form>
 </div>
    )
}
export default Form


/* 
 /* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      //       <div className="form-group">
    //      <label htmlFor="exampleInputPhone">date of birth</label>
    //      <input onBlur={handleBlur} type="date" className="form-control" name="dateOfBirth" placeholder="Enter phone no" />
    //  </div> 
      
      
      
      
      */
 