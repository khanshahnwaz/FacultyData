import './Header.css';
import Button from '../accounts/Button';
const Header =() =>{
    return (
        <div className='Header__main'>
            <div className='Header__desc'>
            <img src='../../../College LOGO.png'/>
            <h2>Acharya Narendra Dev College</h2>
            </div>
            <div className='Header__nav'>
                <ul>
                    <li><a><b>Home</b></a></li>
                    <li><a><b>Contact</b></a></li>
                    <li><Button title='Sign In'></Button></li>
                    <li><Button title='Sign Up'></Button></li>
                </ul>

            </div>
        </div>
    );
}
export default Header;