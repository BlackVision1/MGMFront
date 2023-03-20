import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail ] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

  return(
    <div className="auth-container">
      <h2>Password  Reset</h2>
        <div className="auth-form-container">
            
      <form  className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"><i class='bx bx-envelope'></i>Email<a className="gama">Enter your registered email</a></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email"/>
        
        <button type="submit">Reset</button>
        <a className="b" onClick={() => props.onFormSwitch('login')} ><i class='bx bxs-left-arrow'></i>Go Back</a>
      </form>
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
