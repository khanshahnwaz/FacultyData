import './Header.css';

const Header =()=>{
    return (
        <>
        <div className='Header__main'>
            <div className='Header__logo'>
             <img src='../../College LOGO.png'></img>
            </div>
            <div className='Header__value'>
                 <ul>
                     <li>
                         <a href='/'>HOME</a>
                     </li>
                     <li>
                        <a href=''>CONTACT US</a>
                     </li>
                 </ul>
            </div>
        </div>
        </>
    );
};

export default Header;