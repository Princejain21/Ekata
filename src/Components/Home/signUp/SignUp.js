import React,{useState,useRef} from 'react'
import '../signUp/SignUp.css'
import { Formik,Form } from 'formik'
import Alert from './Alert'
import Datafile from './Datafile'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [show,setshow]=useState(false);

  const validation5=yup.object({
    password:yup.string().min(8,'must be 8 digit only').max(12,'must not be exceed 12 digit').required('password is required')
  ,
    email:yup.string().email("email is invalid").required('email is required'),
    firstname:yup.string().required('First name is required'),
    confirm_password:yup.string().oneOf([yup.ref('password'),null],'password doesn\'t match').required('Confirmation Password is required.')

})
const ref=useRef(null)
const alertData=()=>{
  setshow(true);
  console.log(show)
  setTimeout(() => {
    setshow(false)
  }, 2000);
console.log(show)
}
  return (
         <Formik
         innerRef={ref}
         onSubmit={() => { alertData()}}
         enableReinitialize={true}
         
         initialValues={{
           firstname:"",
           lastname:"",
           email:"",
           password:'',
           confirm_password:""

         }}  validationSchema={validation5}> 
            {formik=>(
              <>
               {show && <Alert type="success" message="your account has been created successfully."/>}

               <div className='row py-5 text-white justify-content-center'>
               
                 <div className='col col-6 py-5 border border-primary bg-dark' id='signIn'>

                   <h1 className='text-center'> Please Sign Up</h1>
                 <Form className=' pl-5 py-3'>
                <Datafile name="firstname" label="FirstName:" type="text"/>
                <Datafile name="lastname" label="LastName:" type="text"/>
                <Datafile name="email" label="Email:" type="email"/>
                <Datafile name="password" label="Password:" type="password"/>
                <Datafile name="confirm_password" label="Confirm Password:" type="password"/>
                <button className='btn btn-primary m-2'>sign Up</button>
                <button className='btn btn-primary m-2'><Link to='/' className='text-white'>Go Back to Sign In</Link></button>
              </Form>
                 </div>
               </div>
              </>
            )}
         </Formik>



  )
}
