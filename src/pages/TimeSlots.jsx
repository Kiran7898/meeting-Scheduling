import React, { useEffect, useRef, useState } from 'react';
import SchedulingPopup from './SchedulingPopup'
import '../App.css';

const TimeSlots = ({ selectedDate, onNextClick }) => {
  const timeSlotsContainerRef = useRef(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  console.log(typeof onNextClick);

  useEffect(() => {
    const timeSlotsContainer = timeSlotsContainerRef.current;
    if (timeSlotsContainer) {
      const containerWidth = timeSlotsContainer.scrollWidth + 20;
      timeSlotsContainer.style.width = `${containerWidth}px`;
    }
  }, [selectedDate]);

  const handleNextClick = () => {
    console.log('handleNextClick called');
    if (typeof onNextClick === 'function') {
      onNextClick();
      
    }
  };
  
 
  const renderTimeSlots = () => {
    const timeSlots = [];
    let currentTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 9, 0, 0);

    while (currentTime.getHours() < 19) {
      const timeSlotStart = new Date(currentTime.getTime());
      const timeSlotEnd = new Date(currentTime.getTime() + 30 * 60 * 1000);

      const isSelected = selectedTimeSlot && selectedTimeSlot.start.getTime() === timeSlotStart.getTime();

      timeSlots.push(
        <div key={currentTime.getTime()} className={`time-slot ${isSelected ? 'selected' : ''}`}>
          {isSelected ? (
            <>
              <div className="box brown">{timeSlotStart.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</div>
              <button className="box blue" onClick={handleNextClick}>Next</button>
            </>
          ) : (
            <div onClick={() => setSelectedTimeSlot({ start: timeSlotStart, end: timeSlotEnd })}>
              {timeSlotStart.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
            </div>
          )}
        </div>
      );

      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return timeSlots;
  };

  return (
    <div className="time-slots-wrapper">
      <div className="time-slots-container" ref={timeSlotsContainerRef}>
        <h3 className="pt-1">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
        <div className="time-slots">{renderTimeSlots()}</div>
      </div>
    </div>
  );
};

export default TimeSlots;
