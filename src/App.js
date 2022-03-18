import './App.css';
import Header from './Components/Header';
import SignUp from './pages/accounts/SignUp';
import SignIn from './pages/accounts/SignIn';
import ForgetPassword from './pages/accounts/ForgetPassword';
import Headera from './pages/home/Header';
import Home from './pages/home/Home';
const App=()=>{
  return (
    <>
<Headera/>
{/* <ForgetPassword/> */}
<Home/>
{/* <SignUp /> */}
</>
  );
}

export default App;