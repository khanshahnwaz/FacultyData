import './SignUp.css';

const SignUp= () =>{
    return (
        <div className='SignUp__main'>
            <div className='SignUp__details'>
                <h2>Sign Up</h2>
                <div className='SignUp__form'>
                <form>
                    <label>Name</label>
                    <input type='text' placeholder='First Name'></input>
                    <input type='text' placeholder='Last Name'></input>
                    <label>Email</label>
                    <input type='email' placeholder='Email'></input>
                    <label>Designation </label>
                    <select name='Designation'>
                        <option value='Designation'>Designation</option>
                        <option value='Professor'>Professor</option>
                        <option value='As.Professor'>As.Professor</option>
                        <option value='Professor'>Professor</option>
                    </select>
                    <label>Mobile Number</label>
                    <input type='number' placeholder='Mobile Number'></input>
                    <label>Password</label>
                    <input type='password' placeholder='Password'></input>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm Password'></input>
                    <br/>
                    <button type='submit' className='SignUp__button'>SignUp</button><br/>
                    <div className='SignUp__signIn'>
                    <span>Already have an account?</span><button className='SignIn__button'>Sign in</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp;