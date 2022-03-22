import './ForgetPassword.css';
import Button from './Button.js';
const ForgetPassword= () =>{
    return (
        <>
        <div className='ForgetPassword_container'>
            <div className='ForgetPassword'>
        <div className='ForgetPassword_main'>
            <div className='ForgetPassword_header'>
                <h2>Forgot your password ? </h2>
                <small>Reset password in two quick step</small>
            </div>
            <div className='ForgetPassword_details'>
                <form>
                
                <input type='email' placeholder='Email' className='designation'></input><br></br>             
                <Button title='Reset Password'></Button>
                <Button title='Back'></Button>
                
                </form>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default ForgetPassword;