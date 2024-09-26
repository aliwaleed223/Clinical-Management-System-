import Select from './Select';

const SelectOnUser = () => {
  const optionsList = [
    'ادمن',
    'طبيب',
    'صيدلاني',
    'الآدمن',
    'أمين المخزن',
    'مسؤول هوية',
    'موظف استقبال',
  ];

  return <Select optionsHeader={'كل المستخدمين'} optionsList={optionsList}/>;
};

export default SelectOnUser;
