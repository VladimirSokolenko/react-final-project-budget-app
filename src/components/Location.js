import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        // <div className='alert alert-success'> Currency () <br></br>
        <div className="curr_frame"> 
          {/* <p style={{ color: 'white' }}> */}
            Currency (£ Pound) 
          {/* </p> */}
          {/* <br></br> */}
          <select onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();' className="curr_select" name="Location" size='5em' onChange={event=>changeLocation(event.target.value)}>
            {/* <option disabled selected value="">Select an option</option> */}
            {/* <option value="£" color='white'></option> */}
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
          </select>	

          
        {/* }	 */}
    </div>
    );
};

export default Location;