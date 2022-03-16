import './SignIn.css';

const SignIn= () =>{
    return (
        <div className='SignIn__main'>
        <div className='SignIn__details'>
            <h2>Sign In</h2>
            <div className='SignIn__form'>
            <form>
                
            <label>Email</label>
            <input type='email' placeholder='Email'></input>
            <label>Password</label>
            <input type='password' placeholder='Password'></input>
                
                <br/>
                <button type='submit' className='SignIn__button'>SignIn</button><br/>
                <div className='SignIn__signUp'>
                <span>Already have an account?</span><button className='SignUp__button'>Sign Un</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default SignIn;
