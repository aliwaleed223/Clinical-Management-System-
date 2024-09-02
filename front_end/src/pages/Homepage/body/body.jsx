import React from 'react';
import './body.css';
import { Link } from "react-router-dom";
import Dector from '../../../images/doctor.png';
import Reseption from '../../../images/reception.png';
import Card from '../../../images/card.png';
import Pharmacist from '../../../images/Pharmacist.png';
import Cart from '../../components/Cart';
function body(params) {
  return (
    <div className=" body container ">
      <h1>!أهلاً مريم، مرحباً بعودتك</h1>
      <div className="Departments flex flex-wrap">
     <Link to="/Reception" >  <Cart ImgLink={Reseption} Text={'موظف استقبال'} /></Link>
     <Link to="/doctor" >   <Cart ImgLink={Dector} Text={'طبيب'} /></Link>
        <Cart ImgLink={Pharmacist} Text={'صيدلاني'} />
        <Link to="/Cardpage" >  <Cart ImgLink={Card} Text={'اصدار الهوية'} /></Link>
      </div>
    </div>
  );
}

export default body;
