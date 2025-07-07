// components/DateTimePicker.jsx
import React, { useState } from 'react';
import '../../styles/DateTimePicker.css';

export default function DateTimePicker({ selectedDateTime, onSave, onClose }) {
    const [date, setDate] = useState(selectedDateTime);
    const [time, setTime] = useState(""); // e.g., "14:30"



    const handleSave = () => {
        if (!date || !time) return alert("Select both date and time");

        const finalDateTime = new Date(`${date}T${time}`); // e.g., 2025-07-08T14:30

        if (isNaN(finalDateTime.getTime())) {
            alert("Invalid date or time");
            return;
        }

        console.log("Final DateTime:", finalDateTime);
        onSave(finalDateTime); // If you're passing it up
    };

    return (
        <div className="datetime-picker">
            <div className="calendar-panel">
                <label className="label">Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>

            <div className="time-panel">
                <label className="label">Time</label>
                <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            </div>

            <button className="save-btn" onClick={handleSave}>Save</button>

        </div>
    );
}
