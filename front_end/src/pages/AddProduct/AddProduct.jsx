import React from 'react'
import arrow from './../../images/arrow.png'
import { useState } from 'react'
import arrowForInput from './../../images/arrow-of-search.png'
import './../AddProduct/AddProduct.css'
import Save from './../../images/save-instagram 1.png'
import Print from './../../images/printer (1) 1.png'

function AddProduct(params) {

    // Using state to manage toggle and input values
    const [toggle, setToggle] = useState({ toggle1: '', toggle2: '' })
    const [inputValues, setInputvalue] = useState({
        type: 'نوع المنتج' // Default value for the product type
    })

    // Function to update input values dynamically
    function setValue(key, value) {
        setInputvalue((prevState) => ({
            ...prevState,
            [key]: value, 
        }));
    }

    return(
        <div className='store'>
            {/* Header section with an arrow icon and a centered title */}
            <div className='header'>
                <div className='arrow'>
                    <img src={arrow} alt="" onClick={()=>window.history.back()} />
                </div>
                <div className='title'>
                    <h1>اضافة منتج</h1>
                </div>
                {/* Empty div to help center the title */}
                <div></div>
            </div>

            {/* First section containing product details form */}
            <div className='firstContener'>
                <div className='headOfFirstContainer'>
                    <div className="addToStore">
                        <div className="navOfHeadOfFirstContainer">
                            <div style={{ "height": "43px" }}></div>
                            <div className='searchAndFilter'>
                                <p>تفاصيل المنتج</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product details input fields */}
                <div className="inputsSearch" style={{ "height": "100%", "margin": '0' }}>
                    <form action="">
                        <div className="lineOfinput setNewMargin">
                            {/* Input for purchase date */}
                            <div className='DivForInputs'>
                               <label htmlFor="">تاريخ الشراء</label>
                               <input type="date" placeholder='تاريخ الشراء' />
                            </div>
                            {/* Input for product name */}
                            <div className='DivForInputs'>
                               <label htmlFor=""> الاسم</label>
                               <input type="text" />
                            </div>
                        </div>
                        
                        {/* Textarea for product description */}
                        <div className="lineOfinput setNewMargin">
                            <textarea placeholder='الوصف ...'></textarea>
                        </div>

                        <div className="lineOfinput setNewMargin">
                            {/* Input for product quantity */}
                            <div className='DivForInputs'>
                                <label htmlFor=""> الكمية</label>
                                <input type="text" />
                            </div>
                            {/* Dropdown input for product type */}
                            <div className='DivForInputs'>
                                <label htmlFor="">نوع المنتج</label>
                                <div className='divForSlectInput' onClick={() => {
                                    setToggle((prevState) => ({
                                        ...prevState,
                                        toggle2: prevState.toggle2 === '' ? 'toggle' : '',
                                    }));
                                }}>
                                    <img src={arrowForInput} alt="" className={toggle.toggle2} />
                                    <input value={inputValues.type} className='selectInput' type="text" readOnly />
                                    <ul className={`${toggle.toggle2 === 'toggle' ? 'display' : ''}`}>
                                        <li onClick={() => { setValue('type', 'دواء') }}>دواء</li>
                                        <li onClick={() => { setValue('type', 'مستلم') }}>مستلم</li>
                                        <li onClick={() => { setValue('type', 'ادوات طبية') }}>ادوات طبية</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Second section for pricing details */}
            <div className='firstContener'>
                <div className='headOfFirstContainer'>
                    <div className="addToStore">
                        <div className="navOfHeadOfFirstContainer">
                            <div style={{ "height": "43px" }}></div>
                            <div className='searchAndFilter'>
                                <p>تفاصيل التسعير</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing input fields */}
                <div className="inputsSearch" style={{ "height": "100%", "margin": '0' }}>
                    <form action="">
                        <div className="lineOfinput setNewMargin">
                            {/* Input for sale price */}
                            <div className='DivForInputs'>
                               <label htmlFor=""> سعر البيع</label>
                               <input type="text" />
                            </div>
                            {/* Input for purchase price */}
                            <div className='DivForInputs'>
                               <label htmlFor=""> سعر الشراء</label>
                               <input type="text" />
                            </div>
                        </div>
                        
                        {/* Input for discount type and discount */}
                        <div className="lineOfinput setNewMargin">
                            <div className='NewDivForInputs'>
                                <div>
                                    <label htmlFor=""> نوع الخصم</label>
                                    <input type="text" placeholder='%' />
                                </div>
                                <div>
                                    <label htmlFor="">  الخصم</label>
                                    <input type="text" />
                                </div>
                            </div>
                            {/* Input for minimum sale price */}
                            <div className='DivForInputs'>
                                <label htmlFor="">  اقل سعر للبيع</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="lineOfinput setNewMargin">
                            {/* Buttons for save and print functionality */}
                            <div className='NewDivForInputs'>
                                <button>
                                    <img src={Save} alt="" />
                                    <p>حفظ</p>
                                </button>
                                <div>
                                    <button>
                                        <img src={Print} alt="" />
                                        <p>طباعة</p>
                                    </button>
                                </div>
                            </div>
                            {/* Input for price after discount */}
                            <div className='DivForInputs'>
                                <label htmlFor="">  السعر بعد الخصم</label>
                                <input type="text" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
