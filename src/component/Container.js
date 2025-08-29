import React from 'react';
import './assets/input.css'

export default function Container({tempData, city}) {
if(tempData.temp){
  return (
    < div className='temp-container' >
      <div className='temp'>
        {tempData?.temp}&#8451;
      </div>
      <div className='city'>
        {tempData.city}, {tempData?.country}
      </div>
    </div >)
}
else
return(<div></div>)

}