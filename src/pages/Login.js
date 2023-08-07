
import React, { useState,useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import { Checkbox } from 'primereact/checkbox';
// import { Divider } from 'primereact/divider';
// import { Carousel } from 'primereact/carousel';
// import { Ripple } from 'primereact/ripple';
import Logo from '../assets/images/72.png'
// import Ban  from "../assets/images/bgLogin.jpg"
import { useNavigate} from 'react-router-dom';
// import { ProgressSpinner } from 'primereact/progressspinner';
import { loginUser } from '../redux/apiCalls';
import { useDispatch,useSelector } from 'react-redux';
const Login = () => {
    // const [checked2, setChecked2] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
//     const [searchParams] = useSearchParams();
const nav= useNavigate();
// const toks = searchParams.get('t'); // 10

//     useEffect(() => {
// function parseJwt (toks) {
//     var base64Url = toks.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
 
//     localStorage.setItem('userInfo-admin',jsonPayload)
//     localStorage.setItem('userInfo-admin-token',toks)
// nav('/')
// }
// parseJwt(toks);
//     }, [toks,nav])
    

const log=()=>{
    if(!email 
        || !pwd){
alert('input all fields');
return;
    }
loginUser({
    user:email,
    password:pwd,
    device:'2e726f6002b828fefc1a93faf508a3dc'
},dispatch)
setEmail('');
setPwd('')

}

useEffect(() => {
    if (userInfo) {
      setTimeout(() => {
        nav("/");
      }, 1000);
    }
    return;

  }, [userInfo, nav]);
    
  return (
      
    <div className="min-h-screen flex justify-content-center align-items-center surface-section">


<div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div className="text-center mb-5">
        <img src={Logo} height={50} alt='' className="mb-3" />
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        {/* <span className="text-600 font-medium line-height-3">Don't have an account?</span> */}
        {/* <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> */}
    </div>


    <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText id="email" type="text"   value={email} placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} className="w-full mb-3" />
   
        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" placeholder="Password" value={pwd} className="w-full mb-3" onChange={(e)=>setPwd(e.target.value)}  />
          
        {/* <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
        </div> */}

        <Button label="Sign In" icon="pi pi-user" onClick={log}  className="w-full" />
    </div>
</div>
</div>
       
  )
}

export default Login