import React,{useRef,useState} from 'react'
import '../SignIn/SignIn.css'
import Alert from '../signUp/Alert'
import { Formik,Form } from 'formik'
import TextField from './TextField'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
export default function SignIn() {
  const [show,setshow]=useState(false);

  const validation=yup.object({
    password:yup.string().min(8,'must be 8 digit only').max(12,'must not be exceed 12 digit').required('password is required')
  ,
    email:yup.string().email("email is invalid").required('email is required')
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
           email:"",
           password:'',
         }}  validationSchema={validation}> 
            {formik=>(
              <>
               {show && <Alert type="success" message="log in successfully sir."/>}
               <div className='row py-5 text-white justify-content-center'>
               
                 <div className='col col-6 py-5 border border-primary bg-dark' id='signIn'>

                   <h1 className='text-center'> Please Sign In </h1>
                 <Form className=' pl-5 py-3'>
                <TextField name="email" label="Email:" type="email"/>
                <TextField name="password" label="Password:" type="password"/>
                <button className='btn btn-primary m-2'>sign in</button>
                <button className='btn btn-primary m-2'><Link to='/Signup' className='text-white'>Sign Up</Link></button>
              </Form>
                 </div>
               </div>
              </>
            )}
         </Formik>



  )
}
