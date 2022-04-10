import React, {  useRef ,useState} from 'react'
import './Create.css'
import { Formik, Form } from 'formik'
import Alert from '../Home/signUp/Alert'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ServeData from './ServeData'
import * as yup from 'yup'
export default function Create() {
  const [show,setshow]=useState(false);
  const mobile = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validation5 = yup.object({
    phone: yup.string().matches(mobile, 'Phone number is not valid').min(10, 'must be more than 10').required('phone is required'),

    email: yup.string().email("email is invalid").required('email is required'),
    name: yup.string().required(' Name is required'),
    address: yup.string().required(' Address is required'),
    username: yup.string().required('User name is required'),
    website: yup.string().required('Website is required'),

  })
  const ref = useRef(null);
  const alertData=()=>{
    setshow(true);
    console.log(show)
    setTimeout(() => {
      setshow(false)
    }, 2000);
console.log(show)
  }

const postdata=(values)=>{
const article=values;
axios.post('https://jsonplaceholder.typicode.com/users',article).then((response)=>{
  console.log(response)
}).catch((err)=>{
console.log(err);
})
}


  return (
    <Formik
      innerRef={ref}
      onSubmit={(values, actions,) => { postdata(values) ;alertData();console.log(actions) }}
      enableReinitialize={true}


      initialValues={{
        name: "",
        username: "",
        email: "",
        address: '',
        phone: "",
        website: ""

      }} validationSchema={validation5}>
      {formik => (
        <>
        {show && <Alert type="success" message="Thanks for the submittion. your Data is sent successfully"/>}
          <div className='row py-5 text-white justify-content-center'>
            <div className='col col-6 py-5 border border-primary bg-dark' id='signIn'>
              <h1 className='text-center'> Please Post The Data</h1>
              <Form className=' pl-5 py-3'  >
                <ServeData name="name" label="Name:" type="text" />
                <ServeData name="username" label="UserName:" type="text" />
                <ServeData name="email" label="Email:" type="email" />
                <ServeData name="address" label="Address:" type="text" />
                <ServeData name="phone" label="Phone:" type="number" />
                <ServeData name="website" label="Website:" type="text" />
                <button type='submit' className='btn btn-primary m-2' >Post Data</button>
                <button className='btn btn-primary m-2'><Link to='/' className='text-white'>Go Back to Sign In</Link></button>
              </Form>
            </div>
          </div>
        </>
      )}
    </Formik>



  )
}
