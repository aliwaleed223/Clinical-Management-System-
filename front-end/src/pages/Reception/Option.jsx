import { Link } from "react-router-dom"; 

const Option = ({ imgLink, optionText,route }) => {
  return (
    <Link to={route}>
    <div className=" bg-white w-[400px] h-[200px] grid place-items-center rounded-lg relative group overflow-hidden hover:bg-[#E1F4F4] cursor-pointer z-0">
      <img src={imgLink} alt="" className="w-[70px] h-[70px]" />
      <h2 className="font-bold text-2xl">{optionText} </h2>
      <div className="bg-blue-500 absolute w-[50px] h-[50px] top-0 left-0 rounded-bl-md rounded-br-full opacity-0 group-hover:opacity-100 transition 0.3s"></div>
    </div>
    </Link>
  );
};

export default Option;
