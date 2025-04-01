import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn.jsx";
import SignUp from "./pages/AuthPages/SignUp.jsx";
import NotFound from "./pages/OtherPage/NotFound.jsx";
import UserProfiles from "./pages/UserProfiles.jsx";
import Videos from "./pages/UiElements/Videos.jsx";
import Images from "./pages/UiElements/Images.jsx";
import Alerts from "./pages/UiElements/Alerts.jsx";
import Badges from "./pages/UiElements/Badges.jsx";
import Avatars from "./pages/UiElements/Avatars.jsx";
import Buttons from "./pages/UiElements/Buttons.jsx";
import LineChart from "./pages/Charts/LineChart.jsx";
import BarChart from "./pages/Charts/BarChart.jsx";
import Calendar from "./pages/Calendar.jsx";
import BasicTables from "./pages/Tables/BasicTables.jsx";
import FormElements from "./pages/Forms/FormElements.jsx";
import Blank from "./pages/Blank.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import { ScrollToTop } from "./components/common/ScrollToTop.jsx";
import Home from "./pages/Dashboard/Home.jsx";

//our components///
// import { useState } from "react";
import NewProjects from "./components/Projects/NewProjects.jsx";
import TakenProjects from "./components/Projects/TakenProjects.jsx";
import ProjectRequirment from "./components/Projects/ProjectRequirment.jsx";
import WeeklyWorkUpdate from "./components/Projects/WeeklyWorkUpdate.jsx";
import ViewWeeklyWork from "./components/Projects/ViewWeeklyWork.jsx";
//Examples
// import FirstComponent from "./components/Example/FirstComponent.jsx";
// import SecondComponent from "./components/Example/SecondComponent.jsx";
// End of examples
import LeaveManagement from "./components/Leaves/LeaveManagement.jsx";
import UploadPhoto from "./components/WorkPhotos/upload_photos.jsx";
import Workupdate from "./components/WorkUpdate/Workupdate.jsx";
import Addworkupdate from "./components/WorkUpdate/Addworkupdate.jsx";
import IssueApproval from "./components/IssueApproval/IssueApproval.jsx";
import AddMaterialRequest from "./components/MaterialRequests/AddMaterialRequest.jsx";
import ViewMaterialRequest from "./components/MaterialRequests/ViewMaterialRequest.jsx";

// import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* {Projects} */}
            <Route path="/new_projects" element={<NewProjects />} />
            <Route path="/taken_projects" element={<TakenProjects />} />
            <Route
              path="/project_requirement"
              element={<ProjectRequirment />}
            />
            <Route path="/weekwork" element={<WeeklyWorkUpdate />} />
            <Route path="/view_weekly_work" element={<ViewWeeklyWork />} />

            {/* {Projects} */}
            {/* <Route path="/first_cmpt" element={<FirstComponent />} />
            <Route path="/second_cmpt" element={<SecondComponent />} />
            <Route
              path="/project_requirement/:projectId"
              element={<ProjectRequirment />}
            /> */}

            {/* {Work-Updates} */}
            <Route path="/workupdate" element={<Workupdate />} />
            <Route path="/addworkupdate" element={<Addworkupdate />} />

            {/* {MaterialRequests} */}
            <Route path="/materialrequest" element={<AddMaterialRequest />} />
            <Route
              path="/view_material_request"
              element={<ViewMaterialRequest />}
            />

            {/* {Issue Approval} */}
            <Route path="/issueapproval" element={<IssueApproval />} />

            {/* Leave Management */}
            <Route path="/leave_manage" element={<LeaveManagement />} />

            {/* {workphotos} */}
            <Route path="/work_photos" element={<UploadPhoto />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
