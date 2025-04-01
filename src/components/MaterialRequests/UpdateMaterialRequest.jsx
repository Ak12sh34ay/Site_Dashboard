import React from "react";
import { useState, useEffect } from "react";

const UpdateMaterialRequest = ({ requestData, onUpdate, onCancel }) => {
  const [updatedRequest, setUpdatedRequest] = useState(requestData);

  useEffect(() => {
    setUpdatedRequest(requestData);
  }, [requestData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedRequest);
    alert("Material Request Updated Successfully!");
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ✏️ Update Material Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Material Name
            </label>
            <input
              type="text"
              name="materialName"
              value={updatedRequest.materialName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={updatedRequest.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Priority</label>
            <select
              name="priority"
              value={updatedRequest.priority}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              value={updatedRequest.reason}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full"
            >
              ✅ Save Changes
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition w-full"
            >
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMaterialRequest;
