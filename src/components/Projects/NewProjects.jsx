import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      onClick={() => navigate("/project_requirement")}
    >
      Take Project
    </button>
  );
};

const NewProjects = () => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Project Type</th>
              <th className="border border-gray-300 px-4 py-2">
                Type of Construction
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Number of Floors
              </th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Construction</td>
              <td className="border border-gray-300 px-4 py-2">
                New home building
              </td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Kannur</td>
              <td className="border border-gray-300 px-4 py-2">
                <Button />
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Interior</td>
              <td className="border border-gray-300 px-4 py-2">Renovation</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">Payyanur</td>
              <td className="border border-gray-300 px-4 py-2">
                <Button />
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">Construction</td>
              <td className="border border-gray-300 px-4 py-2">Renovation</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Kozhikode</td>
              <td className="border border-gray-300 px-4 py-2">
                <Button />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewProjects;
