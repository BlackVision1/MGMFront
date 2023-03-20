import React, {useState} from "react";
import 'boxicons'

export const Login = (props) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
    <div className="auth-container">
      <h2>Login</h2>
        <div className="auth-form-container">
            
      <form  className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"><i class='bx bx-envelope'></i>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email"/>
        <label className="label-align" htmlFor="password"><i class='bx bx-shield'></i>Password<a className="a alfa" onClick={() => props.onFormSwitch('passwordreset')} >Forgot password?</a></label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
      <a className="a beta" onClick={() => props.onFormSwitch('register')} >Don't have an account?</a>
      </div>
      
          <div className="footer">
             <div className="terms">

                <a href="#" className="term">Terms</a>
                <a href="#" className="term">Privacy</a>
                <a href="#" className="term">Contacts</a>

              </div>
           </div>
    </div>
    )  
    
  }