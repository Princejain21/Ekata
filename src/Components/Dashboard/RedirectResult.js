import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Result from './Result';
import Spinner from '../Spinner/Spinner';


export default function RedirectResult() {
  const id = useParams();
  const [userdata, setuserdata] = useState({});
  const [spin,setspin]=useState(false);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then( (response) => {
        const fetchData =response.data;
        const newdata=fetchData[id.id]
        setuserdata(newdata);
        setspin(true)

      }).catch((err)=>{
        console.log(err);
      })
     
  }, [spin])
  
 

  return (
<>
    <table className="table table-secondary  table-stripped table-borderless">
      <thead className="thead-dark">
        <tr className='lead'>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>phone</th>
          <th>Website</th>
          <th>Company</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
  {spin && Object.keys(userdata).length>=1?<Result datae={userdata}/>:null} 
         
        </tr>
      </tbody>
    </table>
          {!spin ?<Spinner/>:null}
</>



  )
}
