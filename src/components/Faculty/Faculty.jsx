import "./Faculty.css";
import ssm1 from "../../images/ssm1.png";
import nm from "../../images/nmmam.jpg";

const Faculty = () => {
  return (
    <>
      <section className="faculty">
        <div className="container">
          <h2>Our Faculty Advisors</h2>
          <div className="faculty-grid">
            <div className="faculty-card">
              <div className="faculty-image">
                <img src={ssm1} alt="Faculty Advisor" loading="lazy" decoding="async" />
              </div>
              <div className="faculty-content">
                <h3 className="heading-fa">Dr. Sudit Sekhar Mukhopadhyay</h3>
                <span className="faculty-department">
                  Department of Bioengineering
                </span>
                <div className="faculty-expertise">
                  <p>Joined the Institute in 2010</p>
                </div>
                <a
                  href="https://nitdgp.ac.in/department/biotechnology/faculty-2/sudit-sekhar-mukhopadhyay"
                  className="btn btn-outline"
                  target="blank"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className="faculty-card">
              <div className="faculty-image">
                <img src={nm} alt="Faculty Advisor" loading="lazy" decoding="async" />
              </div>
              <div className="faculty-content">
                <h3 className="heading-fa">Dr. Nibedita Mahata</h3>
                <span className="faculty-department">
                  Department of BioTechnology
                </span>
                <div className="faculty-expertise">
                  <p>Joined the Institute in 2014</p>
                </div>
                <a
                  href="https://nitdgp.ac.in/department/biotechnology/faculty-2/nibedita-mahata"
                  className="btn btn-outline"
                  target="blank"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faculty;