import React from "react";
import worker1 from "../../images/logo/worker1.jpg";
import worker2 from "../../images/logo/worker2.jpeg";
import review1 from "../../images/logo/review1.jpeg";
import review2 from "../../images/logo/review2.jpeg";

const ViewWeeklyWork = () => {
  const projects = [
    {
      name: "Residential Building",
      tasks: [
        {
          week: "Week 1",
          employeePhotos: [worker1, worker2],
          sitePhotos: [review1, review2],
        },
        {
          week: "Week 2",
          employeePhotos: [worker1, review1],
          sitePhotos: [review2, worker2],
        },
      ],
    },
    {
      name: "Office Interior",
      tasks: [
        {
          week: "Week 1",
          employeePhotos: ["/images/emp4.jpg"],
          sitePhotos: ["/images/site5.jpg"],
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        View Work Progress
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          {project.tasks.map((task, i) => (
            <div key={i} className="mt-4 border-t pt-3">
              <h4 className="font-semibold">{task.week}</h4>
              <div className="mt-2">
                <h5 className="text-md font-semibold">Employee Photos</h5>
                <div className="flex gap-2 mt-1">
                  {task.employeePhotos.map((photo, j) => (
                    <img
                      key={j}
                      src={photo}
                      alt="Employee Work"
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <h5 className="text-md font-semibold">Site Photos</h5>
                <div className="flex gap-2 mt-1">
                  {task.sitePhotos.map((photo, k) => (
                    <img
                      key={k}
                      src={photo}
                      alt="Site Work"
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewWeeklyWork;
