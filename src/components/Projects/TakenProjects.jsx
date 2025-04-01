import React from "react";
import { useNavigate } from "react-router";

const TakenProjects = () => {
  const projects = [
    {
      name: "Residential Building",
      type: "Construction",
      constructionType: "New Home Building",
      floors: 3,
      location: "Kannur",
      startDate: "2025-04-01",
      endDate: "2025-10-01",
      products: [
        { name: "Cement", quantity: 50, measure: "bags" },
        { name: "Bricks", quantity: 5000, measure: "pieces" },
      ],
      labours: 15,
    },
    {
      name: "Office Interior",
      type: "Interior",
      constructionType: "Renovation",
      floors: 2,
      location: "Kozhikode",
      startDate: "2025-03-15",
      endDate: "2025-08-30",
      products: [
        { name: "Wood Panels", quantity: 20, measure: "sheets" },
        { name: "Paint", quantity: 10, measure: "liters" },
      ],
      labours: 8,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Taken Projects</h2>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects taken yet.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>
              <strong>Project Type:</strong> {project.type}
            </p>
            <p>
              <strong>Type of Construction:</strong> {project.constructionType}
            </p>
            <p>
              <strong>Number of Floors:</strong> {project.floors}
            </p>
            <p>
              <strong>Location:</strong> {project.location}
            </p>

            <div className="mt-4 border-t pt-2">
              <h4 className="text-md font-semibold">Requirements</h4>
              <p>
                <strong>Start Date:</strong> {project.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {project.endDate}
              </p>
              <p>
                <strong>Products Needed:</strong>
              </p>
              <ul className="list-disc list-inside">
                {project.products.map((prod, i) => (
                  <li key={i}>
                    {prod.name} - {prod.quantity} {prod.measure}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Labours Needed:</strong> {project.labours}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Material request
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Finish Project
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => navigate("/weekwork")}
              >
                View Weekly Status
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TakenProjects;
