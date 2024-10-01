import { Link } from 'react-router-dom';
import { useState } from 'react';
import dashboard_icon from '../../images/dashboard.png';
import employees_icon from '../../images/employees.png';
import patients_icon from '../../images/patient.png';
import inovice_icon from '../../images/invoice.png';
import doctor_icon from '../../images/doctor.png';
import pharmcist_icon from '../../images/Pharmacist.png';
import records_icon from '../../images/Records.png';
import drugstore_icon from '../../images/drugStore.png';
import reports_icon from '../../images/reports.png';
import list from '../../images/navList-icon-white.svg';

const NavList = () => {
  const [showList, setShowList] = useState(false);

  // Array containing the data for each list item
  const navItems = [
    {
      itemImgLink: dashboard_icon,
      itemText: 'لوح التحكم',
      itemLink: '/dashboard',
    },
    {
      itemImgLink: employees_icon,
      itemText: 'الموظفين',
      itemLink: '/employees',
    },
    { itemImgLink: patients_icon, itemText: 'المرضى', itemLink: '/RPL' },
    {
      itemImgLink: inovice_icon,
      itemText: 'الفواتير',
      itemLink: '/InvoicePage',
    },
    { itemImgLink: doctor_icon, itemText: 'الطبيب', itemLink: '/doctor' },
    {
      itemImgLink: pharmcist_icon,
      itemText: 'الصيدلاني',
      itemLink: '/pharmacist',
    },
    {
      itemImgLink: drugstore_icon,
      itemText: 'مخزن الادوية',
      itemLink: '/drugstore',
    },
    { itemImgLink: records_icon, itemText: 'السجلات', itemLink: '/logs' },
    { itemImgLink: reports_icon, itemText: 'تقارير الفواتير', itemLink: '/billing-report' },
    { itemImgLink: reports_icon, itemText: 'تقارير متابعة الفواتير', itemLink: '/follow-up' },
    { itemImgLink: reports_icon, itemText: 'المخزن الطبي ', itemLink: '/drugstore' },
  ];

  return (
    <div className="relative">
      <button onClick={() => setShowList(!showList)}>
        <img src={list} alt="list icon" />
      </button>
      {showList && (
        <div
          className={`bg-white absolute top-[55px] w-[250px] 2xl:w-[300px] right-0 border-2 border-[#B7EBF7] rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform `}
        >
          <h2 className="py-6 text-center text-xl 2xl:text-3xl border-b-2 text-[#14B6DA] bg-[#E1F4F4]">
            عيادة الامراض المزمنة
          </h2>
          <ul>
            {navItems.map((item, index) => (
              <ListItems
                key={index}
                itemImgLink={item.itemImgLink}
                itemText={item.itemText}
                itemLink={item.itemLink}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ListItems = ({ itemImgLink, itemText, itemLink }) => {
  return (
    <Link to={itemLink}>
      <li className="flex justify-end items-center gap-6 p-4 border-b-2 hover:bg-[#E1F4F4] hover:shadow-md transition-all duration-75">
        <p className="2xl:text-3xl text-xl font-semibold">{itemText}</p>
        <img
          src={itemImgLink}
          alt={itemText}
          className="2xl:w-12 2xl:h-12 w-8 h-8"
        />
      </li>
    </Link>
  );
};

export default NavList;
