import React,{useState,useEffect,useRef} from 'react'
import './admin.css';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/72.png'
import authFetch from '../axios';
import { Button } from 'primereact/button';
// import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Tooltip } from 'primereact/tooltip';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
const Admins = () => {
  const [lists,setLists]=useState([]);
  const [loading,setLoading]=useState(false);
  const toast = useRef(null);
  const [reload, setReload] = useState(false);
//    const [filters1, setFilters1] = useState({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS }
// })
//   const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const [search,setSearch] = useState("");
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
//   const initFilters1 = () => {
//     setFilters1({
//         'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      
//     });
     
//     setGlobalFilterValue1('');
// }


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
// const onGlobalFilterChange1 = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     let _filters1 = { ...filters1 };
//     _filters1['global'].value = value;
// console.log(_filters1)
//     setFilters1(_filters1);
//     setGlobalFilterValue1(value);
// }
const clearFilter1 = () => {
  // initFilters1();
  setSearch((prev)=>{
    return ''
   })
  //  setPage(1);
   window.location.reload()
}
const renderHeader1 = () => {
    return (
        <div className=" hidden md:flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Keyword Search" />
            </span>
        </div>
    )
}
const header1 = renderHeader1();
const dt = useRef(null);
  useEffect(() => {
    const viewBirth = async()=>{
      // /cert/birth/${reg?.Certificate_No}
      setLoading(true)
  try {
      // console.log(reg?.Certificate_No);
      const res = await authFetch.get(`/users/?search=${search}&result_per_page=10&page=1&role_id=5`);
      console.log(res.data);
      setLoading(false)
      setLists(res.data.result)
  } catch (error) {
      setLoading(false)
      console.log(error);
      // toast.current.show({ severity: 'error', summary: 'Error', detail: `` });
  }
    }
   viewBirth()
  }, [reload,search])
  
  if(loading){
  return       <div className="col-12">
  <div className='w-full flex flex-column '>
  <h4>Total Admin </h4>
  <div className='py-2 bg-green-500'>
  <div>loading....</div>
  </div>
  </div>
  </div>
  }
  return (
    <>
    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Admin List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
           <Link to={'/admin-new'}>
           <Button type="button" icon="pi pi-user" label='Create new' className="p-button-success mr-2"  />
           </Link>
            {/* <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" /> */}
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={lists} 
             ref={dt}
                  // filters={filters1}
                    loading={loading}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            {/* <Column field="name" header="Certificate Number"></Column> */}
                            <Column field="UserName" header="Name"></Column>
                            <Column field="Email" header="Email"></Column>
                            <Column field="Phone_No" header="Phone number"></Column>
                            {/* <Column field="Phone_No" header="Phone number"></Column> */}
                          
                            <Column field="User_ID" header="Id"></Column>
                           
                        {/* <Column field="" header="state" body={statusBodyTemplate4} /> */}
                        <Column field="" header="Actions" body={statusBodyTemplate5} />
                        <Column field="" header="" body={statusBodyTemplate6} />
                        <Column field="" header="" body={statusBodyTemplate7} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                </div>
            </div>
            <Toast ref={toast} />  
           
</div> 
    </>
   
  )
}

export default Admins;