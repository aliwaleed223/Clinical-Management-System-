import { React, useState } from "react";
import './Cardpage.css'
import addimg from './../../images/user (4) 2.png'
import save from '../../images/save-instagram 1.png'
import card from '../../images/personalCard.png'
import Qr from '../../images/image 1.png'
import printlogo from '../../images/printer (1) 1.png'
function Cardpage() {


  const [info, setinfo] = useState({ name: "", Birth: "", gender: "", number_of_card: "", img: "" });
  const handleValueChange = (field, newValue) => {
    setinfo((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
  };






  const [fileName, setFileName] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

    
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
      handleValueChange('img', `${imageSrc}`)
    } else {
      setFileName('');
      setImageSrc(null);
    }

  };

  return (
    <div className="Cardpage mx-auto ">
      <div className="info">
        <div className="header">
          <h1 >اصدار الهوية</h1>
        </div>
        <div className="inputinfo">
          <div className="leftSection">
            <img src={addimg} alt="" />
            <input type="file" id="file-input" onChange={handleFileChange} accept="image/*" />
            <label for="file-input" class="file-label"  >اضاقة صورة</label>
           

          </div>
          <div className="rightSection">
            <form action="">
              <div>
                <input type="name" id="name" value={info.name} onChange={(e) => handleValueChange('name', e.target.value)} />
                <label htmlFor="name">   الاسم</label>
              </div>


              <div>
                <input type="date" id="name" value={info.Birth} onChange={(e) => handleValueChange('Birth', e.target.value)} />
                <label htmlFor="name" >المواليد</label>
              </div>

              <div className="Determine_gender">
                <input className="name" type="name" id="name" value="انثى" readOnly />
                <input className="select" type="radio" name="contact" onChange={() => handleValueChange('gender', "انثى")} />

                <input className="name" type="name" id="name" value="ذكر" readOnly />
                <input className="select" type="radio" name="contact" onChange={() => handleValueChange('gender', "ذكر")} />
                <label htmlFor="name" >الجنس</label>
              </div>
              <div>
                <input className="number_of_card" type="text" id="name" value={info.number_of_card} onChange={(e) => handleValueChange('number_of_card', e.target.value)} />
                <label htmlFor="name">رقم البطاقة الوطنية</label>
              </div>
              <div className="buttons">
                <button className="save"><img src={save} alt="" /><p>حفظ</p> </button>
                <button className="makeQrCode"> <p> <span> QR</span> انشاء ال </p> </button>
              </div>

            </form>
          </div>


        </div>
      </div>


      <div className="personalCard">

        <div className="header">
          <h1 >معاينة الهوية</h1>
        </div>
        <div className="card">
          <img src={card} alt="" />
          <div className="informationCard">
            <p> {info.name}<p>:الاسم</p></p>
            <p>{info.Birth} <p>  :المواليد</p></p>
            <p> {info.gender} <p>:الجنس </p>  </p>
            <p>{info.number_of_card} <p>:رقم البطاقة الوطنية </p> </p>
          </div>
          <div className="imgSection">
            {imageSrc && <img src={imageSrc} alt={fileName} className="image-preview" />}
          </div>
          <div className="QRcode">
            <img src={Qr} alt="" />
          </div>
          <div className="prinDiv">
            <button className="printButton" onClick={()=>{window.print()}}>
              <img src={printlogo} alt="" />
              <span>طباعة</span>
            </button>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Cardpage