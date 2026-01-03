import React, { useState } from "react";
import "./Page2.css";
import { useNavigate } from "react-router-dom";

const appointments = [];

for (let i = 1; i <= 35; i++) {
  appointments.push({
    name: "Patient " + i,
    avatar: "https://i.pravatar.cc/40?img=" + i,
    date: "10/02/2024",
    time: "09:00",
    email: "patient" + i + "@ex.com",
    mobile: "9876543210",
    gender: i % 2 === 0 ? "male" : "female",
    status:
      i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Upcoming" : "Canceled",
    address: "Chennai",
    disease: "Fever",
  });
}

const Page2 = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter((appointment) => {
    const search = searchTerm.toLowerCase();
    return (
      appointment.name.toLowerCase().includes(search) ||
      appointment.email.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredAppointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">Cliniva</div>

        <div className="doctor">
          <img src="https://i.pravatar.cc/100?img=12" alt="" />
          <h4>Ashton Cox</h4>
          <span>DOCTOR</span>
        </div>

        <div className="menu-title"><button onClick={()=>{navigate('/')}}>MAIN</button></div>
        <button className="menu active">Appointments</button>
      </aside>

      <div className="right-section">
        <header className="topbar">
          <div>☰</div>
          <div className="top-right">
            🔔 <span>Ella Jones</span>
          </div>
        </header>

        <div className="content">
          <div className="breadcrumb">Appointments</div>

          <div className="card">
            <div className="card-header">
              <h3>Appointments</h3>
              <input 
                placeholder="Search by name or email" 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Address</th>
                  <th>Disease</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index}>
                    <td className="name">
                      <img src={item.avatar} alt="" />
                      {item.name}
                    </td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <span className={`gender ${item.gender}`}>
                        {item.gender}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`status ${item.status.toLowerCase()}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.address}</td>
                    <td>{item.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>

              {Array(totalPages)
                .fill(0)
                .map((value, pageIndex) => (
                  <button
                    key={pageIndex}
                    className={
                      currentPage === pageIndex + 1 ? "active-page" : ""
                    }
                    onClick={() => setCurrentPage(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </button>
                ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;