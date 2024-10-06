import "./pharmacePage.css";
import React, { useState } from "react";
import arrow from "../../images/arrow-right 2.png";
import DispensingMedication from "../pharmacePage/Dispensing_medication/Dispensing medication";
import RequestMedication from "./RequestMedication/RequestMedication";
import Listofmedication from "./ListofMedications/listofmedication";
import MedicationDispensingList from "./MedicationDispensingList/MedicationDispensingList";
import RequestResponseList from "./RequestResponseList/RequestResponseList";

function PharmacePage(params) {
  const [activeSection, setActiveSection] = useState("DispensingMedication");
  const [forlist, setforList] = useState("");

  function renderSection() {
    switch (activeSection) {
      case "DispensingMedication":
        return <DispensingMedication />;
      case "RequestMedication":
        return <RequestMedication />;
      case "Listofmedication":
        return <Listofmedication />;
      case "MedicationDispensingList":
        return <MedicationDispensingList />;
      case "RequestResponseList":
        return <RequestResponseList />;
      default:
        return <DispensingMedication />;
    }
  }

  return (
    <div className="pharmacepage container mx-auto">
      <div className="header">
        <img
          src={arrow}
          alt="Back arrow"
          onClick={() => window.history.back()}
        />
        <h1>الصيدلاني سيف احمد محمد</h1>
      </div>

      <div className="upDiv">
        <div className="bodySection">
          <div className={`leftSection h-full w-full ${forlist}`}>
            {renderSection()}
          </div>

          <div className="rightsection">
            <button
              onClick={() => {
                setActiveSection("DispensingMedication");
                setforList("");
              }}
              className={
                activeSection === "DispensingMedication" ? "colorForButton" : ""
              }
            >
              صرف الدواء
            </button>
            <button
              onClick={() => {
                setActiveSection("Listofmedication");
                setforList("forlist");
              }}
              className={
                activeSection === "Listofmedication" ? "colorForButton" : ""
              }
            >
              قائمة الأدوية
            </button>
            <button
              onClick={() => {
                setActiveSection("RequestMedication");
                setforList("");
              }}
              className={
                activeSection === "RequestMedication" ? "colorForButton" : ""
              }
            >
              طلب الدواء
            </button>
            <button
              onClick={() => {
                setActiveSection("MedicationDispensingList");
                setforList("forlist");
              }}
              className={
                activeSection === "MedicationDispensingList"
                  ? "colorForButton"
                  : ""
              }
            >
              قائمة صرف الدواء
            </button>
            <button
              onClick={() => {
                setActiveSection("RequestResponseList");
                setforList("forlist");
              }}
              className={
                activeSection === "RequestResponseList" ? "colorForButton" : ""
              }
            >
              قائمة استجابة الطلبات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacePage;
