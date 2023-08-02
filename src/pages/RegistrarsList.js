import React,{useEffect,useState,useRef} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
// import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
import authFetch from '../axios';
import { Toast } from 'primereact/toast';
import { Paginator } from 'primereact/paginator';
const RegList = () => {
    // const {id}=useParams();
    const toast = useRef(null);
  const [loading1, setLoading1] = useState(true);
  // eslint-disable-next-line
  const [reload, setReload] = useState(false);
  const [filters1, setFilters1] = useState(null);
  const [tot,setTot] = useState(null)
  const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const [products, setProducts] = useState([]);
  const [lga,setLga] = useState([]);
  const [state,setStates] = useState([]);
  const [userState,setUserState] = useState("");
  const [userLga,setUserLga] = useState("");
const [page,setPage] =useState(1)

const [search,setSearch] = useState("");
      
      

  const [basicFirst, setBasicFirst] = useState(0);
  // eslint-disable-next-line
const [basicRows, setBasicRows] = useState(20);
const onBasicPageChange = (event) => {
  setBasicFirst(event.first);
  setPage(event.page + 1);
}

const changeState=async(e)=>{
    setUserState(e.target.value);
    const statz = await authFetch.get(`/option/lga/${e.target.value}`);
    setLga(statz.data);

    
}
          

   

  const handleReset=async (id)=>{
    // console.log(id)
    try {
        const statz = await authFetch.get(`/users/reset-password/${id}`);
    console.log(statz.data)
    if(statz.data.success === true){
        toast.current.show({ severity: 'success', summary: 'Success', detail: `${statz.data.message},check your email` });
        
    }
    else{
    toast.current.show({ severity: 'error', summary: 'Error', detail: `${statz.data.message}.` });
    }} catch (error) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    }
    
  }

  const handleActivate=async (id,st)=>{
    let statuss=''
    if(st === 1){
statuss = 'Inactive'
    }
    else if(st === 0){
        statuss = 'Active'
            }
    try {
        const statz = await authFetch.post(`/users/change-status`,{
            
                account_id: parseInt(id),
                status: statuss
            
        });
    // console.log(statz.data)
    if(statz.data.success === true){
        toast.current.show({ severity: 'success', summary: 'Success', detail: `${statz.data.message}.` }); 
        setReload(true);
        window.location.reload()
    }
    else{
    toast.current.show({ severity: 'error', summary: 'Error', detail: `${statz.data.message}.` });
    }} catch (error) {
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    }
  }
  useEffect(() => {
    const getDatz=async ()=>{
        setLoading1(true);
const statz = await authFetch.get(`/users/?search=${search}&result_per_page=20&page=${page}&role_id=3&state_id=${userState}&lga_id=${userLga}`);
    
// /users/?search=&result_per_page=10&page=1&role_id=3
// /users/registra-users?search=&result_per_page=5&page=1&state_id=14
console.log(statz.data.result)
setProducts(statz.data.result) 
   setTot(statz.data.pagination.total)
    setLoading1(false)
    }
            getDatz()
}, [page,userLga,userState,search]); 
// eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
   
            initFilters1();

}, []); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
    const getStates = async()=>{
        const statz1 = await authFetch.get(`/option/states`);
      
        // option/permissions
        setStates(statz1.data)
    }
    // const statz = await authFetch.get(`/option/lga/${e.target.value}`);
    // console.log(statz.data.result)
    // setMyStatz(statz.data.mtn);
   
    getStates();

}, []);

const initFilters1 = () => {
    setFilters1({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      
    });
     
    setGlobalFilterValue1('');
}

const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    console.log(value);
    let _filters1 = { ...filters1 };
    _filters1['global'].value = value;
console.log(_filters1)
    setFilters1(_filters1);
    setGlobalFilterValue1(value);
}


const statusBodyTemplate4 = (rowData) => {
    return <p  className={`btn btn-primary text-primary font-bold`} >
{rowData.State.State_Name}
    </p>
}

const statusBodyTemplate5 = (rowData) => {
    return <p  className={`btn btn-primary text-primary font-bold cursor-pointer`} onClick={()=>handleReset(rowData.User_ID)} >
reset password
    </p>
}

const statusBodyTemplate6 = (rowData) => {
    return <p  className={`btn btn-primary text-primary font-bold cursor-pointer`} onClick={()=>handleActivate(rowData.User_ID,rowData.is_active)} >
{rowData.is_active === 1?'Deactivate':rowData.is_active === 0?'Activate':''}
    </p>
}

const statusBodyTemplate7 = (rowData) => {
    return <Link to={`/update-user/${rowData.User_ID}`} className={`btn btn-primary text-primary font-bold cursor-pointer`}  >
update user
    </Link>
}

const statusBodyTemplate8 = (rowData) => {
    return <Link to={`/single-registrars/${rowData.User_ID}`} className={`btn btn-primary text-primary font-bold cursor-pointer`}  >
view
    </Link>
}
const clearFilter1 = () => {
    setLga((prev)=>{
        return []
       })
       setStates((prev)=>{
        return []
       })
       setSearch((prev)=>{
        return ''
       })
       setPage(1);
       window.location.reload()
}
const renderHeader1 = () => {
    return (
        <div className=" hidden md:flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
          


<Dropdown value={userState} options={state} onChange={ changeState} placeholder="Select State" optionLabel="State_Name" optionValue="State_ID"/>

<Dropdown value={userLga} options={lga} onChange={(e) => setUserLga(e.value)} placeholder="Select lga" optionLabel="LGA_Name" optionValue="LGA_ID"/>
   
{/* <Dropdown value={Sex} options={sexOptions} onChange={(e) => dispatch(handleChange({ name:'Sex', value:e.value }))} placeholder="Select lga"/> */}


            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Keyword Search" />
            </span>
        </div>
    )
}
const header1 = renderHeader1();
const dt = useRef(null);

// console.log(id);

  return (
    <>
    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Registrars List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
           {/* <Link to={`/registrars-new`}>
           <Button type="button" icon="pi pi-user" label='Create new' className="p-button-success mr-2"  />
           </Link>  */}
            {/* <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" /> */}
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={products} 
             ref={dt}
                  filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                    //  paginator
                    //  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    //  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                     
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            {/* <Column field="name" header="Certificate Number"></Column> */}
                            <Column field="UserName" header="Name"></Column>    
                            <Column field="Email" header="Email"></Column>
                            <Column field="Phone_No" header="Phone number"></Column>
                           <Column field="User_ID" header="Id"></Column>
                        <Column field="" header="state" body={statusBodyTemplate4} />
                        <Column field="" header="Actions" body={statusBodyTemplate5} />
                        <Column field="" header="" body={statusBodyTemplate6} />
                        <Column field="" header="" body={statusBodyTemplate7} />
                        <Column field="" header="" body={statusBodyTemplate8} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                    <Paginator  first ={basicFirst} rows={basicRows} totalRecords={tot}  onPageChange={onBasicPageChange}></Paginator>
                </div>
            </div>
                     
            <Toast ref={toast} /> 
           
</div> 
    </>
  )
}

export default RegList;

