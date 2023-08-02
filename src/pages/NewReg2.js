
import React,{useState,useEffect,useRef} from 'react'
import {Button} from "primereact/button"
import authFetch from '../axios';
import { Toast } from 'primereact/toast';
import {  useNavigate, useSearchParams } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
const NewReg2 = () => {
const toast = useRef(null)
const [searchParams] = useSearchParams();
const [state,setStates] = useState([])
const navigate = useNavigate()
const [userState,setUserState] = useState(searchParams.get('state') || "");
const [userLga,setUserLga] = useState('');
const [nin,setNin] = useState('');
const [username,setUsername] = useState('');
const [phone,setPhone] = useState('');
const [email,setEmail] = useState('');
// const [pwd,setPwd] = useState('');
const [lga,setLga] = useState([]);
const [permissions,setPermissions] = useState([]);
const [selectedPerm,setSelectedPerm] = useState('');

const changeState=async(e)=>{
    setUserState(e.target.value);
    const statz = await authFetch.get(`/option/lga/${e.target.value}`);
    // console.log(statz.data.result)
    // setMyStatz(statz.data.mtn);
    setLga(statz.data);
}
// const [userState,setUserState] = useState('');



const create=async()=>{

const data = {
    UserName: username,
    Email: email,
    Phone_No:phone,
    // Password: pwd,
    NIN:nin,
    State_ID: parseInt(userState),
    LGA_ID: parseInt(userLga),
    Role_ID:2,
    permissions:selectedPerm.join(","),
    is_active:'Active'
}


try {
    const statz = await authFetch.post(`/users`,data);
    if(statz.data.success === true){
    toast.current.show({ severity: 'success', summary: 'Success', detail: `${statz.data.message}` });
    setEmail('')
   setUserState('')
setUserLga('');
setNin('');
setUsername('');
setPhone('');
setEmail('');
// setPwd('');
navigate('/dcr')
    }
} catch (error) {
    toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    console.log(error);
}


}



//     useEffect(() => {
//         const getStates = async()=>{
//             const statz = await authFetch.get(`/option/states`);
//             // console.log(statz.data.result)
//             // setMyStatz(statz.data.mtn);
//             setStates(statz.data)
//             // console.log(statz.data.result)
//                 // setProducts(statz.data.results)
//                 // setLoading1(false)
//         }
//         getStates();

// }, []);

useEffect(() => {
    const getStates = async()=>{
        const statz1 = await authFetch.get(`/option/states`);
        const statz2 = await authFetch.get(`/option/permissions`);
        // const statz = await authFetch.get(`/option/lga/${searchParams.get('state')}`);
        // option/permissions
        setStates(statz1.data)
        // setLga(statz.data);
        setPermissions(statz2.data);

    }
    // const statz = await authFetch.get(`/option/lga/${e.target.value}`);
    // console.log(statz.data.result)
    // setMyStatz(statz.data.mtn);
   

 
    getStates();

}, [searchParams]);
  return (
    <div classNameName='grid mt-2 p-4'>
    <div classNameName="col-12 lg:col-12">
               <div classNameName="card border-round shadow-2 p-3">
               {/* <div className="card"> */}
    <h5 className='border-green-500 border-bottom-3 text-lg font-bold mb-3'>New DCR</h5>
    <div className="formgrid grid">

    {/* "UserName": "Abel Amos",
    "Email": "abelarmos@email.com",
    "Phone_No":"08134698252",
    "Password": "abelamos123",
    "NIN":"838992019982921",
    "State_ID": 14,
    "LGA_ID": 309 */}
        <div className="field col-12 md:col-4">
            <label for="firstname6">username</label>
            <input id="firstname6" type="text" onChange={(e)=>setUsername(e.target.value)}  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="lastname6">Phone number</label>
            <input id="lastname6" type="text" onChange={(e)=>setPhone(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>

        <div className="field col-12 md:col-4">
            <label for="lastname6">NIN</label>
            <input id="lastname5" type="text" onChange={(e)=>setNin(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="firstname6">email</label>
            <input id="firstname2" type="text"  onChange={(e)=>setEmail(e.target.value)}className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        {/* <div className="field col-12 md:col-4">
            <label for="lastname6">Password</label>
            <input id="lastname2" type="password" onChange={(e)=>setPwd(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div> */}
       
        <div className="field col-12 md:col-4">
            <label for="state">State</label>
            <select id="state" value={userState} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" onChange={changeState}     style={{appearance: "auto"}}>
            <option value={''}>select state</option>
                {state.map((item,i)=>{
                    return   <option value={item.State_ID} key={i}>{item.State_Name}</option>
                })}
               
            </select>
        </div>

        <div className="field col-12 md:col-4">
            <label for="lga">LGA</label>
            <select id="lga" onChange={(e)=>setUserLga(e.target.value)} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option value=''>select lga</option>
               {
lga.map((item,i)=>{
return  <option value={item.LGA_ID} key={i}>{item.LGA_Name}</option>

})
               }  
            </select>
        </div>

        <div className="field col-12 md:col-4">
        <MultiSelect value={selectedPerm} onChange={(e) => setSelectedPerm(e.value)} options={permissions}  
 placeholder="Select user permissions"  className="w-full"  maxSelectedLabels={3} />
    </div>
        <div className="field col-12 ">
          
        <Button label="Create DCR" className="p-button-success my-2" onClick={create} />
        </div>
      <Toast ref={toast} position="top-center"  />
    </div>
</div>
               </div>
               </div>
             
  )
}

export default NewReg2







