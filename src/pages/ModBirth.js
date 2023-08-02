import React,{useEffect,useRef,useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
// import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { ProgressSpinner } from 'primereact/progressspinner';
// import { getModRegz } from '../redux/apiCalls';
// import { getGender,getOrder,getPlace } from '../redux/apiCalls';
// import Filter from '../components/Filter';
// import { changePage } from '../redux/modBirthSlice';
import authFetch from '../axios';
import { ProgressSpinner } from 'primereact/progressspinner';
const ModBirth = () => {
// const dispatch = useDispatch();
const [basicFirst, setBasicFirst] = useState(0);

const [regs,setReg] = useState([])
const [states,setStates] = useState([])
const [loading,setLoading] = useState(false);
const [search,setSearch] = useState("");
// eslint-disable-next-line
const [resPage,setResPage] = useState(20);
const [page,setPage] = useState(1);
const [stateID,setStateID] = useState(14);
const [numPages,setNumPages] = useState(0);
// eslint-disable-next-line
const [basicRows, setBasicRows] = useState(20);


const onBasicPageChange = (event) => {
  // console.log(event)
  setBasicFirst(event.first);
  // setBasicRows(event.rows);
 setPage(event.page + 1)
}
const navigate = useNavigate();
    const goBack = () => navigate(-1);
//   const loc = useLocation();
//   const sp = new URLSearchParams(loc.search); //search?category=cat
//   const stateId = parseInt(sp.get("state"))||null;
//   const lgaId = parseInt(sp.get("lga"))||null;
//   const centerId = parseInt(sp.get("center"))||null;
//   const {
//     isLoading,
//     search,
//     result_per_page,
//     page,
//     registerations,
//     numPages
//   } = useSelector((state) => state.modBirth);
  useEffect(() => {
const getReg = async(search,
    resPage,
    page,
    stateID,)=>{
    setLoading(true)
    try {
        const res = await authFetch.get(`modification/birth-registration/list-by-state?search=${search}&result_per_page=${resPage}&page=${page}&StateID=${stateID}`);
        const res2 = await authFetch.get(`option/states`)
        setLoading(false)
       setReg(res.data.result);
       setStates(res2.data);
       setNumPages(res.data.pagination.total)
        console.log(res.data)
      } catch (error) {
        setLoading(false)
      console.log(error)
      }

}

           getReg( search,
            resPage,
            page,
            stateID,
           )

}, [ search,
    resPage,
    page,
    stateID,
]); // eslint-disable-line react-hooks/exhaustive-deps

console.log(numPages)

const statusBodyTemplate2 = (rowData) => {
    return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single/${rowData.Birth_Reg_ID}`} >
VIEW  
    </Link>
}
const genderTemplate = (rowData) => {
    return <p  className={`font-bold`}>
{rowData.GenderData.gender}
    </p>
}
// const birthTypeTemplate = (rowData) => {
//     return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single/${rowData.id}`} >
// VIEW 
//     </Link>
// }
// const birthOrder = (rowData) => {
//     return <p  className={`font-bold`}>
//     {getOrder(rowData.birth_order)}
//         </p>
// }

// const birthPlace = (rowData) => {
//   return <p  className={`font-bold`}>
//   {getPlace(rowData.birth_place)}
//       </p>
// } 

// const center=(rowData)=>{
// return <p>{rowData.Reg_CenterData.Reg_Center_Name}</p>
// }





// const state=(rowData)=>{
//   return <p>{rowData.LGA_of_BirthData.states.State_Name}</p>
//   }






const renderHeader1 = () => {
    return ( 
        <div className=" hidden md:flex justify-content-between">
        {/* <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} /> */}
       <div className='grid gap-4'>
        <div className='col-12 md:col-5'>

        <InputText 
        value={search} 
        // onChange={onGlobalFilterChange1}
        onChange={(e) => setSearch(e.target.value)}
         placeholder="Keyword Search" />
   

</div>

<div className='col-12 md:col-5 mx-3'>


<Dropdown value={stateID} options={states && states} onChange={(e) => setStateID(e.value)} placeholder="Select State" optionValue='State_ID' optionLabel='State_Name'/>

</div>
</div>
</div>
    
    // <Filter/> 

    )
}
const header1 = renderHeader1();
const dt = useRef(null);
   

const cols = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
];

const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

const exportPdf = () => {
  import('jspdf').then(jsPDF => {
      import('jspdf-autotable').then(() => {
          const doc = new jsPDF.default(0, 0);
          doc.autoTable(exportColumns, regs);
          doc.save('products.pdf');
      })
  })
}


const exportExcel = () => {
  import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(regs);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      saveAsExcelFile(excelBuffer, 'products');
  });
}
const saveAsExcelFile = (buffer, fileName) => {
  import("file-saver").then((FileSaver) => {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  });
};
if(loading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <>
    
    {/* <div className="grid">
        <div className="col-12 md:col-6 lg:col-6">
            <div className="bg-black-alpha-90 shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-bold mb-3">Total Verified Requests</span>
                        <div className="text-0 font-medium text-xl">33</div>
                    </div>
                    <div className="flex align-items-center justify-content-center  border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-shopping-cart text-0 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div>

            </div> */}
    {/*  */}

    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
                <Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm" onClick={goBack}  />
        <span className="text-xl font-medium text-900">Modified Birth Registration List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={regs} 
             ref={dt}
                    loading={loading}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                    //  paginator
                    //  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    //  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}

                      
          
                            <Column field="FirstName" header="FirstName"></Column>
                            <Column field="SurName" header="SurName"></Column>
                            <Column field="Certificate_No" header="Certificate Number"></Column>
                            <Column field="email" header="Gender" body={genderTemplate}></Column>
                           
                            {/* <Column field="phone" header="Birth Order"></Column> */}
                            {/* <Column field="imei" header="Device IMEI"></Column> */}
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                    <Paginator  first ={basicFirst} rows={basicRows} totalRecords={numPages}  onPageChange={onBasicPageChange}></Paginator>
                </div>
            </div>
            
           
</div> 
    </>
  )
}

export default ModBirth;