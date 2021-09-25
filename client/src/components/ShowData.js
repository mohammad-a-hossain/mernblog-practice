
import React from 'react'
import {Table} from 'react-bootstrap';


const ShawData =()=>{

    return(
        <Table striped bordered hover>
        <thead>
            <tr>
        
            <th>user name</th>
            <th>user email</th>
            <th>User phone</th>
            
            <th>action</th>
            </tr>
        </thead>
        <tbody>
          
               
            <tr>
           
            <td>sda.name</td>
            <td>sda.email</td>
            <td>sda.phone</td>
            
            <td>
            <button className='btn btn-success'>edit</button> <button className='btn btn-danger'>delete</button>
            </td>
            </tr>
        
        
        </tbody>
        </Table>
    )
}
export default ShawData 