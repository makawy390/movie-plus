import React, { useState , useContext } from 'react';
import Swal from 'sweetalert2'
import './login.css';
import { useNavigate } from 'react-router-dom';
// import LoginContext from '../context/LoginContext';
import {useDispatch} from 'react-redux'
import changeLogin from '../../store/action/changeLogin';
function Login() {
    // const value = useContext(LoginContext)
    const [user , setUser] = useState(
        {email : "" , password :""}
        );
        const disPatch = useDispatch();
        
        const navigate = useNavigate();
        const Submitting = (e)=>{
           if (user.email === '' || user.email.length > 15 || user.password === ''|| user.password.length > 10) {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or Password is not Correct',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
           }
           else{
            Swal.fire(
                'Good job !',
                'You Login success',
                'success');
            disPatch(changeLogin("logout"));
                navigate('/');
           }
        }
        const handelChange = (e)=>{
            if(e.target.name === "email"){
                setUser({...user , email: e.target.value})
            }
            else if(e.target.name == "password"){
                setUser({...user , password: e.target.value})
            }
        }
    return ( 
        <div className="login">
            <div className="container">
               <div className="row">
                <div className="col-md-5 mt-5">
                <form onSubmit={(e)=> Submitting(e)} >
<div className="mb-3">
<input type="email" className={`form-controls ${user.email.length>15? "border-danger": null }`} name='email' value={user.email} onChange= {(e)=> handelChange(e)} placeholder="Enter your gmail" />
<div id="emailHelp" className="form-text text-danger">{user.email.length==0? "this field is requird" : user.email.length >15 ? "Character must be less than 15" : null }</div>
</div>
<div className="mb-3">
<input type="password" className={`form-controls ${user.password.length>10? "border-danger": null }`}  name='password' value={user.password} onChange={(e)=> handelChange(e)} placeholder="Enter your password" />
<small className='text-danger'>{user.password.length==0? "this field is requird" :user.password.length >10? "Character must be less than 10" : null }</small>
</div>
<button type="submit" className="btn btn-danger btn-sm">Login</button>
</form>
                </div>
               </div>
            </div>
</div>
     );
}

export default Login;