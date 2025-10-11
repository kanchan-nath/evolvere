import React, { useState } from "react";
import "./Team.css";
import { teamMembers } from "../../TeamData";

const Team = () => {
  const [activeTab, setActiveTab] = useState("3rd");

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
          <a href={`mailto:${member.social.email}`} title="Email">
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
            className={`tab-button ${activeTab === "5th" ? "active" : ""}`}
            onClick={() => showYear("5th")}
          >
            Alumni
          </button>
          <button
            className={`tab-button ${activeTab === "4th" ? "active" : ""}`}
            onClick={() => showYear("4th")}
          >
            4th Year
          </button>
          <button
            className={`tab-button ${activeTab === "3rd" ? "active" : ""}`}
            onClick={() => showYear("3rd")}
          >
            3rd Year
          </button>
          <button
            className={`tab-button ${activeTab === "2nd" ? "active" : ""}`}
            onClick={() => showYear("2nd")}
          >
            2nd Year
          </button>
        </div>

        {/* Dynamic Team Members */}
        <div className="tab-content active">
          <div className="team-grid">
            {teamMembers[activeTab]?.map(renderTeamMember)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
