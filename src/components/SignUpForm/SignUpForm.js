import React,{useState} from 'react'
import Classes from './SignUpForm.module.css'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux';
import * as Yup from 'yup'
import axios from 'axios'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
const SignUpForm = () =>{
    const[show,setShow] = useState(false)
    const[msg,setMsg] = useState('')
    const showMode= useSelector((state) => state.lightMode);
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
    
    const passwordShowHandler = () =>{
        setShow(!show)

    }
    const formik = useFormik({ 
		initialValues:
		{   name:"",
			email: "",
			password: ""
		},
		validationSchema: Yup.object({
                name:Yup.string()
				.required("Enter your name"),
				email: Yup.string()
				.required("Enter your email")
                .matches(emailRegex,"Invalid Email"),
				password: Yup.string()
				.min(8, "Password should be at least 8 characters ")
				.required("Enter your password"),
				
		}),
		onSubmit: (values,onSubmitprops) => {
        const inputs = JSON.stringify({name:values.name,email:values.email,password:values.password})
            axios.post('https://travelguru-258a8-default-rtdb.firebaseio.com/register.json',inputs)
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    setMsg('Successfully Registered')
                }
                else{
                    setMsg('Technical Error')
                }
                onSubmitprops.resetForm()
                 
            })
            .catch ( error =>{
               console.log(error)
            })

    
           
			
		}
	});

    return(
        <React.Fragment>
            <div className={Classes.MainHead}>
                <h3 className={showMode?`${Classes.signCapD}`:`${Classes.signCapL}`}>Sign in to Travelguru</h3>
                <p className={showMode?`${Classes.NoAccntD}`:`${Classes.NoAccntL}`}>Don't have an account?<span className={Classes.SignUp}> &nbsp;&nbsp;Sign up</span></p>
            </div>
            <div className={Classes.BorderL}></div>
            <span className={showMode?`${Classes.msgD}`:`${Classes.msgL}`}>{msg}</span>
            <form className={Classes.FormPad} autoComplete='off'>
                <div style={{marginBottom:'25px'}}>
                    <input type='text'
                            name='name' 
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={showMode?`${'form-control'} ${Classes.InputD}`:`${'form-control'} ${Classes.InputL}`}
                           
                            placeholder='Full name' />
                            { formik.touched.name && formik.errors.name && (<div className={Classes.ErrorMsg}>{formik.errors.name}</div>)}
                </div>
                <div style={{marginBottom:'25px'}}>
                <input 
                        type='text' 
                        name='email' 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={showMode?`${'form-control'} ${Classes.InputD}`:`${'form-control'} ${Classes.InputL}`}
                        placeholder='Email' />
                        { formik.touched.email && formik.errors.email && (<div className={Classes.ErrorMsg}>{formik.errors.email}</div>)}

                </div>
                <div style={{marginBottom:'25px'}}>
                     <div className='d-flex'>
                    <input 
                        type={show?'text':'password'}
                        name='password' 
                        value={formik.values.password}
                        onChange={formik.handleChange} 
                        className={showMode?`${'form-control'} ${Classes.InputD}`:`${'form-control'} ${Classes.InputL}`}
                        placeholder='Password' />
                       
                {show?<AiOutlineEye size={30} className={Classes.eye} onClick={passwordShowHandler} color={showMode?'#FCFBFF':'#08070D'}/>:<AiOutlineEyeInvisible size={30} className={Classes.eye} onClick={passwordShowHandler} color={showMode?'#FCFBFF':'#08070D'}/>}</div>
                { formik.touched.password && formik.errors.password && (<div className={Classes.ErrorMsg}>{formik.errors.password}</div>)}
                </div>
                <div className={Classes.Submit} onClick={formik.handleSubmit}>Submit</div>
           
            </form>
            <div className={Classes.BorderL}></div>
        </React.Fragment>

    )
}
export default SignUpForm