import { useState } from "react";
import carret from '../../../images/caret-down.svg';
import respone_icon from '../../../images/response-icon.svg';

const Request = ({ requestDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white relative rounded-lg overflow-hidden mt-4">
      {/* side blue bar */}
      <div className="absolute right-0 bg-[#3DC3E0] h-full w-[10px] z-10"></div>

      <div className="bg-white px-5 flex justify-between relative">
        {/* show accordion & go to response page */}
        <div className="flex flex-col gap-4 h-full w-10 items-center justify-center absolute left-5">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={carret} alt="carret" className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
              }`} />
          </button>
          <button><img src={respone_icon} alt="response icon" /></button>
        </div>
        <RequestDetail detailHeader={"تاريخ الطلب"} detailData={new Date(requestDetails.requestDate).toLocaleDateString('en-CA')} />
        <RequestDetail detailHeader={"اسم الصيدلاني"} detailData={requestDetails.pharmacistName} />
        <RequestDetail detailHeader={"شكل الدواء"} detailData={requestDetails.medicineForm} />
        <RequestDetail detailHeader={"الكمية"} detailData={requestDetails.amountRequested} />
        <RequestDetail detailHeader={"اسم الدواء"} detailData={requestDetails.medicineName} />
      </div>

      {/* this is the accordion */}
      <div
        className={`bg-[#E7FAFE] text-right px-5 overflow-hidden transition-all duration-500 `}
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <h3 className="text-3xl text-gray-400 mt-4">الملاحظات</h3>
        <p className="text-2xl mt-2 mb-4">{requestDetails.notes}</p>
      </div>
    </div>
  );
}

// component receive the name of the header and the info beneath it
const RequestDetail = ({ detailHeader, detailData }) => {
  return (
    <div className="text-right w-[200px] py-4">
      <h3 className="text-gray-400 text-3xl">{detailHeader}</h3>
      <p className="text-2xl mt-2 font-bold">{detailData}</p>
    </div>
  );
}

export default Request;



// import { useState } from "react";
// import carret from '../../../images/caret-down.svg'
// import respone_icon from '../../../images/response-icon.svg'

// const Request = ({ requestDetails }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-white relative rounded-lg overflow-hidden mt-4 transition-all duration-150">
//       {/* side blue bar */}
//       <div className="absolute right-0 bg-[#3DC3E0] h-full w-[10px] z-10"></div>

//       <div className="bg-white px-5 mt-4 flex justify-between relative">
//         {/* show accordion & go to respone page */}
//         <div className="flex flex-col gap-4 h-full w-10 items-center justify-center absolute left-0  ">
//           <button onClick={() => setIsOpen(!isOpen)}><img src={carret} alt="" /></button>
//           <button><img src={respone_icon} alt="" /></button>
//         </div>
//         <ReuqestDetail detailHeader={"تاريخ الطلب"} detailData={new Date(requestDetails.requestDate).toLocaleDateString('en-CA')} />
//         <ReuqestDetail detailHeader={"اسم الصيدلاني"} detailData={requestDetails.pharmacistName} />
//         <ReuqestDetail detailHeader={"شكل الدواء"} detailData={requestDetails.medicineForm} />
//         <ReuqestDetail detailHeader={"الكمية "} detailData={requestDetails.amountRequested} />
//         <ReuqestDetail detailHeader={'اسم الدواء '} detailData={requestDetails.medicineName} />
//       </div>
//       {/* this is the accordion */}
//       {
//         isOpen &&
//         <div className="bg-[#E7FAFE] text-right px-5 py-4 max-h-[500px] overflow-hidden transition-[max-height] duration-500 ease-in-out">
//           <h3 className="text-3xl text-gray-400">الملاحظات</h3>
//           <p className="text-2xl mt-2">{requestDetails.notes}</p>
//         </div>

//       }
//       {/* {isOpen && <div className="bg-[#E7FAFE] text-right px-5 py-4 transition-all">
//         <h3 className="text-3xl text-gray-400">الملاحظات</h3>
//         <p className="text-2xl mt-2">{requestDetails.notes}</p>
//       </div>} */}

//     </div>
//   );
// }

// // component recive the name of the header and the info beneath it
// const ReuqestDetail = ({ detailHeader, detailData }) => {
//   return (
//     <div className="text-right w-[200px] py-4">
//       <h3 className="text-gray-400 text-3xl">{detailHeader}</h3>
//       <p className="text-2xl mt-2 font-bold">{detailData}</p>
//     </div>
//   )
// }

// export default Request;