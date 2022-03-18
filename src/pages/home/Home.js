import './Home.css';

const Home =() =>{
    return (
        <>
        <div className='Home_container'>
            <div className='Home_description'>
            <h1>Welcome to ANDC Faculty Publications Page </h1>
            <h4>
                Every year many of our college faculties contribute in <b>BOOK Publications</b>,<b>JOURNAL Publications</b> and <b>CONFERENCE writing</b> which is a matter of pride for our college. But we do not have proper record of that. <br/>
                Now we have designed a database to store such records. <br/> Please help us in this by filling the form given in <b>My Profile</b> section. You can always see or modify your publications details by sigining in to this page.
                <br/> Your contribution will be highly appreciated.<br/><b>Thank You.</b>
              </h4>               
            </div>
            <div className='Home_banner'>
               <div className='Home_slider'>

               </div>
            </div>
        </div>
        <div className='Home_button'>
            <div><button className='Profile b1'>My Profile</button></div>
            <div><button className='Profile b2'>Top Profiles</button></div>
        </div>
        </>
    );
}
export default Home;