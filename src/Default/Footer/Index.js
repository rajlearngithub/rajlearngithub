import React, { useState } from "react";
import Dashboard from "../../main/Dashboard/Index";
import Manage from "../../main/Manage/Index";
import Curiculam from "../../main/Curiculam/Index";
import TimeTable from "../../main/TimeTable/Index";
import Student from "../../main/Student/Index";
export default function Footer() {
  const [tabs, setTabs] = useState("Footer");
  return (
    <>
      <footer className="bg-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className={tabs === "Dashboard" ? "d-block" : "d-none"}>
              <Dashboard onCallBack={(value) => setTabs(value)} />
            </div>

            <div className={tabs === "Manage" ? "d-block" : "d-none"}>
              <Manage onCallBack={(value) => setTabs(value)} />
            </div>

            <div className={tabs === "TimeTable" ? "d-block" : "d-none"}>
              <TimeTable onCallBack={(value) => setTabs(value)} />
            </div>

            <div className={tabs === "Student" ? "d-block" : "d-none"}>
              <Student onCallBack={(value) => setTabs(value)} />
            </div>

            <div className={tabs === "Curiculam" ? "d-block" : "d-none"}>
              <Curiculam onCallBack={(value) => setTabs(value)} />
            </div>

            <div className=" d-flex justify-content-center">
              <div className="d-flex justify-content-between align-items-center bottom-bar">
                <div className={tabs === "Dashboard" ? "bar-tab" : "none"}>
                  <div
                    className="text-center fs-6 fw-lighter text-uppercase bar-item"
                    onClick={() => setTabs("Dashboard")}
                  >
                    <i class="fa-solid fa-list-check"></i>
                    <p>DASHBOARD</p>
                  </div>
                </div>
                <div>
                  <div className={tabs === "Manage" ? "bar-tab" : "none"}>
                    <div
                      className="text-center fs-6 fw-lighter text-uppercase bar-item"
                      onClick={() => setTabs("Manage")}
                    >
                      <i class="fa-solid fa-list-check"></i>
                      <p>MANAGE</p>
                    </div>
                  </div>
                </div>
                <div className={tabs === "TimeTable" ? "bar-tab" : "none"}>
                  <div
                    className="text-center fs-6 fw-lighter text-uppercase bar-item"
                    onClick={() => setTabs("TimeTable")}
                  >
                    <i class="fa-solid fa-table-cells"></i>
                    <p>TIMETABLE</p>
                  </div>
                </div>
                <div>
                  <div className={tabs === "Student" ? "bar-tab" : "none"}>
                    <div
                      className="text-center fs-6 fw-lighter text-uppercase bar-item"
                      onClick={() => setTabs("Student")}
                    >
                      <i class="fa-solid fa-people-group"></i>
                      <p>students</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={tabs === "Curiculam" ? "bar-tab" : "none"}>
                    <div
                      className="text-center fs-6 fw-lighter text-uppercase bar-item"
                      onClick={() => setTabs("Curiculam")}
                    >
                      <i class="fa-solid fa-people-group"></i>
                      <p>CURICULAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
