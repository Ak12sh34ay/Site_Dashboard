import React, { useState } from "react";

const WeeklyWorkUpdate = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState("weeklyUpdates");

  const projects = [
    {
      name: "Residential Building",
      updates: [
        {
          week: "Week 1",
          progress: "Foundation work completed",
          remark: "Completed",
        },
        { week: "Week 2", progress: "Pillars installed", remark: "Pending" },
      ],
    },
    {
      name: "Office Interior",
      updates: [
        {
          week: "Week 1",
          progress: "Wall painting started",
          remark: "Completed",
        },
        { week: "Week 2", progress: "Ceiling work ongoing", remark: "Pending" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Weekly Work Updates
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-lg mb-4">
          <h3
            className="text-lg font-semibold cursor-pointer"
            onClick={() =>
              setExpandedProject(expandedProject === index ? null : index)
            }
          >
            {project.name}
          </h3>
          {expandedProject === index && (
            <div className="mt-4">
              <div className="flex gap-4 border-b pb-2">
                <button
                  className={`px-4 py-2 rounded ${
                    selectedTab === "weeklyUpdates"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedTab("weeklyUpdates")}
                >
                  Weekly Updates
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    selectedTab === "pendingWorks"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedTab("pendingWorks")}
                >
                  Pending Works
                </button>
              </div>

              {selectedTab === "weeklyUpdates" && (
                <div className="mt-4">
                  {project.updates.map((update, i) => (
                    <div
                      key={i}
                      className={`border-l-4 p-3 rounded-lg mb-2 flex justify-between items-center ${
                        update.remark === "Completed"
                          ? "border-green-500"
                          : "border-orange-500"
                      }`}
                    >
                      <div>
                        <h4 className="font-semibold">{update.week}</h4>
                        <p>{update.progress}</p>
                        <p>
                          <strong>Remark:</strong> {update.remark}
                        </p>
                      </div>
                      <a
                        href="/view_weekly_work"
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        View Details
                      </a>
                    </div>
                  ))}
                  <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:bg-green-600">
                    Add New Week Task
                  </button>
                </div>
              )}

              {selectedTab === "pendingWorks" && (
                <div className="mt-4">
                  <p className="text-gray-500">
                    Pending works section coming soon...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeeklyWorkUpdate;
