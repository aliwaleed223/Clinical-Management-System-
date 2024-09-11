import React from 'react';
import './RPLoptions.css';

function RPLoptions({ filters, onFilterChange }) {
  return (
    <div className='RPL-Options'>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="critical"
          checked={filters.critical}
          onChange={onFilterChange}
        /> حالة حرجة
      </label>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="treated"
          checked={filters.treated}
          onChange={onFilterChange}
        /> تم علاجة
      </label>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="subscribed"
          checked={filters.subscribed}
          onChange={onFilterChange}
        /> مشترك
      </label>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="nonSubscribed"
          checked={filters.nonSubscribed}
          onChange={onFilterChange}
        /> بدون اشتراك
      </label>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="surgeries"
          checked={filters.surgeries}
          onChange={onFilterChange}
        /> عمليات
      </label>
      <label className='checkbox-container'>
        <input
          type="checkbox"
          name="followUp"
          checked={filters.followUp}
          onChange={onFilterChange}
        /> متابعة
      </label>
    </div>
  );
}

export default RPLoptions;
