import React from 'react'
import {ErrorMessage, useField } from 'formik'
export default function TextField({label,...props}) {
    const [field,meta]=useField(props);
    return (
            <div className='col col-12  form-group'>
                <label htmlFor={field.name}>{label}</label>
                <input  {...field}{...props} className={`form-control w-75  my-2 ${meta.touched && meta.error && 'is-invalid'}`} />
                <ErrorMessage name={field.name} component='div' className=' text-danger' />

        </div>
    )
}
