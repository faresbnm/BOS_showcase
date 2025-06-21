import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "Camps Refurbishment",
    icon: "fa-solid fa-house-chimney-window",
    description:
      "Reinventing Comfort and Functionality: Design, renovation, interiors, and safety compliance for remote camps.",
    modalContent: {
      details: [
        "Camp Design & Planning",
        "Structural Refurbishment",
        "Modern Amenities",
        "Health & Safety Compliance",
      ],
      images: ["/images/camps/Picture1.jpg", "/images/camps/Picture2.jpg"],
    },
  },
  {
    id: 2,
    title: "Rig Move",
    icon: "fa-solid fa-truck-arrow-right",
    description:
      "Efficient relocation of drilling rigs: site prep, transport, setup, and safety assurance.",
    modalContent: {
      details: [
        "Site Assessment",
        "Transportation",
        "Site Preparation",
        "Installation & Setup",
        "Safety Assurance",
      ],
      images: [
        "/images/Rig/Picture1.jpg",
        "/images/Rig/Picture2.jpg",
        "/images/Rig/Picture3.jpg",
      ],
    },
  },
  {
    id: 3,
    title: "Sand Blasting & Painting",
    icon: "fa-solid fa-paint-roller",
    description:
      "Surface preparation and coating: protection, longevity, and eco-friendly solutions.",
    modalContent: {
      details: [
        "Surface Preparation",
        "Coating Application",
        "Custom Solutions",
        "Environmental Responsibility",
      ],
      images: ["/images/sandblasting/Picture1.jpg"],
    },
  },
];

const additionalServices = [
  "Vehicle rentals with & without drivers",
  "Equipment rental",
  "Technical inspection",
  "Logistics & commercial consulting",
  "Business development & representation",
  "Control & welding services",
  "Installation, repair, & maintenance",
  "Supplies to Base de vie",
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 data-aos="fade-up">
            Our <span className="highlight">Services</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="section-subtitle"
          >
            Comprehensive solutions tailored to your industrial needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                onClick={() => openModal(service.id)}
                className="service-button"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        <div
          className="additional-services"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="service-card extended">
            <div className="service-icon">
              <i className="fa-solid fa-circle-plus"></i>
            </div>
            <h3>More Services</h3>
            <ul>
              {additionalServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Component */}
        {activeModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>

              {services
                .filter((s) => s.id === activeModal)
                .map((service) => (
                  <div key={service.id} className="modal-content">
                    <h2>{service.title}</h2>
                    <div className="modal-details">
                      <ul>
                        {service.modalContent.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                      <div className="modal-image">
                        <Swiper
                          modules={[Navigation, Pagination]}
                          navigation
                          pagination={{ clickable: true }}
                          spaceBetween={30}
                          slidesPerView={1}
                          className="service-swiper"
                        >
                          {service.modalContent.images.map((image, idx) => (
                            <SwiperSlide key={idx}>
                              <img
                                src={image}
                                alt={`${service.title} ${idx + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
