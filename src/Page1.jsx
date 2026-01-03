import React, { useState } from "react";
import "./Page1.css";
import { useNavigate } from "react-router-dom";

export default function App() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("diagnosis");
  const [diagnosisList, setDiagnosisList] = useState([
    {
      name: "Anxiety Disorder",
      desc: "Added notes and description to the following description box nd filled"
    }
  ]);
  
  const [diagnosisType, setDiagnosisType] = useState("Anxiety Disorder");
  const [diagnosisDesc, setDiagnosisDesc] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddDiagnosis = () => {
    if (diagnosisDesc.trim()) {
      if (editingIndex !== null) {
        const updated = [...diagnosisList];
        updated[editingIndex] = { name: diagnosisType, desc: diagnosisDesc };
        setDiagnosisList(updated);
        setEditingIndex(null);
      } else {
        setDiagnosisList([...diagnosisList, { name: diagnosisType, desc: diagnosisDesc }]);
      }
      setDiagnosisDesc("");
    }
  };

  const handleEdit = (index) => {
    setDiagnosisType(diagnosisList[index].name);
    setDiagnosisDesc(diagnosisList[index].desc);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setDiagnosisList(diagnosisList.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    alert("Patient data saved successfully!");
  };

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel? Unsaved changes will be lost.")) {
      setDiagnosisDesc("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-section">
          <div className="logo">+</div>
          <div className="logo-text">Cliniva</div>
        </div>

        <div className="doctor-profile">
          <div className="doctor-card">
            <div className="doctor-avatar"></div>
            <div>
              <div className="doctor-name">Ashton Cox</div>
              <div className="doctor-role">DOCTOR</div>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-item"><button onClick={()=>navigate('/page2')}>Appointments</button></div>
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="menu-icon">
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </div>

          <div className="header-right">
            <div className="icon-btn">
              🔔
              <div className="notification-badge">3</div>
            </div>
            <span>🇺🇸</span>
            <div className="user-section">
              <span className="user-name">Ella Jones</span>
              <div className="user-avatar"></div>
            </div>
          </div>
        </div>

        <div className="content-area">
          <button className="back-button">← Back to Patients</button>

          <div className="page-header">
            <div>
              <div className="page-title">Registered OP</div>
              <div className="page-subtitle">Consult OP patients</div>
            </div>

            <div className="type-badges">
              <span className="badge badge-op">OP</span>
              <span className="badge badge-ip">IP</span>
            </div>
          </div>

          <div className="grid-container">
            <div className="card">
              <div className="card-title">OP-2024-0156</div>

              <div className="info-grid">
                <div className="info-item">
                  <label className="label">Name</label>
                  <div className="value">Sarah Johnson</div>
                </div>

                <div className="info-item">
                  <label className="label">Patient ID</label>
                  <div className="value patient-id">PAT-2024-001</div>
                </div>

                <div className="info-item">
                  <label className="label">Gender</label>
                  <span className="info-badge">Female</span>
                </div>

                <div className="info-item">
                  <label className="label">Age</label>
                  <div className="value">34 years</div>
                </div>

                <div className="info-item">
                  <label className="label">Blood Group</label>
                  <span className="info-badge">O+</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">VITALS</div>

              <div className="vitals-grid">
                <div className="vital-row">
                  <div className="vital-item">
                    <span className="vital-icon">🌡️</span>
                    <div>
                      <div className="vital-label">Temperature</div>
                      <div className="vital-value">101.2°F</div>
                      <div className="fever-indicator">Fever</div>
                    </div>
                  </div>
                  <div>
                    <div className="vital-label">Pulse</div>
                    <div className="vital-value">88 bpm</div>
                  </div>
                </div>

                <div className="vital-divider"></div>

                <div className="vital-row">
                  <div>
                    <div className="vital-label">Blood Pressure</div>
                    <div className="vital-value">125/82</div>
                  </div>
                  <div>
                    <div className="vital-label">Height</div>
                    <div className="vital-value">165 cm</div>
                  </div>
                </div>

                <div className="vital-divider"></div>

                <div>
                  <div className="vital-label">Weight</div>
                  <div className="vital-value">70 kg</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs-container">
            <div className="tabs">
              {["diagnosis", "lab", "prescription", "reports", "services"].map(tab => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "diagnosis" && (
              <div className="tab-content">
                <div className="tab-grid">
                  <div>
                    <h3 className="section-title">Diagnosis</h3>

                    <div className="form-group">
                      <label className="form-label">Diagnosis Type</label>
                      <select 
                        className="form-select"
                        value={diagnosisType}
                        onChange={(e) => setDiagnosisType(e.target.value)}
                      >
                        <option>Anxiety Disorder</option>
                        <option>Depression</option>
                        <option>Hypertension</option>
                        <option>Diabetes</option>
                        <option>Migraine</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-textarea"
                        value={diagnosisDesc}
                        onChange={(e) => setDiagnosisDesc(e.target.value)}
                        placeholder="Enter diagnosis description..."
                      />
                    </div>

                    <button 
                      className="btn btn-add"
                      onClick={handleAddDiagnosis}
                    >
                      {editingIndex !== null ? "Update" : "+ Add"}
                    </button>

                    <div className="ordered-list">
                      <h3 className="section-title">Ordered List</h3>

                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Test Name</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {diagnosisList.map((item, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.desc}</td>
                              <td>
                                <div className="action-buttons">
                                  <button 
                                    className="icon-button"
                                    onClick={() => handleEdit(i)}
                                  >
                                    ✏️
                                  </button>
                                  <button 
                                    className="icon-button"
                                    onClick={() => handleDelete(i)}
                                  >
                                    🗑️
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <div className="previous-visits-header">
                      <h3 className="section-title">Previous Visits</h3>
                      <span className="view-all">View all</span>
                    </div>

                    <div className="visits-list">
                      <div className="visit-card">
                        <div className="visit-info">
                          <div className="visit-date">
                            <div className="visit-day">08</div>
                            <div className="visit-month">Jan</div>
                            <div className="visit-year">2024</div>
                          </div>
                          <div className="visit-details">
                            <span className="visit-type">OP</span>
                            <span className="visit-count">2 visits</span>
                          </div>
                        </div>
                        <button className="view-btn">👁 View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "diagnosis" && (
              <div className="tab-content">
                <p className="empty-tab">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section - Coming soon
                </p>
              </div>
            )}
          </div>

          <div className="footer-buttons">
            <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-save" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}