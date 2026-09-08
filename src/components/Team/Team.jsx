import React, { useState } from "react";
import "./Team.css";
import { teamMembers } from "../../TeamData";

const Team = () => {
  const [activeTab, setActiveTab] = useState("4th");

  const showYear = (year) => {
    setActiveTab(year);
  };

  const renderTeamMember = (member) => (
    <div key={member.id} className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} />

        <div className="member-social">
          <a
            href={member.social.linkedin}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href={`mailto:${member.social.email}`}
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>

          <a
            href={member.social.insta}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="member-info">
        <h3 className="membername">{member.name}</h3>
        <span className="member-role">{member.role}</span>
      </div>
    </div>
  );

  return (
    <section className="team" id="team">
      <div className="container">

        <h2>Our Amazing Team</h2>

        {/* Year Tabs */}
        <div className="year-tabs">

          <button
            className={`tab-button ${
              activeTab === "4th" ? "active" : ""
            }`}
            onClick={() => showYear("4th")}
          >
            4th Year
          </button>

          <button
            className={`tab-button ${
              activeTab === "3rd" ? "active" : ""
            }`}
            onClick={() => showYear("3rd")}
          >
            3rd Year
          </button>

          <button
            className={`tab-button ${
              activeTab === "2nd" ? "active" : ""
            }`}
            onClick={() => showYear("2nd")}
          >
            2nd Year
          </button>

          <button
            className={`tab-button ${
              activeTab === "alumni2026" ||
              activeTab === "alumni2025"
                ? "active"
                : ""
            }`}
            onClick={() => showYear("alumni2026")}
          >
            Alumni
          </button>

        </div>

        {/* ============================= */}
        {/* 4th YEAR */}
        {/* ============================= */}

        {activeTab === "4th" && (
          <div className="tab-content active">

            <h3 className="batch-heading">
              4th Year — Batch 2027
            </h3>

            <div className="team-grid">
              {teamMembers["4th"]?.map(renderTeamMember)}
            </div>

          </div>
        )}

        {/* ============================= */}
        {/* 3rd YEAR */}
        {/* ============================= */}

        {activeTab === "3rd" && (
          <div className="tab-content active">

            <h3 className="batch-heading">
              3rd Year — Batch 2028
            </h3>

            <div className="team-grid">
              {teamMembers["3rd"]?.map(renderTeamMember)}
            </div>

          </div>
        )}

        {/* ============================= */}
        {/* 2nd YEAR */}
        {/* ============================= */}

        {activeTab === "2nd" && (
          <div className="tab-content active">

            <h3 className="batch-heading">
              2nd Year — Batch 2029
            </h3>

            <div className="team-grid">
              {teamMembers["2nd"]?.map(renderTeamMember)}
            </div>

          </div>
        )}

        {/* ============================= */}
        {/* ALUMNI 2026 */}
        {/* ============================= */}

        {activeTab === "alumni2026" && (
          <div className="tab-content active">

            <h3 className="batch-heading alumni-heading">
              Alumni — Batch 2026
            </h3>

            <div className="team-grid">
              {teamMembers["alumni2026"]?.map(renderTeamMember)}
            </div>

            <h3 className="batch-heading">
              Alumni — Batch 2025
            </h3>

            <div className="team-grid">
              {teamMembers["alumni2025"]?.map(renderTeamMember)}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Team;