import './Header.css';

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
                    <li><button>SignIn</button></li>
                    <li><button>SignUp</button></li>
                </ul>

            </div>
        </div>
    );
}
export default Header;