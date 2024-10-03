import cancel_icon from '../../images/trash-can.svg'

const FormActions = ({ onSubmit, onCancel }) => {
  return (
    <div className='bg-[#f4faf9] p-4 mt-4 rounded-lg text-xl flex flex-row-reverse gap-10 w-fit'>
      <button className='bg-[#14B6DA] text-white py-2 px-4 rounded-lg'
      >حفظ وطباعة</button>
      <button className='flex items-center gap-4 shadow-xl px-4 border-[blue]'
      >
        <img src={cancel_icon} alt="" className='h-8' />
        <span>الغاء</span>
      </button>
    </div>
  );
}

export default FormActions;