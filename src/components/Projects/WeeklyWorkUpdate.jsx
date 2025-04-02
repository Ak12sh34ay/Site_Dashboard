import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const WeeklyWorkUpdate = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState("weeklyUpdates");
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentUpdate, setCurrentUpdate] = useState(null);
  const [projects, setProjects] = useState([
    {
      name: "Residential Building",
      updates: [
        {
          week: "Week 1",
          progress: "Foundation work completed",
          remark: "Pending",
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
          remark: "Pending",
        },
        { week: "Week 2", progress: "Ceiling work ongoing", remark: "Pending" },
      ],
    },
  ]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects) setProjects(storedProjects);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const updateRemark = () => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[currentProject].updates[currentUpdate].remark =
        "Completed";
      return updatedProjects;
    });
    setShowModal(false);
  };

  const navigate = useNavigate();

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
                      {update.remark === "Completed" ? (
                        <button
                          className="text-blue-500 underline hover:text-blue-700"
                          onClick={() => navigate("/view_weekly_work")}
                        >
                          View Details
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setShowModal(true);
                            setCurrentProject(index);
                            setCurrentUpdate(i);
                          }}
                          className="text-red-500 underline hover:text-red-700"
                        >
                          Upload Details
                        </button>
                      )}
                    </div>
                  ))}
                  <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:bg-green-600">
                    Add New Week Task
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg w-166 h-80">
            <h2 className="text-xl font-bold mb-4">
              Upload Weekly Work Details
            </h2>
            <input type="file" className="w-full border p-2 rounded mb-2" />
            <input type="file" className="w-full border p-2 rounded mb-2" />
            <textarea
              placeholder="Description"
              className="w-full border p-2 rounded mb-2"
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateRemark}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyWorkUpdate;


