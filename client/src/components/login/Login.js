
import  React  from 'react';
const Login =()=>{

    return(
        <div>
            
            <div className='col-lg-10 p-4 pr-5 justify-content-center' style={{backgroundColor: "#F4FDFB"}}>
            <h1 className='col-md-8'>login page</h1> 
           <form className='col-md-8'>
               
               <div className="form-group">
                   <label htmlFor="exampleInputName">Name</label>
                   <input type="text" className="form-control" name="name" placeholder="Name" />
               </div>
               <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Email address</label>
                   <input  type="email" className="form-control" name="email" placeholder="Enter email" />
               </div>
        
           <br/>
               <button type="submit" className="btn btn-primary">Submit</button>
      
           </form>
       </div>
        </div>
    )
}
export default Login