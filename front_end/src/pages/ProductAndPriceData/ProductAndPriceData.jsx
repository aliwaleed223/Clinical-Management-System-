import React from 'react'
import arrow from './../../images/arrow.png'
import './../ProductAndPriceData/ProductAndPriceData.css'
function ProductAndPriceData(params) {



    return (
        <div className='store' >
            <div className='header'>
                <div className='arrow'><img src={arrow} alt="" /></div>
                <div className='title'><h1>بيانات المنتج والسعر</h1></div>
                {/* empty div to make title in the center */}
                <div></div>
            </div>
            <div className='ProductDetails'>
                <h2 className="headOfProductDetails">
                    تفاصيل المنتج
                </h2>
                <table>
                    <thead>
                        <tr>
                            <td>الاسم</td>
                            <td>رقم المنتج</td>
                            <td>تاريخ الشراء</td>
                            <td>نوع المنتج</td>
                            <td>الكمية</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الاسم</td>
                            <td>رقم المنتج</td>
                            <td>تاريخ الشراء</td>
                            <td>نوع المنتج</td>
                            <td>الكمية</td>
                        </tr>
                    </tbody>
                </table>
                <h3>الملاحظات</h3>
                <p className='description'>جهاز صغير محمول يستخدم لقياس نسبة الأكسجين في الدم ومعدل ضربات القلب. يستخدم في المستشفيات والعيادات أو للاستخدام الشخصي لمتابعة الحالة الصحية.</p>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className='ProductDetails'>
                <h2 className="headOfProductDetails">
                تفاصيل التسعير
                </h2>
                <table>
                    <thead>
                        <tr>
                            <td>سعر البيع</td>
                            <td>سعر الشراء </td>
                            <td>اقل سعر للبيع </td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الاسم</td>
                            <td>رقم المنتج</td>
                            <td>تاريخ الشراء</td>
                           
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td>الخصم</td>
                            <td>نوع الخصم </td>
                            <td> السعر بعد الخصم</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الاسم</td>
                            <td>نوع الخصم </td>
                            <td> السعر بعد الخصم</td>
                           
                        </tr>
                    </tbody>
                </table>
               
            </div>
        </div>
    )
}


export default ProductAndPriceData

