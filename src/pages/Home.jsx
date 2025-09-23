import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Slider Section */}
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h1>
                  Welcome to <br /> Benameur <br /> For Oil Field Services
                </h1>
                <p>
                  your trusted partner in the dynamic world of petroleum
                  services. Established in 2023, we bring fresh energy and
                  innovative solutions to the industry, driving progress and
                  redefining excellence.
                </p>
                <Link className="btn btn-primary" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/pngegg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature_section">
        <div className="container">
          <div className="feature_container">
            <div data-aos="fade-up" className="box">
              <div className="img-box">
                <i
                  style={{ fontSize: "90px", color: "#4caf50" }}
                  className="fa-solid fa-cubes"
                ></i>
              </div>
              <h5 className="name">Build</h5>
            </div>
            <div data-aos="fade-down" className="box active">
              <div className="img-box">
                <i
                  style={{ fontSize: "90px" }}
                  className="fa-solid fa-arrow-trend-up"
                ></i>
              </div>
              <h5 className="name">Improve</h5>
            </div>
            <div data-aos="fade-up" className="box">
              <div className="img-box">
                <i
                  style={{ fontSize: "90px", color: "#726dae" }}
                  className="fa-regular fa-lightbulb"
                ></i>
              </div>
              <h5 className="name">Innovate</h5>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box" data-aos="fade-up">
                <h2>About us</h2>
                <p>
                  More than Twenty-Nine years of much diversified experience and
                  direct operations, construction, supply chain and management
                  with National & international experience utilizing extensive
                  engineering and construction operations knowledge.
                </p>
                <Link className="btn" to="/about">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box" data-aos="fade-down">
                <img src="/images/logo2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="professional_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box" data-aos="fade-down">
                <i
                  className="fa-solid fa-helmet-safety"
                  style={{ color: "#ff8a1d", fontSize: "300px" }}
                ></i>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box" data-aos="fade-up">
                <h2>
                  We Provide Professional <br /> Services.
                </h2>
                <p>
                  we take pride in offering a range of comprehensive services
                  that cater to the unique needs of the petroleum industry. With
                  our expertise and commitment to excellence, we ensure that
                  every project is executed with precision and care.
                </p>
                <Link className="btn" to="/services">
                  Check our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
