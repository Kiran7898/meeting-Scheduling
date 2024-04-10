import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimeSlots from './TimeSlots';
import '../App.css'; // Import your custom CSS file

const CustomCalendar = ({ onDateClick }) => {
    const [date, setDate] = useState(new Date()); // Set initial date to present day
    const [selectedDate, setSelectedDate] = useState(null); // State to track selected date
  const presentMonth = new Date();
  const nextMonth = new Date(presentMonth);
  nextMonth.setMonth(nextMonth.getMonth()+1 );

  const handleDateClick = (clickedDate) => {
    if (selectedDate && clickedDate.getTime() === selectedDate.getTime()) {
      setSelectedDate(null); // Deselect the date if clicked again
    } else {
      setSelectedDate(clickedDate); // Set the selected date
    }
    if (onDateClick) {
      onDateClick(clickedDate); // Call the onDateClick function with the clicked date as an argument
    }
  };

  const tileDisabled = ({ date, view }) => {
    const today = new Date();
    const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0); // Last day of next month
    return view === 'month' && ((date < today || date > endOfNextMonth) || date.getDay() === 0 || date.getDay() === 6);
  };

  const tileClassName = ({ date }) => {
    const today = new Date();
    const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    const dayOfWeek = date.getDay();
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;

    // Check if the date is within the range and is not a Saturday or Sunday
    if (date >= today && date <= thirtyDaysFromNow && isWeekday) {
      return 'valid-date'; // Apply valid date styling
    } else if (isWeekday) {
      return 'weekday'; // Apply weekday styling for past dates
    } else {
      return 'weekend'; // Apply weekend styling for weekends
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      return (
        <div style={{ margin: '10px' }}>{date.getDate()}</div>
      );
    }
  };

  return (
    <div className="custom-calendar-wrapper flex" style={{ width: 'auto', height: '50%', gap: '30px' }}>
      <Calendar
        onChange={setDate}
        value={date}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
        minDetail="month"
        maxDetail="month"
        onClickDay={handleDateClick} // Ensure this is set correctly
        showNeighboringMonth={false}
        nextLabel=">"
        prevLabel="<"
        next2Label={null}
        prev2Label={null}
        minDate={presentMonth}
        maxDate={nextMonth}
      />

      <div>{selectedDate && <TimeSlots selectedDate={selectedDate} />}</div>
      
    </div>
  );
};

export default CustomCalendar;
