export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Info Section */}
      <section className="info_section">
        <div className="container">
          <h4>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <div className="item">
                      <div className="img-box">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <p>
                        Cité Megunouche No. 70 Cooperative Saada, Ain Naadja,
                        Algiers
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <div className="img-box">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <p>
                        +213 77 01 75 430 <br />
                        +213 55 55 22 112
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="item">
                      <div className="img-box">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                      <p>info@benameur-dz.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; {currentYear} All Rights Reserved By Benameur For Oil
            Services
          </p>
        </div>
      </footer>
    </>
  );
}
