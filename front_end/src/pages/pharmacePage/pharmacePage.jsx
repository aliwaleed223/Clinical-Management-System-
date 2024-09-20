import React, { useState } from "react";
import './pharmacePage.css'
import arrow from '../../images/arrow-right 2.png'
import DispensingMedication from '../pharmacePage/Dispensing_medication/Dispensing medication'
import RequestMedication from './RequestMedication/RequestMedication'
import Listofmedication from './ListofMedications/listofmedication'
function pharmacePage(params) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeSection, setActiveSection] = useState("DispensingMedication");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [forlist, setforList] = useState("")


    function renderSection() {
        switch (activeSection) {
            case "DispensingMedication":

                return <DispensingMedication />;

            case "RequestMedication":

                return <RequestMedication />;
            case "Listofmedication":

                return <Listofmedication />;
            default:

                return <DispensingMedication />;

        }
    }

    return (
        <div className="pharmacepage container mx-auto ">
            <div className="header">
                <img src={arrow} alt="" onClick={() => { window.history.back() }} />
                <h1>الصيدلاني سيف احمد محمد</h1>
            </div>
            <div className="upDiv ">
                <div className="bodySection  ">
                    <div className={`leftSection h-full w-full  ${forlist}`} >
                        {renderSection()}
                    </div>


                    <div className="rightsection">

                        <button onClick={() => {
                            setActiveSection("DispensingMedication");
                            setforList("")
                        }}
                            className={activeSection === "DispensingMedication" ? "colorForButton" : ""}  >صرف الدواء</button>
                        <button onClick={() => {
                            setActiveSection("Listofmedication")
                            setforList("forlist")

                        }}
                            className={activeSection === "Listofmedication" ? "colorForButton" : ""} >قائمة الأدوية</button>
                        <button onClick={() => {
                            setActiveSection("RequestMedication")
                            setforList("")
                        }}
                            className={activeSection === "RequestMedication" ? "colorForButton" : ""} >طلب الدواء</button>


                    </div>

                </div>
            </div>
        </div>

    )
}
export default pharmacePage