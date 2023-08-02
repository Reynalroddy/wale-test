
import React,{useEffect,useState,useRef} from 'react'
import {Button} from "primereact/button"
// import { FileUpload } from 'primereact/fileupload';
import authFetch from '../axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
const NewAdmin = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    // const [state,setStates] = useState([])
    // const [userState,setUserState] = useState('');
    // const [userLga,setUserLga] = useState('');
    // const [userCenter,setUserCenter] = useState('');
    // const [userDcr,setUserDcr] = useState('');
    const [userSig,setUserSig] = useState('');
  
    const [nin,setNin] = useState('');
const [username,setUsername] = useState('');
const [phone,setPhone] = useState('');
const [email,setEmail] = useState('');
// const [pwd,setPwd] = useState('');
const [permissions,setPermissions] = useState([]);
const [selectedPerm,setSelectedPerm] = useState('');
    // const changeState=async(e)=>{
    //     setUserState(e.target.value);
    //     const statz = await authFetch.get(`/option/lga/${e.target.value}`);
    //     console.log(statz.data.result)
    //     setMyStatz(statz.data.mtn);
    //     setLga(statz.data);
    
    // }

 




        const customBase64Uploader = async (event) => {
            console.log(event.target.files[0])
            // // convert file to base64 encoded
            const file = event.target.files[0];
            const reader = new FileReader();
            // let blob = await fetch(file.objectURL).then((r) => r.blob()); 
    
            reader.readAsDataURL(file);
    
            reader.onloadend = function () {
                const base64data = reader.result;
                // console.log(base64data)
                setUserSig(base64data)
            };
        };


        const create=async()=>{

            const data = {
                UserName: username,
                Email: email,
                Phone_No:phone,
                // Password: pwd,
                NIN:nin,
                // State_ID: parseInt(userState),
                // LGA_ID: parseInt(userLga),
                Signature:userSig,
                Role_ID:5,
                permissions:selectedPerm.join(","),
                is_active:'Active'
                // Reg_Center_ID:parseInt(userCenter),
                // dcr:parseInt(userDcr)
            }

            console.log(data)
            
            
            try {
                const statz = await authFetch.post(`/users`,data);
                toast.current.show({ severity: 'success', summary: 'Success', detail: `${statz.data.message}` });
                setEmail('')
            //    setUserState('')
            setNin('');
            setUsername('');
            setPhone('');
            setEmail('');
            // setPwd(''); 
            navigate('/admins')
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
                console.log(error);
            }
            
            
            }


        useEffect(() => {
            const getStates = async()=>{
                // const statz = await authFetch.get(`/option/states`);
                const statz2 = await authFetch.get(`/option/permissions`);
                // setStates(statz.data)
                setPermissions(statz2.data);
            }

         
            getStates();
    
    }, []);
  return (
    <div className='grid mt-2 p-4'>
    <div className="col-12 lg:col-12">
               <div className="card border-round shadow-2 p-3">
               {/* <div className="card"> */}
    <h5 className='border-green-500 border-bottom-3 text-lg font-bold mb-3'>New System admin</h5>
    <div className="formgrid grid">
    <div className="field col-12 md:col-4">
            <label for="firstname6">username</label>
            <input id="firstname6" type="text" onChange={(e)=>setUsername(e.target.value)}  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="lastname8">Phone number</label>
            <input id="lastname8" type="text" onChange={(e)=>setPhone(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>

        <div className="field col-12 md:col-4">
            <label for="lastname7">NIN</label>
            <input id="lastname7" type="text" onChange={(e)=>setNin(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="firstname9">email</label>
            <input id="firstname9" type="text"  onChange={(e)=>setEmail(e.target.value)}className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        {/* <div className="field col-12 md:col-4">
            <label for="lastname6">Password</label>
            <input id="lastname6" type="password" onChange={(e)=>setPwd(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div> */}
        {/* <div className="field col-12 md:col-4">
        <FileUpload mode="basic" name="demo[]"  accept="image/*" customUpload uploadHandler={customBase64Uploader} />
      </div> */}

      <div className="field col-12 md:col-4">
      <label for="firstname6">upload signature</label>
<input type='file' onChange={customBase64Uploader} className='w-full appearance-none outline-none'/>

        </div>

     
        {/* <div className="field col-12 md:col-4">
            <label for="address">Address</label>
            <textarea id="address" type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
        </div> */}
        {/* <div className="field col-12 md:col-4">
            <label for="city">City</label>
            <input id="city" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div> */}
        {/* <div className="field col-12 md:col-4">
            <label for="state">State</label>
            <select id="state" className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" 
            onChange={changeState}  
               style={{appearance: "auto"}}>
            <option value={''}>select state</option>
                {state.map((item,i)=>{
                    return   <option value={item.State_ID} key={i}>{item.State_Name}</option>
                })}
               
            </select>
        </div> */}

        <div className="field col-12 md:col-4">
        <MultiSelect value={selectedPerm} onChange={(e) => setSelectedPerm(e.value)} options={permissions} 
 placeholder="Select user permissions"  className="w-full" />
    </div>

        <div className="field col-12 ">
          
        <Button label="Create Admin" className="p-button-success my-2" onClick={create} />
        </div>
        <Toast ref={toast} position="top-center"  />
    </div>
</div>
               </div>
               </div>
             
  )
}

export default NewAdmin







