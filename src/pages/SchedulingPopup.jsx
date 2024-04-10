import React, { useState } from 'react';
import TimeSlots from './TimeSlots';
import CustomCalendar from './CustomCalendar';
import FormSection from './FormSection';
import '../App.css';
import './popup.css';

const SchedulingPopup = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [popupPaddingRight, setPopupPaddingRight] = useState(20);
  const [popupWidth, setPopupWidth] = useState('53%');
  const [showFormSection, setShowFormSection] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateClick = () => {
    // Update the padding-right and width only if it hasn't been updated yet
    if (popupPaddingRight === 20) {
      setPopupPaddingRight(0); // Set the new padding-right value
      setPopupWidth('60%'); // Set the new width of pop-inner
    }
  };

  const handleTimeSlotClick = (start, end) => {
    setSelectedTimeSlot({ start, end });
  };

  const handleNextClick = () => {
    setShowSecondPopup(true);
    console.log( typeof handleNextClick);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center popup">
      <button className="absolute top-0 right-0 text-white hover:text-gray-700" onClick={onClose}>
        <svg className="h-8 w-8 m-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="bg-white popup-inner rounded-lg shadow-lg p-8 relative" style={{ paddingRight: `${popupPaddingRight}px`, width: popupWidth }}>
        <div className="flex flex-col lg:flex-row">
          
          <div className="colo lg:w-1/2">
            <div className="logo">
              <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/b53f6730-9e93-409b-92ef-6a1000e8480e/a37e1896.png" alt="Fibery Logo" className="pop-logo mb-6" />
            </div>
            <h2 className="text-3xl font-semibold mb-2">Fibery Demo</h2>
            <p className="text-gray-600 ml-1 p-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-clock" viewBox="0 0 17 17">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              45 min
            </p>
            <p className="text-gray-500 pt-20 text-base">
              Book a meeting with a product expert. We've helped hundreds of companies overcome product management challenges.
            </p>
            <a className="cookie text-xs" href="124">
              Cookie Setting
            </a>
          </div>
         
          <div className="colo2 lg:w-1/2">
            {!showSecondPopup ? (
              <div>
                <h1 className="text-gray-950 font-semibold text-lg">Select a Date &amp; Time</h1>
                <div className="flex">
                  <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} onDateClick={handleDateClick} />
                </div>
                  {selectedDate && (
                    <div className="time-slots-wrapper overflow-auto">
                      <TimeSlots 
                        onNextClick={handleNextClick} 
                        selectedDate={selectedDate}
                        onTimeSlotClick={handleTimeSlotClick}
                        selectedTimeSlot={selectedTimeSlot}
                      />
                  </div>
                )}
              </div>
            ) : (
              <div className="new-popup">
                <FormSection />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingPopup;
