import React, { useState,useEffect } from 'react';
import plus from '../../images/image 46.png'
import arrow2 from '../../images/Group 17.png'

function DynamicForm({info,sendvalue}) {


  const [add, setAdd] = useState(1); // Initial number of sections
  const [values, setValues] = useState([{ category: '', price: 0, quantity: 0, total: 0 ,description:''}]);
  const result ={...info,items:[...values]}
  const [showStates, setShowStates] = useState(['hide']);

const toggleShow = (index) => {
  const newShowStates = [...showStates];
  newShowStates[index] = newShowStates[index] === 'show' ? 'hide' : 'show';
  setShowStates(newShowStates);
};


  const handleValueChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index].category = newValue;
    setValues(newValues);
  };
  const handleNoteChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index].description = newValue;
    setValues(newValues);
  };
 

  const handleNumber1Change = (index, newValue) => {
    const newValues = [...values];
    newValues[index].price = parseFloat(newValue) || 0;
    setValues(newValues);
    summation(index)
  };

  const handleNumber2Change = (index, newValue) => {
    const newValues = [...values];
    newValues[index].quantity = parseFloat(newValue) || 0;
    setValues(newValues);
    summation(index)
  };

  const addSection = () => {
    setAdd(add + 1);
    setValues([...values, { category: '', price: 0, quantity: 0 }]);
  };

  function summation(index)  {
    const newValues = [...values];
    newValues[index].total = values[index].price * values[index].quantity;
    setValues(newValues);
  
    
  };
  useEffect(() => {
    sendvalue(result);
  }, [values,info]);
 
 
               
  return (
    <>
      {values.map((item, index) => (
        <div className="lastSection" key={index}>
          <div className="part item">
            <input
              value={item.category}
              type="text"
              id={`name-${index}`}
              onChange={(e) => handleValueChange(index, e.target.value)}
            />
            <label htmlFor={`name-${index}`}>البند</label>
            <img onClick={() => toggleShow(index)} src={arrow2} alt="" />
            <ul  className={showStates[index] || 'hide'}>
              <li onClick={() => handleValueChange(index, 'فحوصات الاسنان')}>فحوصات الاسنان</li>
              <hr />
              <li onClick={() => handleValueChange(index, 'فحوصات المختبرت')}>فحوصات المختبرات</li>
              <hr />
              <li onClick={() => handleValueChange(index, 'فحوصات الضماد')}>فحوصات الضماد</li>
              <hr />
              <li onClick={() => handleValueChange(index, 'فحوصات الاشعة والسونار')}>فحوصات الاشعة والسونار</li>
              <hr />
              <li onClick={() => handleValueChange(index, 'الفحوصات العامة')}>الفحوصات العامة</li>
              <hr />
            </ul>
          </div>
          <div className="add_other_line">
            <img src={plus} alt="" onClick={addSection} />
          </div>
          <div className="part">
            <input type="text" id={`description-${index}`}   onChange={(e) => handleNoteChange(index, e.target.value)}/>
            <label htmlFor={`description-${index}`}>الوصف</label>
          </div>
          <div className="price">
            <input
              type="number"
              id={`price-${index}`}
              value={item.price}
              onChange={(e) => handleNumber1Change(index, e.target.value)}
            />
            <label htmlFor={`price-${index}`}>السعر</label>
          </div>
          <div className="price">
            <input
              type="number"
              id={`quantity-${index}`}
              value={item.quantity}
              onChange={(e) => handleNumber2Change(index, e.target.value)}
              style={{ width: '55px' }}
            />
            <label htmlFor={`quantity-${index}`}>العدد</label>
          </div>
          <div className="price">
            <input type="number" id={`total-${index}`} value={item.total}  readOnly />
            <label htmlFor={`total-${index}`}>المجموع</label>
          </div>
        </div>
      ))}
     
    </>
    
  );
}

export default DynamicForm;
