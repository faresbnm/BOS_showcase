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
                  Welcome to <br /> Benameur <br /> For Oil Services
                </h1>
                <p>
                  your trusted partner in the dynamic world of petroleum
                  services. Established in 2023, we bring fresh energy and
                  innovative solutions to the industry, driving progress and
                  redefining excellence.
                </p>
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
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
                <svg
                  enable-background="new 0 0 511.995 511.995"
                  height="512"
                  viewBox="0 0 511.995 511.995"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path d="m217.106 280.749-48.214 48.214c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l48.214-48.214c3.905-3.905 3.905-10.237 0-14.143s-10.237-3.905-14.142 0z" />
                      <path d="m328.915 168.939-48.17 48.17c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l48.17-48.17c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.235-3.905-14.142 0z" />
                      <path d="m467.092 344.045c-19.14-11.051-41.175-14.64-62.649-10.314l-77.734-77.734 77.792-77.792c5.807 1.153 11.636 1.714 17.42 1.713 31.563-.001 61.664-16.706 78.009-45.016 14.983-25.951 16.076-57.546 2.923-84.516-4.363-8.946-10.004-13.602-16.765-13.838-6.652-.225-12.388 3.784-17.092 11.933l-15.5 26.847c-2.641 4.573-3.996 4.574-6.241 4.574h-11.499c-7.173 0-8.405-.712-11.992-6.924l-5.749-9.957c-1.161-2.011-1.801-3.12.84-7.692l15.5-26.847c4.705-8.15 5.307-15.138 1.788-20.769-3.585-5.737-10.432-8.295-20.366-7.6-29.932 2.094-56.747 18.837-71.73 44.789-11.052 19.141-14.641 41.178-10.313 62.65l-77.734 77.734-77.792-77.792c7.444-37.494-9.805-76.089-43.302-95.429-25.954-14.982-57.549-16.075-84.519-2.921-8.945 4.363-13.601 10.003-13.837 16.764-.232 6.636 3.783 12.387 11.933 17.092l26.846 15.5c4.574 2.641 4.574 3.92 4.574 6.241v11.499c0 7.173-.712 8.406-6.924 11.992l-9.958 5.749c-2.011 1.161-3.119 1.801-7.692-.839l-26.847-15.5c-8.15-4.706-15.138-5.307-20.769-1.789-5.737 3.585-8.294 10.437-7.6 20.366 2.094 29.933 18.837 56.749 44.789 71.732 19.141 11.051 41.176 14.64 62.65 10.313l77.734 77.734-77.792 77.791c-37.491-7.443-76.088 9.805-95.429 43.303-14.983 25.951-16.076 57.545-2.922 84.515 4.363 8.946 10.003 13.602 16.764 13.838 6.644.24 12.387-3.783 17.093-11.933l15.5-26.846c2.641-4.574 3.92-4.574 6.242-4.574h11.498c7.172 0 8.405.712 11.992 6.924l5.748 9.957c1.161 2.012 1.801 3.12-.839 7.692l-15.5 26.847c-4.706 8.15-5.307 15.138-1.788 20.769 3.202 5.124 9.008 7.711 17.285 7.711.991 0 2.019-.037 3.08-.111 29.933-2.094 56.749-18.837 71.731-44.788 11.051-19.141 14.641-41.178 10.314-62.65l77.733-77.733 77.792 77.792c-7.443 37.494 9.806 76.089 43.303 95.429 13.902 8.026 29.419 12.066 44.981 12.066 13.488-.001 27.012-3.037 39.534-9.144 8.945-4.363 13.601-10.003 13.837-16.764.232-6.636-3.782-12.387-11.933-17.093l-26.847-15.499c-4.573-2.641-4.573-3.92-4.573-6.242v-11.498c0-7.173.712-8.406 6.924-11.992l9.957-5.749c2.011-1.162 3.118-1.801 7.692.839l26.847 15.5c8.149 4.706 15.137 5.307 20.77 1.788 5.736-3.585 8.294-10.437 7.599-20.365-2.092-29.935-18.836-56.75-44.787-71.733zm-349.33-183.857c-2.529-2.528-6.217-3.514-9.67-2.585-18.082 4.867-36.972 2.39-53.188-6.972-19.866-11.47-32.794-31.86-34.751-54.705l25.178 14.537c6.256 3.612 15.932 7.629 27.692.839l9.958-5.749c12.336-7.123 16.923-15.067 16.923-29.312v-11.5c-.001-13.578-8.318-19.95-14.574-23.562l-25.178-14.535c20.763-9.729 44.887-8.727 64.752 2.743 27.385 15.812 40.811 48.162 32.647 78.671-.923 3.45.063 7.131 2.589 9.656l81.715 81.715-14.141 14.141-44.633-44.633c-3.905-3.905-10.237-3.905-14.143 0s-3.905 10.237 0 14.143l44.633 44.633-14.143 14.143zm42.426 234.045c-2.529 2.529-3.515 6.216-2.585 9.67 4.866 18.083 2.39 36.972-6.973 53.189-11.469 19.865-31.858 32.794-54.704 34.751l14.537-25.178c3.611-6.256 7.627-15.933.839-27.692l-5.749-9.958c-7.123-12.336-15.066-16.923-29.311-16.923h-11.5c-13.577 0-19.95 8.317-23.563 14.573l-14.536 25.178c-9.728-20.763-8.726-44.886 2.743-64.751 15.812-27.386 48.161-40.813 78.671-32.647 3.45.921 7.131-.063 9.656-2.589l234.094-234.094c2.529-2.529 3.515-6.216 2.585-9.67-4.866-18.083-2.391-36.972 6.973-53.188 11.47-19.866 31.86-32.794 54.705-34.751l-14.537 25.177c-3.612 6.256-7.629 15.932-.84 27.692l5.749 9.958c7.123 12.337 15.067 16.923 29.312 16.923h11.5c13.578-.001 19.95-8.318 23.562-14.573l14.537-25.178c9.728 20.763 8.726 44.885-2.744 64.751-15.811 27.386-48.164 40.809-78.671 32.647-3.451-.923-7.131.064-9.656 2.589zm306.476 7.3c-6.257-3.612-15.936-7.626-27.691-.839l-9.958 5.749c-12.336 7.122-16.923 15.066-16.923 29.31v11.5c0 13.578 8.317 19.95 14.573 23.563l25.178 14.536c-20.762 9.729-44.885 8.727-64.751-2.743-27.386-15.812-40.811-48.163-32.647-78.671.923-3.45-.063-7.131-2.589-9.656l-81.716-81.716 14.143-14.143 44.68 44.681c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.142l-44.68-44.681 14.141-14.141 81.667 81.667c2.528 2.528 6.215 3.514 9.67 2.585 18.079-4.867 36.972-2.39 53.188 6.973 19.866 11.47 32.795 31.859 34.751 54.704z" />
                      <path d="m255.998 245.998h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z" />
                    </g>
                  </g>
                </svg>
              </div>
              <h5 className="name">Repair</h5>
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
                <a className="btn" href="about">
                  Read More
                </a>
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
                  We Provide Professional <br /> Oil Services.
                </h2>
                <p>
                  we take pride in offering a range of comprehensive services
                  that cater to the unique needs of the petroleum industry. With
                  our expertise and commitment to excellence, we ensure that
                  every project is executed with precision and care.
                </p>
                <a className="btn" href="services">
                  Check our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
