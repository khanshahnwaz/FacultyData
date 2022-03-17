import './ForgetPassword.css';

const ForgetPassword = () =>{
    return (
        <div className='ForgetPassword'>
            <div className='ForgetPassword__desc'>
            <h3>Forgot your password ?</h3>
            <small>Please enter the email you use to login. </small>
            </div>
        <input type='email' placeholder='Email'></input>
        <div className='ForgetPassword__button'>
        <button type='submit' className='ForgetPassword__submit'><b>Request Passsword reset</b></button><br/>
        <button type='submit' id='SignIn'><b>Back to sign in</b></button>
        </div>
        </div>
    );
}

export default ForgetPassword;