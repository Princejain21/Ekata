import React from 'react'

export default function Result(props) {
    const data=props.datae;
    console.log(data);  
  return (
      <>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.username}</td>
    <td>{data.email}</td>
    <td>{data.phone}</td>
    <td>{data.website}</td>
    <td>
      Name: {data.company.name}<br/>
      CatchPhrase: {data.company.catchPhrase}<br/>
      bs: {data.company.bs}<br/>
    </td>
    <td>
      CITY:{data.address.city}<br/>
      GEO: <br/>
      1. Latitude: {data.address.geo.lat}<br/>
      2. Longitude: {data.address.geo.lng}<br/>
      Street: {data.address.street}<br/>
      Suite: {data.address.suite}<br/>
      ZipCode: {data.address.zipcode}
    </td>
  
      </>
  )
}
