import './SignUp.css';
import Button from './Button.js';
const Signup= () =>{
    return (
        <>
        <div className='signup_container'>
            <div className='signup'>
        <div className='signup_main'>
            <div className='signup_header'>
                <h2>Create an Account </h2>
                <small>Sign Up with you email address.</small>
            </div>
            <div className='signup_details'>
                <form>
                <input type='text' placeholder='First Name'  className='designation'></input><br></br>
                <input type='text' placeholder='Last Name' className='designation'></input><br></br>
                <select name='designation' className='designation' id='desc'>
                <option name='designation' value='Professor'>Professor</option>
                <option name='designation' value='Associate Professor'>Associate Professor</option>  
                <option name='designation' value='Assistant Professor'>Assistant Professor</option>
                </select> 
                <input type='email' placeholder='Email' className='designation'></input><br></br>
                <input type='password' placeholder='Password' className='designation'></input><br></br>
                <input type='password' placeholder='Confirm Password' className='designation'></input> <br></br>
                <Button title='Sign Up'></Button>
                </form>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Signup;