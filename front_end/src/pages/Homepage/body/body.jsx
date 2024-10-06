import React,{useContext} from 'react';
import './body.css';
import { Link } from "react-router-dom";
import Logs from '../../../images/logs.png';
import Reseption from '../../../images/reception.png';
import Card from '../../../images/card.png';
import Recordes from '../../../images/RecordsH.png';
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
     <Link to="/Logs" >   <Cart ImgLink={Logs} Text={'التقارير'} /></Link>
        <Link  to="/logs" ><Cart  ImgLink={Recordes} Text={'السجلات'} /></Link>
        <Link to="/Cardpage" >  <Cart ImgLink={Card} Text={'اصدار الهوية'} /></Link>
      </div>
    </div>
  );
}

export default body;
