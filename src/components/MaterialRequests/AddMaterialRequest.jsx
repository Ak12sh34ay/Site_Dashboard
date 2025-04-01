import React from "react";
import { useState } from "react";

const AddMaterialRequest = ({ onAddRequest }) => {
  const [request, setRequest] = useState({
    materialName: "",
    quantity: "",
    priority: "Normal",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRequest(request); // Pass request to parent component
    setRequest({
      materialName: "",
      quantity: "",
      priority: "Normal",
      reason: "",
    });
    alert("Material Request Submitted Successfully!");
  };

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📋 Material Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Material Name
            </label>
            <input
              type="text"
              name="materialName"
              value={request.materialName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={request.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Priority</label>
            <select
              name="priority"
              value={request.priority}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
            >
              <option value="Urgent">🚨 Urgent</option>
              <option value="Normal">📌 Normal</option>
              <option value="Low">📉 Low</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Reason for Request
            </label>
            <textarea
              name="reason"
              value={request.reason}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
          >
            ➕ Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMaterialRequest;
