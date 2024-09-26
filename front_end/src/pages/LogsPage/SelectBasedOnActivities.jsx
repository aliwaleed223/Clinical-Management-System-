import Select from './Select';

const SelectOnActivites = () => {
  const optionsList = [
    'تسجيل دخول',
    'اضافة موظف',
    'اضافة مريض',
    'حذف مريض',
    'اصدار هوية',
    'انشاء فاتورة',
    'حذف فاتورة',
    'اضافة وصفة',
    'صرف وصفة',
    'الغاء وصفة',
    'اضافة منتج',
    'الطباعة',
  ];

  return <Select optionsHeader={'كل الاجراءات'} optionsList={optionsList} />;
};

const OptionComponent = () => {};

export default SelectOnActivites;
