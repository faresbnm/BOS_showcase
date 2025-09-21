import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("supplies");
  const [expandedItems, setExpandedItems] = useState({
    supplies: {},
    solutions: {},
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const servicesGridRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [activeTab]: {
        [id]: !prev[activeTab][id], // reset others
      },
    }));
  };

  const handleTabChange = (tab) => {
    if (activeTab === tab) return;

    // Start transition
    setIsTransitioning(true);

    // Reset expanded items right away (prevents closing animation flash)
    setExpandedItems((prev) => ({
      ...prev,
      [activeTab]: {}, // clear the current tab
      [tab]: {}, // make sure the next tab starts fresh
    }));

    // Switch tab after transition delay
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);

      // Reset scroll position when changing tabs
      if (servicesGridRef.current) {
        servicesGridRef.current.scrollTop = 0;
      }
    }, 300);
  };

  const suppliesData = [
    {
      id: 1,
      title: "Vehicle Rentals",
      image: "/images/vehicles.jpg",
      shortDescription:
        "Rent vehicles with or without drivers for your business needs.",
      fullDescription:
        "We offer a wide range of vehicles for rent, from light trucks to heavy machinery. All vehicles are well-maintained and come with optional driver services. Our fleet is regularly updated to ensure reliability and safety for all your transportation needs.",
    },
    {
      id: 2,
      title: "Equipment Rental",
      image: "/images/equipment.jpg",
      shortDescription:
        "Quality equipment for construction and industrial projects.",
      fullDescription:
        "From construction machinery to specialized tools, we provide high-quality equipment rentals for short and long-term projects. All equipment undergoes regular maintenance and safety checks to ensure optimal performance on your job sites.",
    },
    {
      id: 3,
      title: "Base de Vie Supplies",
      image: "/images/supplies.jpg",
      shortDescription:
        "Comprehensive supplies for remote living bases and camps.",
      fullDescription:
        "We provide all necessary supplies for remote base camps, including food provisions, hygiene products, bedding, and other essentials. Our logistics network ensures timely delivery even to the most remote locations.",
    },
    {
      id: 4,
      title: "Welding Equipment & Services",
      image: "/images/welding.jpg",
      shortDescription: "Professional welding equipment and on-site services.",
      fullDescription:
        "Our welding division offers both equipment rental and professional welding services. We provide certified welders and state-of-the-art equipment for all types of metalwork, from simple repairs to complex structural projects.",
    },
    {
      id: 5,
      title: "Technical Inspection Services",
      image: "/images/inspection.jpg",
      shortDescription: "Comprehensive equipment and facility inspections.",
      fullDescription:
        "Our certified inspectors provide detailed technical assessments of equipment, facilities, and operational processes. We identify potential issues and provide recommendations to ensure compliance and optimal performance.",
    },
    {
      id: 6,
      title: "Logistics Support",
      image: "/images/logistics.jpg",
      shortDescription: "End-to-end logistics solutions for your operations.",
      fullDescription:
        "We offer complete logistics support including transportation planning, warehousing, inventory management, and distribution services. Our team ensures your supplies and equipment reach their destination efficiently and on time.",
    },
  ];

  const solutionsData = [
    {
      id: 1,
      title: "Web Development",
      image: "/images/webdev.jpg",
      shortDescription: "Custom web applications and business solutions.",
      fullDescription:
        "We develop responsive, modern web applications tailored to your business needs. Our solutions include e-commerce platforms, customer management systems, and custom web applications that work across all devices.",
    },
    {
      id: 2,
      title: "IT Consulting",
      image: "/images/it-consulting.jpg",
      shortDescription: "Expert advice for your technology infrastructure.",
      fullDescription:
        "Our IT consultants help businesses optimize their technology investments, implement secure networks, and develop digital transformation strategies. We work with you to align technology with your business goals.",
    },
    {
      id: 3,
      title: "Business Development",
      image: "/images/business-dev.jpg",
      shortDescription: "Strategic planning for business growth and expansion.",
      fullDescription:
        "We provide comprehensive business development services including market analysis, partnership development, and growth strategy planning. Our experts help you identify new opportunities and create actionable plans.",
    },
    {
      id: 4,
      title: "Commercial Consulting",
      image: "/images/commercial.jpg",
      shortDescription: "Expert guidance for your commercial operations.",
      fullDescription:
        "Our commercial consulting services help you optimize your business operations, improve customer relationships, and increase profitability. We provide insights and strategies tailored to your industry and market conditions.",
    },
    {
      id: 5,
      title: "Project Management",
      image: "/images/project-management.jpg",
      shortDescription: "End-to-end project management solutions.",
      fullDescription:
        "We offer professional project management services to ensure your initiatives are completed on time, within budget, and to the highest quality standards. Our experienced project managers use proven methodologies to deliver successful outcomes.",
    },
    {
      id: 6,
      title: "Technical Solutions",
      image: "/images/technical.jpg",
      shortDescription:
        "Innovative technical solutions for complex challenges.",
      fullDescription:
        "Our team of engineers and technicians develop custom technical solutions to address your specific operational challenges. We combine innovation with practical expertise to deliver effective and sustainable solutions.",
    },
  ];

  const currentData = activeTab === "supplies" ? suppliesData : solutionsData;
  const currentExpandedItems = expandedItems[activeTab] || {};

  return (
    <section className="services-page-section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 data-aos="fade-up">
            <span className="highlight">Services</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Comprehensive solutions tailored to your industrial needs
          </p>
        </div>

        {/* Tab buttons */}
        <div className="tabs-container" data-aos="fade-up" data-aos-delay="150">
          <div className="tabs-wrapper">
            <button
              className={`tab-button ${
                activeTab === "supplies" ? "active" : ""
              }`}
              onClick={() => handleTabChange("supplies")}
            >
              Supplies
            </button>
            <button
              className={`tab-button ${
                activeTab === "solutions" ? "active" : ""
              }`}
              onClick={() => handleTabChange("solutions")}
            >
              Solutions
            </button>
          </div>
        </div>

        {/* Services grid */}
        <div
          ref={servicesGridRef}
          className={`services-grid-page ${
            isTransitioning ? "fade-out" : "fade-in"
          }`}
        >
          {currentData.map((item, index) => (
            <div
              key={item.id}
              className="service-card-expandable"
              data-aos="fade-up"
              data-aos-delay={200 + (index % 3) * 100}
            >
              <div className="service-card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="service-card-content">
                <h3>{item.title}</h3>
                <p className="short-description">{item.shortDescription}</p>

                <div
                  className={`expandable-content ${
                    currentExpandedItems[item.id] ? "expanded" : ""
                  }`}
                >
                  <p className="full-description">{item.fullDescription}</p>
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => toggleExpand(item.id)}
                >
                  {currentExpandedItems[item.id] ? "Read Less" : "Read More"}
                  <svg
                    className={`arrow ${
                      currentExpandedItems[item.id] ? "rotated" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
