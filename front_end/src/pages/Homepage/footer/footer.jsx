import React from "react";
import './footer.css'
import Phone from '../../../images/phone.png'
import Location from "../../../images/location.png"
import Email from "../../../images/email.png"
function footer(params) {
    

    return(
<div className="footer">
    <div className="items">
        <div className="item">
            <img src={Phone} alt="" />
            <p>+964 771 336 6777</p>
        </div>
        <div className="item">
            <img src={Location} alt="" />
            <p>بغداد_القادسية_ مجمع شام سنتر</p>
        </div>
        <div className="item">
            <img src={Email} alt="" />
            <p>info@firewall-iq.com</p>
        </div>
    </div>
</div>
    )
}
export default footer