import search_icon from '../../../images/search.png';

const FilterMethod = ({ filterMethodHeader }) => {
  return (
    <div className={ `flex flex-col gap-2 justify-end text-right ${filterMethodHeader === 'المريض' ? 'col-span-2  w-[90%] 2xl:w-[80%]' : ''}` }>
      <h2 className='2xl:text-3xl text-2xl'>{filterMethodHeader}</h2>
      <div className='flex gap-2 border-2 border-[#B7EBF7] p-2 rounded-lg '>
        <img src={search_icon} alt="search icon" />
        <input placeholder="أختر" className='w-full'/>
      </div>
    </div>
  );
};

export default FilterMethod;
