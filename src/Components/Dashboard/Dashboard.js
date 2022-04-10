import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Dashboard.css'
import { Link } from 'react-router-dom';
export default function Dashboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then(async (response) => {
        const fetchData = await response.data;
        setdata(fetchData)
      })
    } catch (error) {
      console.log(error)
      alert('please wait for a minute')
    }
  }, [])
  return (
    <>
      <h1 className='text-danger text-center'> All Feedback</h1>
      <div>
        <table className="table table-secondary  table-stripped table-borderless">
          <thead className="thead-dark">
            <tr className='lead'>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
              <th>phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.length >= 1 ? data.map((elem, id) => {
              return <tr key={id}>
                <td><Link to={`/dashboard/${id}`}>{elem.name}</Link></td>
                <td>{elem.username}</td>
                <td>{elem.email}</td>
                <td>{elem.address.city}<br /><b>street: </b>{elem.address.street}<br /><b>zipcode:- </b>{elem.address.zipcode}</td>
                <td>{elem.phone}</td>
                <td>{elem.website}</td>
              </tr>
            }) : null}
          </tbody>
        </table>

      </div></>
  )

}
