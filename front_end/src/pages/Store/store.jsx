import React, { useState } from 'react'
import './store.css'
import arrow from './../../images/arrow.png'
import add from './../../images/add_product.png'
import arrowForInput from './../../images/arrow-of-search.png'
import notification from './../../images/Notification.png'
import { Link } from "react-router-dom";
function Store(params) {



    const data = [
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },
        {
          date: "8/23/2024",
          quantity: 100,
          price: "$5",
          description: "خافض حرارة، مسكن ألم",
          name: "Paracetamol",
          ndc: "NDC 50090-0990"
        },  {
            date: "8/23/2024",
            quantity: 100,
            price: "$5",
            description: "خافض حرارة، مسكن ألم",
            name: "Paracetamol",
            ndc: "NDC 50090-0990"
          },  {
            date: "8/23/2024",
            quantity: 100,
            price: "$5",
            description: "خافض حرارة، مسكن ألم",
            name: "Paracetamol",
            ndc: "NDC 50090-0990"
          },  {
            date: "8/23/2024",
            quantity: 100,
            price: "$5",
            description: "خافض حرارة، مسكن ألم",
            name: "Paracetamol",
            ndc: "NDC 50090-0990"
          }
      ];


    const [toggle, setToggle] = useState({ toggle1: '', toggle2: '' })
    const [inputValues, setInputvalue] = useState({
        classification: 'جميع التصنيفات',
        type: 'جميع الانواع'
    })

    function setValue(key, value) {
        setInputvalue((prevState) => ({
            ...prevState,
            [key]: value, 
        }));
    }




    return (
        <div className='store' >
            <div className='header'>
                <div className='arrow'><img src={arrow} alt="" onClick={()=>window.history.back()} /></div>
                <div className='title'><h1>المخزن</h1></div>
                {/* empty div to make title in the center */}
                <div></div>
            </div>
            <div className='firstContener'>
                <div className='headOfFirstContainer'>
                    <div className="addToStore">
                        <div className="navOfHeadOfFirstContainer">
                          
                          <div className="leftOfNavOfHeadOfFirstContainer">
                          <Link to="/AddProduct" >
                                <div className='DivOfAdd '>
                                <img src={add} alt="" />
                                <p>اضافة</p>
                                </div>
                                </Link>
                                <Link to="/drugStore/requests" >
                                <div className='DivOfAdd listOfrequest' >
                                <p>قائمة الطلبات </p>
                                </div>
                                </Link>
                                <img src={notification} alt="" />
                                <div className='notification'>1</div>
                            </div>
                            <div className='searchAndFilter'><p>البحث والتصفية</p></div>
                        </div>

                    </div>

                </div>
                <div className="inputsSearch">
                    <form action="">
                        <div className="lineOfinput">
                            <button>بحث</button>
                            <div className='divForSlectInput' src={arrowForInput} alt="" onClick={() => {
                                setToggle((prevState) => ({
                                    ...prevState,
                                    toggle1: prevState.toggle1 === '' ? 'toggle' : '',
                                }));
                            }}>
                                <img className={toggle.toggle1} src={arrowForInput} alt=""  />
                                <input value={inputValues.classification} className='selectInput' type="text" readOnly />
                                <ul className={`${toggle.toggle1==='toggle' ? 'display' : ''}`}>
                                    <li onClick={()=>{setValue('classification','على وشك النفاذ')}}>على وشك النفاذ</li>
                                    <li onClick={()=>{setValue('classification','نافذ')}} >نافذ</li>
                                </ul>
                            </div>
                            <input type="text" placeholder='ادخل الاسم او الكود' />
                        </div>
                        <div className="lineOfinput">
                            <button>الغاء الفلترة</button>
                            <input type="text" placeholder='ادخل الباركود' />
                            <div className='divForSlectInput' onClick={() => {
                                setToggle((prevState) => ({
                                    ...prevState,
                                    toggle2: prevState.toggle2 === '' ? 'toggle' : '',
                                }));
                            }}>
                                <img src={arrowForInput} alt="" className={toggle.toggle2}  />
                                <input value={inputValues.type} className='selectInput' type="text" readOnly />
                                <ul className={`${toggle.toggle2==='toggle' ? 'display' : ''}`}>
                                    <li onClick={()=>{setValue('type','دواء')}}>دواء</li>
                                    <li onClick={()=>{setValue('type','مستلم')}}>مستلم </li>
                                    <li onClick={()=>{setValue('type','ادوات طبية')}}>ادوات طبية</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="secondContener">
                <div className='divFortable'>
                <table>
                    <thead>
                        <tr>
                            <td className='firstTd'>تاريخ الشراء</td>
                            <td>الكمية</td>
                            <td>سعر المنتج</td>
                            <td>ملاحضات</td>
                            <td>اسم المنتج</td>
                            <td className='lastTd'>رقم المنتج</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
          <tr key={index}>
            <td className="firstTd">{item.date}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.name}</td>
            <td className="lastTd">{item.ndc}</td>
          </tr>
        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Store;