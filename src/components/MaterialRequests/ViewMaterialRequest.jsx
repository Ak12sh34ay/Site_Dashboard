import React from "react";
import { useState } from "react";
import UpdateMaterialRequest from "./UpdateMaterialRequest";

const ViewMaterialRequest = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      materialName: "Cement",
      quantity: "50",
      priority: "Urgent",
      reason: "Foundation work",
    },
    {
      id: 2,
      materialName: "Bricks",
      quantity: "200",
      priority: "Normal",
      reason: "Wall construction",
    },
  ]);

  const [editingRequest, setEditingRequest] = useState(null);

  const handleUpdateClick = (request) => {
    setEditingRequest(request);
  };

  const handleUpdate = (updatedRequest) => {
    setRequests(
      requests.map((req) =>
        req.id === updatedRequest.id ? updatedRequest : req
      )
    );
    setEditingRequest(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this request?"
    );
    if (confirmDelete) {
      setRequests(requests.filter((req) => req.id !== id));
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📌 Requested Materials
        </h2>

        {editingRequest ? (
          <UpdateMaterialRequest
            requestData={editingRequest}
            onUpdate={handleUpdate}
            onCancel={() => setEditingRequest(null)}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Material Name</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">Priority</th>
                  <th className="border border-gray-300 p-2">Reason</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id} className="text-center">
                    <td className="border border-gray-300 p-2">
                      {req.materialName}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {req.quantity}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {req.priority}
                    </td>
                    <td className="border border-gray-300 p-2">{req.reason}</td>
                    <td className="border border-gray-300 p-2 space-x-2">
                      <button
                        onClick={() => handleUpdateClick(req)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        ✏️ Update
                      </button>
                      <button
                        onClick={() => handleDelete(req.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        ❌ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMaterialRequest;
