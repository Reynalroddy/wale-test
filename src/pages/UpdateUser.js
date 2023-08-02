
import React,{useEffect,useState,useRef} from 'react'
import {Button} from "primereact/button"
// import { FileUpload } from 'primereact/fileupload';
import authFetch from '../axios';
import { Toast } from 'primereact/toast';
import { useNavigate, useParams } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";
import { MultiSelect } from 'primereact/multiselect';
// import { ScatterController } from 'chart.js';
const UpdateUser = () => {
    // const [searchParams] = useSearchParams();
    const toast = useRef(null);
    const {id}=useParams();
    const navigate = useNavigate();
    const [state,setStates] = useState([]);
    const [userState,setUserState] = useState("");
    const [userLga,setUserLga] = useState('');
    const [role,setRole] = useState('');

    const [userCenter,setUserCenter] = useState('');
    const [user,setUser] = useState({});
    const [userDcr,setUserDcr] = useState('');
    const [userSig,setUserSig] = useState('');
    const [lga,setLga] = useState([]);
    const [center,setCenter] = useState([]);
    const [dcr,setDcr] = useState([]);
    const [nin,setNin] = useState( '');
const [username,setUsername] = useState( '');
const [phone,setPhone] = useState( '');
const [email,setEmail] = useState( '');
const [permissions,setPermissions] = useState([]);
const [selectedPerm,setSelectedPerm] = useState('');
const [loading1, setLoading1] = useState(false);
// const val=['Can_Do_Attestation']
    const changeState=async(e)=>{
        setUserState(e.target.value);
        const statz = await authFetch.get(`/option/lga/${e.target.value}`);
        setLga(statz.data);
    
    }

    const changeRole=(e)=>{
        setRole(e.target.value);
        if(e.target.value==='1'){
            setUserLga(null)
            setUserCenter(null)
            setUserLga(null)
            setUserDcr(null)
        }
        else if(e.target.value==='2'){
            setUserCenter(null)
            setUserDcr(null)
        }
        else if(e.target.value==='5'){
            setUserState(null)
            setUserLga(null)
            setUserCenter(null)
            setUserLga(null)
            setUserDcr(null)
            setUserSig(null)
        }
    
    }
                  
                       

    const changeLga=async(e)=>{
        setUserLga(e.target.value);
        const statz = await authFetch.get(`/option/regcenter/${e.target.value}`);
        const dcr = await authFetch.get(`/users/registra/dcr/${e.target.value}`);
        // console.log(statz.data.result)
        // setMyStatz(statz.data.mtn);
        // console.log(dcr)
        setCenter(statz.data);
        setDcr(dcr.data)
    }




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

                
                User_ID: parseInt(id),
                UserName: username,
                Email: email,
                Phone_No:phone,
                NIN:nin,
                State_ID: userState=== null?userState:parseInt(userState),
                LGA_ID: userLga === null?userLga:parseInt(userLga),
                Signature:userSig,
                Reg_Center_ID:userCenter=== null?userCenter:parseInt(userCenter),
                dcr: userDcr === null?userDcr:parseInt(userDcr),
                Role_ID:parseInt(role),
                permissions:selectedPerm.join(","),
                is_active:'Active'
            }

            console.log(data)
            
            
            try {
                const statz = await authFetch.patch(`/users`,data);

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
                navigate('/')
                }
             
            }
                  
            catch (error) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
                console.log(error);
            }
            
            
            }


            const roles=[
                {
                    ID:1,
                    Name:'State-director'
                }
                ,
                {
                    ID:2,
                    Name:'DCR'
                },
                {
                    ID:3,
                    Name:'Registrar'
                },
                {
                    ID:5,
                    Name:'Admin'
                },
                
               
            ]

        useEffect(() => {
            const getStates = async()=>{
              setLoading1(true);
                const statz1 = await authFetch.get(`/option/states`);
                const statz2 = await authFetch.get(`/option/permissions`);
                const statz = await authFetch.get(`/option/lga`);
                const user = await authFetch.get(`/users/single/${id}`);
                const centers = await authFetch.get(`/option/registration-centres`);
                const dcr = await authFetch.get(`/option/dcrs`);
                // option/permissions
                setStates(statz1.data)
                setLga(statz.data);
                setPermissions(statz2.data);
                setUser(user.data)
                setCenter(centers.data)
                setDcr(dcr.data)
                setLoading1(false);
            }
            // const statz = await authFetch.get(`/option/lga/${e.target.value}`);
            // console.log(statz.data.result)
            // setMyStatz(statz.data.mtn);
           

         
            getStates();

           
    
    }, [id]);

    useEffect(() => {
        if(user){
            setNin(user.nin);
            setUsername(user.UserName);
           setPhone(user.Phone_No);
           setEmail(user.Email)
        setRole(user.Role_ID);
setUserCenter(user.Reg_Center_ID)
setUserDcr(user.dcr)
setUserLga(user.LGA_ID)
setUserSig(user.Signature)
setUserState(user.State_ID)
// fetch(`https://npc-api.dsaved.com/v0/`)
// .then(data => {
// return data.json();
// })
// .then(post => {
// console.log(post.title);
// });
        }
    }, [user])
    


    if(loading1){
return (
    <div>loading......</div>
)
    }
  return (
    <div className='grid mt-2 p-4'>
    <div className="col-12 lg:col-12">
               <div className="card border-round shadow-2 p-3">
               {/* <div className="card"> */}
    <h5 className='border-green-500 border-bottom-3 text-lg font-bold mb-3'>update user</h5>
    <div className="formgrid grid">
    <div className="field col-12 md:col-4">
            <label for="firstname6">username</label>
            <input id="firstname6" value={username} type="text" onChange={(e)=>setUsername(e.target.value)}  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="lastname8">Phone number</label>
            <input id="lastname8" value={phone} type="text" onChange={(e)=>setPhone(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>

        <div className="field col-12 md:col-4">
            <label for="lastname7">NIN</label>
            <input id="lastname7" value={nin} type="text" onChange={(e)=>setNin(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="firstname9">email</label>
            <input id="firstname9" value={email} type="text"  onChange={(e)=>setEmail(e.target.value)}className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        {/* <div className="field col-12 md:col-4">
            <label for="lastname6">Password</label>
            <input id="lastname6" type="password" onChange={(e)=>setPwd(e.target.value)} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div> */}
        {/* <div className="field col-12 md:col-4">
        <FileUpload mode="basic" name="demo[]"  accept="image/*" customUpload uploadHandler={customBase64Uploader} />
      </div> */}

      <div className="field col-12 md:col-4">
      <label for="firstname6">upload signature(ignore if signature is not changed)</label>
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
           <div className="field col-12 md:col-4">
            <label for="state">Role</label>
            <select id="state" value={role} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" 
            // onChange={(e)=>setRole(e.target.value)}  
            onChange={changeRole}
               style={{appearance: "auto"}}>
            <option value={''}>select role</option>
                {roles.map((item,i)=>{
                    return   <option value={item.ID} key={i}>{item.Name}</option>
                })}
               
            </select>
        </div>
        {
    (role=== '2' || role=== '3' || role=== '1') &&
        <div className="field col-12 md:col-4">
            <label for="state">State</label>
            <select id="state" value={userState} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" 
            onChange={changeState}  
               style={{appearance: "auto"}}>
            <option value={''}>select state</option>
                {state.map((item,i)=>{
                    return   <option value={item.State_ID} key={i}>{item.State_Name}</option>
                })}
               
            </select>
        </div>
}
{
    (role=== '2' || role=== '3') &&
        <div className="field col-12 md:col-4">
            <label for="state">Lga</label>
            <select id="lga" value={userLga}   onChange={changeLga}   className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option value=''>select lga</option>
               {
lga.map((item,i)=>{
return  <option value={item.LGA_ID} key={i}>{item.LGA_Name}</option>

})
               }  
            </select>
        </div>
}
{
    ( role=== '3' ) &&
        <div className="field col-12 md:col-4">
            <label for="state">Center</label>
            <select id="cen"  value={userCenter}  onChange={(e)=>setUserCenter(e.target.value)}   className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option value=''>select center</option>
               {
center.map((item,i)=>{
return  <option value={item.Reg_Center_id} key={i}>{item.Reg_Center_Name}</option>

})
               }  
            </select>
        </div>
}
{
    ( role=== '3' ) &&
        <div className="field col-12 md:col-4">
            <label for="state">DCR</label>
            <select id="dcr" value={userDcr}   onChange={(e)=>setUserDcr(e.target.value)}   className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option value=''>select dcr</option>
               {
dcr.map((item,i)=>{
return  <option value={item.User_ID} key={i}>{item.UserName}</option>

})
               }  
            </select>
        </div>
}
        <div className="field col-12 md:col-4">
        <label for="state">users's permission</label>
        <textarea id="w3review" name="" rows="7" cols="30" disabled value={user?.permission === null?'no permission for this user':user?.permission?.permissions?user?.permission?.permissions:''}>
</textarea>
</div>
      
        <div className="field col-12 md:col-4">
        <MultiSelect 
        
        value={selectedPerm}
        // value={val&& val}
        onChange={(e) => setSelectedPerm(e.value)} options={permissions} 
 placeholder="Select user permissions"  className="w-full" />
    </div>

        <div className="field col-12 ">
          
        <Button label="Update user" className="p-button-success my-2" onClick={create} />
        </div>
        <Toast ref={toast} position="top-center"  />
    </div>
</div>
               </div>
               </div>
             
  )
}

export default UpdateUser







