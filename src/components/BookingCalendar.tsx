import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/BookingCalendar.css';

interface BookingCalendarProps {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onDateSelect, onTimeSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const startDay = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const month = (currentMonth + 1).toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    const dateStr = `${currentYear}-${month}-${dayStr}`;
    setSelectedDate(dateStr);
    onDateSelect(dateStr);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  const isPastDay = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isWeekend = (day: number) => {
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const formatSelectedDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-PH', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="booking-calendar-wrapper">
      {/* Single Calendar */}
      <div className="calendar-card">
        <div className="calendar-nav">
          <button className="cal-nav-btn" onClick={handlePrevMonth} type="button">
            <ChevronLeft size={20} />
          </button>
          <h4 className="calendar-month-title">{MONTH_NAMES[currentMonth]} {currentYear}</h4>
          <button className="cal-nav-btn" onClick={handleNextMonth} type="button">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="calendar-grid">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
            <div key={d} className="day-name">{d}</div>
          ))}

          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const month = (currentMonth + 1).toString().padStart(2, '0');
            const dayStr = day.toString().padStart(2, '0');
            const dateStr = `${currentYear}-${month}-${dayStr}`;
            const isSelected = selectedDate === dateStr;
            const disabled = isPastDay(day) || isWeekend(day);

            return (
              <button
                key={day}
                type="button"
                className={`calendar-day ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : 'available'}`}
                disabled={disabled}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="time-slots-section">
          <h4>Available Times</h4>
          <p className="selected-date-text">{formatSelectedDate(selectedDate)}</p>
          <div className="time-slots-grid">
            {timeSlots.map(time => (
              <button
                key={time}
                type="button"
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
