import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

  return(
    <div className="auth-container">
      <h2>Register</h2>
        <div className="auth-form-container">
            
      <form  className="login-form" onSubmit={handleSubmit}>
      <label  htmlFor="name"><i class='bx bx-user-plus'></i>Username</label>
        <input value={name}  onChange={(e) => setName(e.target.value)}type="name" name="name" id="name" placeholder="Full Name" />
        <label htmlFor="email"><i class='bx bx-envelope'></i>Email<a className="gama">Enter your current email</a></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email"/>
        <label htmlFor="password"><i class='bx bx-shield'></i>Password<a className="gama">Please choose password carefully</a></label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button type="submit">Sing Up</button>
      </form>
      <a  className="a beta" onClick={() => props.onFormSwitch('login')} >Already have an account?</a>
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





