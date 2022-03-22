import './SignIn.css';
import Button from './Button.js';
const SignIn= () =>{
    return (
        <>
        <div className='SignIn_container'>
            <div className='SignIn'>
        <div className='SignIn_main'>
            <div className='SignIn_header'>
                <h2>Sign In </h2>
                <small>Stay updated on your professional world .</small>
            </div>
            <div className='SignIn_details'>
                <form>
                
                <input type='email' placeholder='Email' className='designation'></input><br></br>
                <input type='password' placeholder='Password' className='designation'></input><br></br>
                <a href='' className='designation a'><b>Forgot your password ?</b></a>             
                <Button title='Sign In'></Button>
                
                </form>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default SignIn;