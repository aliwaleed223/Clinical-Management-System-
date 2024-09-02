import caret_down from '../../images/caret-down.svg'


const CaretBtn = ({ isOpen, toggleAccordion }) => {
  return (
    <div className="justify-self-start">
      <button onClick={toggleAccordion}>
        <img
          src={caret_down}
          alt="Caret Down"
          className={`h-14 cursor-pointer transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default CaretBtn;