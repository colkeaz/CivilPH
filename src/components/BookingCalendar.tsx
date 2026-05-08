import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export default function BookingCalendar({ onDateSelect, onTimeSelect }: Props) {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };

  const isWeekend = (day: number) => {
    const d = new Date(year, month, day).getDay();
    return d === 0 || d === 6;
  };

  const selectDate = (day: number) => {
    const date = `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    setSelectedDate(date);
    setSelectedTime(null);
    onDateSelect(date);
  };

  return (
    <div className="flex gap-4 w-full max-w-4xl">

      {/* LEFT: Calendar */}
      <div className="w-[320px] bg-white rounded-xl shadow p-3">

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setMonth(m => m === 0 ? 11 : m - 1)}>
            <ChevronLeft size={18} />
          </button>

          <h2 className="text-sm font-semibold">
            {MONTHS[month]} {year}
          </h2>

          <button onClick={() => setMonth(m => m === 11 ? 0 : m + 1)}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-xs text-center mb-1 text-gray-500">
          {["S","M","T","W","T","F","S"].map(d => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-sm">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={i}></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const disabled = isPast(day) || isWeekend(day);
            const date = `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

            return (
              <button
                key={day}
                disabled={disabled}
                onClick={() => selectDate(day)}
                className={`
                  w-8 h-8 rounded-md text-xs
                  ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"}
                  ${selectedDate === date ? "bg-teal-600 text-white" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Time Slots */}
      <div className="flex-1 bg-white rounded-xl shadow p-4 h-fit sticky top-4">

        {!selectedDate ? (
          <p className="text-sm text-gray-500">
            Select a date first
          </p>
        ) : (
          <>
            <h3 className="text-sm font-semibold mb-1">Available Times</h3>
            <p className="text-xs text-gray-500 mb-3">
              {selectedDate}
            </p>

            <div className="flex flex-wrap gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    onTimeSelect(time);
                  }}
                  className={`
                    px-3 py-1 text-xs rounded-md
                    ${selectedTime === time
                      ? "bg-teal-600 text-white border-teal-600"
                      : "hover:bg-gray-100"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}