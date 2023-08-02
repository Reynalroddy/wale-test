import React,{useEffect} from
 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch,useSelector } from "react-redux";
import { handleChange,clearFilters } from '../redux/birthSlice';
import { getSex } from '../redux/apiCalls';
const Filter = () => {
    // const [city, setCity] = useState('');
    const dispatch = useDispatch();
    
    const {
        search,
        Sex,        
        // BirthType,
        BirthOrder,
        BirthPlace,
        sexOptions,
        // typeOptions,
    placeOptions,
    orderOptions,
      } = useSelector((state) => state.birth);
                        

    // const citySelectItems = [
    //     {label: 'New York', value: 'NY'},
    //     {label: 'Rome', value: 'RM'},
    //     {label: 'London', value: 'LDN'},
    //     {label: 'Istanbul', value: 'IST'},
    //     {label: 'Paris', value: 'PRS'}
    // ];
    const clearForm = () => {
        // e.preventDefault();
        dispatch(clearFilters());
      };
    useEffect(() => {
      getSex(dispatch);
    }, [dispatch])
    
  return  (
    <div className=" hidden md:flex justify-content-between">
        {/* <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} /> */}
       <div className='grid '>
<div className='col-12 md:col-4'>

            <InputText 
            value={search} 
            // onChange={onGlobalFilterChange1}
            onChange={(e) => dispatch(handleChange({ name:'search', value:e.target.value }))}
             placeholder="Keyword Search" className='w-full' />
             
       

</div>

<div className='col-12 md:col-4'>


<Dropdown value={Sex} options={sexOptions} className='w-full' onChange={(e) => dispatch(handleChange({ name:'Sex', value:e.value }))} placeholder="Select Sex"/>

</div>
<div className='col-12 md:col-4'>

<Dropdown value={BirthPlace}  className='w-full' options={placeOptions} onChange={(e) => dispatch(handleChange({ name:'BirthPlace', value:e.value }))} placeholder="Select Birth place"/>
</div>
<div className='col-12 md:col-6'>
<Dropdown value={BirthOrder} className='w-full' options={orderOptions} onChange={(e) => dispatch(handleChange({ name:'BirthOrder', value:e.value }))} placeholder="Select Birth order"/>
</div>

<div className='col-12 md:col-6'>
{/* <Dropdown value={BirthType} options={typeOptions} onChange={(e) => setCity(e.value)} placeholder="Select Birth type"/> */}
<Button label="Reset Filter" className="p-button-warning w-full" onClick={clearForm}  />
</div>

       </div>
        
    </div>
)
}

export default Filter