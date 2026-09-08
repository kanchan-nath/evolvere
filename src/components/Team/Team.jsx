import React, { useState, useEffect, useRef } from "react";
import "./Team.css";
import { loadTeamData } from "../../TeamData";
import { FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";

const Team = () => {
  const [activeTab, setActiveTab] = useState("4th");
  const [members, setMembers] = useState([]);
  const [alumni2026, setAlumni2026] = useState([]);
  const [alumni2025, setAlumni2025] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Caches already-fetched batches so switching tabs back and forth
  // doesn't refetch.
  const cache = useRef({});

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    const load = async () => {
      if (activeTab === "alumni2026") {
        if (!cache.current.alumni2026) {
          cache.current.alumni2026 = await loadTeamData("alumni2026");
        }
        if (!cache.current.alumni2025) {
          cache.current.alumni2025 = await loadTeamData("alumni2025");
        }
        if (!cancelled) {
          setAlumni2026(cache.current.alumni2026);
          setAlumni2025(cache.current.alumni2025);
        }
      } else {
        if (!cache.current[activeTab]) {
          cache.current[activeTab] = await loadTeamData(activeTab);
        }
        if (!cancelled) setMembers(cache.current[activeTab]);
      }
      if (!cancelled) setIsLoading(false);
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [activeTab]);

  const showYear = (year) => setActiveTab(year);

  const renderTeamMember = (member) => (
    <div key={member.id} className="team-member">
      <div className="member-image">
        <img src={member.image} alt={member.name} loading="lazy" decoding="async" />

        <div className="member-social">
          <a
            href={member.social.linkedin}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a href={`mailto:${member.social.email}`} title="Email">
            <FaEnvelope />
          </a>

          <a
            href={member.social.insta}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
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

          <button
            className={`tab-button ${activeTab === "alumni2026" || activeTab === "alumni2025"
                ? "active"
                : ""
              }`}
            onClick={() => showYear("alumni2026")}
          >
            Alumni
          </button>
        </div>

        {isLoading && (
          <div className="tab-content active">
            <p className="team-loading">Loading...</p>
          </div>
        )}

        {/* ============================= */}
        {/* 4th YEAR */}
        {/* ============================= */}

        {!isLoading && activeTab === "4th" && (
          <div className="tab-content active">
            <h3 className="batch-heading">4th Year — Batch 2027</h3>
            <div className="team-grid">{members.map(renderTeamMember)}</div>
          </div>
        )}

        {/* ============================= */}
        {/* 3rd YEAR */}
        {/* ============================= */}

        {!isLoading && activeTab === "3rd" && (
          <div className="tab-content active">
            <h3 className="batch-heading">3rd Year — Batch 2028</h3>
            <div className="team-grid">{members.map(renderTeamMember)}</div>
          </div>
        )}

        {/* ============================= */}
        {/* 2nd YEAR */}
        {/* ============================= */}

        {!isLoading && activeTab === "2nd" && (
          <div className="tab-content active">
            <h3 className="batch-heading">2nd Year — Batch 2029</h3>
            <div className="team-grid">{members.map(renderTeamMember)}</div>
          </div>
        )}

        {/* ============================= */}
        {/* ALUMNI 2026 */}
        {/* ============================= */}

        {!isLoading && activeTab === "alumni2026" && (
          <div className="tab-content active">
            <h3 className="batch-heading alumni-heading">
              Alumni — Batch 2026
            </h3>
            <div className="team-grid">{alumni2026.map(renderTeamMember)}</div>

            <h3 className="batch-heading">Alumni — Batch 2025</h3>
            <div className="team-grid">{alumni2025.map(renderTeamMember)}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;