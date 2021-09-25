
import { React } from 'react';
import ShowData from '../ShowData';
import { useEffect, useState } from 'react';
const Home = ()=>{
    const [sdata, setSdata] = useState([]);
  console.log(sdata)
  useEffect(() => {
      fetch('http://localhost:4000/user/')
          .then(res => res.json())
          .then(data => setSdata(data))
            
  }, [])

    return(
        <ShowData></ShowData>
    )
}

export default Home