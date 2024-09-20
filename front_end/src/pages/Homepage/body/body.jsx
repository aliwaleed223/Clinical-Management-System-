import React,{useContext} from 'react';
import './body.css';
import { Link } from "react-router-dom";
import Dector from '../../../images/doctor.png';
import Reseption from '../../../images/reception.png';
import Card from '../../../images/card.png';
import Pharmacist from '../../../images/Pharmacist.png';
import Cart from '../../components/Cart';
import  {ClinicalContext}  from './../../auth/contextFile';
function body(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {username} =useContext(ClinicalContext)
  return (
    <div className=" body container ">
      <h1> مرحبا بعودتك  {username}  اهلا</h1>
      <div className="Departments flex flex-wrap">
     <Link to="/Reception" >  <Cart ImgLink={Reseption} Text={'موظف استقبال'} /></Link>
     <Link to="/doctor" >   <Cart ImgLink={Dector} Text={'طبيب'} /></Link>
        <Link  to="/PharmacrPage" ><Cart  ImgLink={Pharmacist} Text={'صيدلاني'} /></Link>
        <Link to="/Cardpage" >  <Cart ImgLink={Card} Text={'اصدار الهوية'} /></Link>
      </div>
    </div>
  );
}

export default body;
