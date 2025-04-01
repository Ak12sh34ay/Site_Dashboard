import React, { useState } from "react";

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [reason, setReason] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");

  // Add leave record
  const addLeave = () => {
    if (employeeName && leaveDate && reason) {
      setLeaves([...leaves, { name: employeeName, date: leaveDate, reason }]);
      setEmployeeName("");
      setLeaveDate("");
      setReason("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Employee Leave Management
      </h2>

      {/* Leave Form */}
      <div className="border p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Add Employee Leave</h3>
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />
        <input
          type="date"
          value={leaveDate}
          onChange={(e) => setLeaveDate(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />
        <button
          onClick={addLeave}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Add Leave
        </button>
      </div>

      {/* View Absentees */}
      {/* <div className="border p-4 rounded-lg mt-4">
        <h3 className="font-semibold mb-2">View Absentees</h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded-lg w-full mb-2"
        />
        <ul className="mt-3 bg-gray-100 p-3 rounded-lg">
          {leaves.filter((leave) => leave.date === selectedDate).length > 0 ? (
            leaves
              .filter((leave) => leave.date === selectedDate)
              .map((leave, index) => (
                <li key={index} className="py-1">
                  {leave.name} - {leave.reason}
                </li>
              ))
          ) : (
            <li className="text-gray-500">No absentees for this date</li>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default LeaveManagement;
