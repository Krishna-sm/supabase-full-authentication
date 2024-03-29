import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { supabase } from './config'

const Login = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({
        email:'',
        password:''
    })

    const onChangeHandler = (e)=>setForm({...form,[e.target.name]:e.target.value})


    const onSubmitHandler = async(e)=>{
        e.preventDefault()
        try {
            if(!form.email || !form.password){
                toast.error("please fill all fields");
                return 
            }



            const {error} = await supabase.auth.signInWithPassword({
              email:form.email,
              password:form.password
            })


            if(error){
              throw error
            }

            setForm({
                email:'',
        password:''
            })
            navigate("/");
                toast.success("form submit")
        } catch (error) {
            toast.error(error.message);
        }
    }

  return (
    <>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">

    <form onSubmit={onSubmitHandler} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
    
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input onChange={onChangeHandler} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
        <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input onChange={onChangeHandler} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
<div className='flex gap-x-5'>
  <p className="text-xs text-gray-500 mt-3">Don't Have an Account ? <Link to={'/register'}>Sign Up</Link></p>
  <p className="text-xs text-gray-500 mt-3">Forget <Link to={'/forget'}>Password</Link></p>
    
</div>
      </form>
  </div>
</section>
 
    </>
  )
}

export default Login