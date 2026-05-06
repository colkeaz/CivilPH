import React, { useState } from 'react';
import '../styles/BookingCalendar.css';

interface BookingCalendarProps {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onDateSelect, onTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateClick = (day: number) => {
    const dateStr = `2026-05-${day.toString().padStart(2, '0')}`;
    setSelectedDate(dateStr);
    onDateSelect(dateStr);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  // Mock days for May 2026
  const daysInMonth = 31;
  const startDay = 5; // Friday

  return (
    <div className="booking-calendar-container">
      <div className="calendar-section">
        <div className="calendar-header">
          <button className="btn-icon">&lt;</button>
          <h4>May 2026</h4>
          <button className="btn-icon">&gt;</button>
        </div>
        
        <div className="calendar-grid">
          <div className="day-name">Su</div>
          <div className="day-name">Mo</div>
          <div className="day-name">Tu</div>
          <div className="day-name">We</div>
          <div className="day-name">Th</div>
          <div className="day-name">Fr</div>
          <div className="day-name">Sa</div>
          
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = `2026-05-${day.toString().padStart(2, '0')}`;
            const isSelected = selectedDate === dateStr;
            // Mock some disabled days (weekends)
            const isWeekend = (day + startDay - 1) % 7 === 0 || (day + startDay - 1) % 7 === 6;
            
            return (
              <button 
                key={day} 
                className={`calendar-day ${isSelected ? 'selected' : ''} ${isWeekend ? 'disabled' : 'available'}`}
                disabled={isWeekend}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="time-slots-section">
          <h4>Available Times</h4>
          <p className="selected-date-text">for {selectedDate}</p>
          <div className="time-slots-grid">
            {timeSlots.map(time => (
              <button 
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
