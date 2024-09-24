import React from 'react'
import Plus from '../../../images/image 13.png'
import Minus from '../../../images/image 14.png' 

import './listofmedication.css'

function listofmedication (params) {
    
    const data = {
        items: [
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          },
          {
            "quantity": 70,
            "dosage": "500 ml",
            "description": "يقلل الكوليسترول ويحسن صحة القلب",
            "medication": "Simvastatin"
          }
        ]
      }
      




    return(
        <div className='listofmedication ' >
            <div className='head'>
<div className="left">
<p>الكمية المتوفرة</p>
    <p>الجرعة</p>
   
</div>
<div className="right">
<p>الوصف</p>
    <p>الادوية</p>
   
</div>
            </div>
            
            {data.items.map((item, index) => (
        <div key={index} className='head Item'>
          <div className='L-section'>
            <div className='quantity'>
              
              <p>{item.quantity}</p>
            </div>
            <p className='dosage'>{item.dosage}</p>
          </div>
          <div className='R-section'>
            <p className='description'>{item.description}</p>
            <p className='medication'>{item.medication}</p>
          </div>
        </div>
      ))}
            
            </div>

        
    )
}

export default listofmedication 