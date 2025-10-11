import "./About.css";
import evolvereimage from "../../images/evolvereimage.avif";
// import video from "../../images/evolvere.mp4"

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2>About Our Society</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Official Biotech Society of NIT DGP</h3>
              <p>
                Evolvere, the Biotechnology club of NIT Durgapur, was founded in
                2018 to foster innovation and bridge academia with the biotech
                industry. It provides a platform for students to explore ideas,
                build networks, and engage with the latest developments in the
                field.
              </p>
              {/* <p>The club hosts counseling sessions, workshops, magazine publications, and scientific photography contests—empowering students to align creativity with industry needs and societal impact.</p> */}

              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">70+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Events </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Alumni Mentors</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={evolvereimage} alt="Students working in lab" />
            </div>
            {/* <div className="about-video">
  <video autoPlay loop muted playsInline>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}
          </div>
        </div>
      </section>

      <section className="services" id="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Society Events</h3>
              <p>
                Evolvere conducts cultural and departmental events such as
                SnapIt, Teachers’ Day, and farewell celebrations, fostering
                inclusivity, collaboration, and strong inter-batch connections
                within the department.
              </p>
            </div>
            {/* <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <h3>Workshops & Seminars</h3>
                    <p>Evolvere hosts academic and industry events, including webinars and career sessions, to keep students updated and guide them through diverse Biotech-related career paths.</p>
                </div> */}
            {/* <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <h3>Industry Connections</h3>
                    <p>Connect with biotech companies through our networking events, internships, and site visits.</p>
                </div> */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Outreach</h3>
              <p>
                Evolvere organizes cultural events like SnapIt and departmental
                functions including Teachers' Day and farewells, fostering
                inclusivity and inter-batch bonding in the department.
              </p>
            </div>
            {/* <div className="service-card">
                    <div className="service-icon">
                        <i className="fas fa-trophy"></i>
                    </div>
                    <h3>Competitions</h3>
                    <p>Compete in national and international biotech competitions like iGEM and BioMOD.</p>
                </div> */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Academic Support</h3>
              <p>
                Peer tutoring, study groups, and guidance for biotech-related
                courses and career paths.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
