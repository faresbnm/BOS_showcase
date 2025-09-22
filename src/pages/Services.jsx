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
      title: "Supplying Worker Camps",
      image: "/images/camps/Picture1.jpg",
      shortDescription:
        "Reliable supply of goods and equipment to keep worker camps fully operational.",
      fullDescription:
        "We provide complete provisioning solutions for worker camps and remote sites, ensuring teams have everything they need for daily operations. From food, water, and hygiene products to furniture, gear, equipement and other essentials, our service guarantees efficiency and uninterrupted productivity on site.",
    },
  ];

  const solutionsData = [
    {
      id: 1,
      title: "Renting Cars with or without a Driver",
      image: "/images/camps/car_renting.jpg",
      shortDescription:
        "Flexible car rental solutions tailored to your needs, with or without professional drivers.",
      fullDescription:
        "We offer a wide range of vehicles available for rent, whether you prefer the freedom of driving yourself or the comfort of a professional driver at your service. Our fleet is well-maintained, reliable, and suited for business trips, site visits, or daily transportation. With flexible rental options, we ensure safety, convenience, and peace of mind for all your mobility needs.",
    },
    {
      id: 2,
      title: "Renting Equipment and Tools for Construction",
      image: "/images/camps/construction_equipment.jpg",
      shortDescription:
        "High-quality equipment and tools available for rent to support construction and public works projects.",
      fullDescription:
        "We provide a wide range of construction and public works equipment, from heavy machinery to specialized tools, ensuring that every project runs smoothly and efficiently. Our rental solutions are flexible, cost-effective, and designed to meet the highest safety and performance standards. Whether for short-term tasks or long-term projects, we deliver reliable equipment to keep your operations on track.",
    },
    {
      id: 3,
      title: "Renting Machinery and Various Equipment",
      image: "/images/camps/machines.jpeg",
      shortDescription:
        "Versatile machinery and equipment rental to support diverse industrial needs.",
      fullDescription:
        "We offer a wide selection of machinery and equipment for rent, covering everything from heavy-duty machines to specialized small devices. Whether for construction, industrial projects, or general operations, we ensure that you have the right resources to get the job done efficiently.",
    },
    {
      id: 4,
      title: "Transport of Persons or Goods",
      image: "/images/camps/transportation.webp",
      shortDescription:
        "Safe and dependable transport solutions for both passengers and cargo.",
      fullDescription:
        "We deliver tailored transportation services that adapt to your needs—whether moving people or delivering goods. Our fleet is equipped to handle everything from staff transfers and group travel to the secure shipment of materials and supplies. With a focus on punctuality, safety, and reliability, we make sure your teams and cargo arrive where they need to be, when they need to be there.",
    },
    {
      id: 5,
      title: "Technical Control, Expertise & Damage Assessment",
      image: "/images/camps/technical_control.jpg",
      shortDescription:
        "Independent inspections and assessments to ensure safety, compliance, and accurate evaluations.",
      fullDescription:
        "Our team provides comprehensive technical control and expertise services, offering objective evaluations across construction, equipment, and industrial projects. We also conduct thorough damage assessments to identify causes, measure impact, and support reliable decision-making. With certified methods and impartial analysis, we help you maintain safety standards, minimize risks, and resolve incidents with confidence.",
    },
    {
      id: 6,
      title: "Quality Testing and Analysis Laboratory",
      image: "/images/camps/quality_test.jpg",
      shortDescription:
        "Independent inspections and assessments to ensure safety, compliance, and accurate evaluations.",
      fullDescription:
        "Our team provides comprehensive technical control and expertise services, offering objective evaluations across construction, equipment, and industrial projects. We also conduct thorough damage assessments to identify causes, measure impact, and support reliable decision-making. With certified methods and impartial analysis, we help you maintain safety standards, minimize risks, and resolve incidents with confidence.",
    },
    {
      id: 7,
      title: "Deployment of Workers",
      image: "/images/camps/workers.webp",
      shortDescription:
        "Efficient workforce deployment to meet project demands quickly and reliably.",
      fullDescription:
        "We provide skilled and qualified workers to support your operations on-site, ensuring projects are staffed with the right expertise at the right time. Our deployment service covers various sectors, from construction and logistics to industrial activities, guaranteeing flexibility and responsiveness. With a focus on professionalism and safety, we help you build reliable teams that keep your projects moving forward.",
    },
    {
      id: 8,
      title: "Consulting, Studies & Logistics Assistance",
      image: "/images/camps/consulting.jpg",
      shortDescription:
        "Tailored consulting and study services with integrated logistics support for business and commercial projects.",
      fullDescription:
        "We offer a full range of consulting and study services to support decision-making, planning, and execution in both commercial and industrial fields. Our expertise combines in-depth market studies with practical logistics assistance, ensuring projects are not only well-designed but also efficiently implemented. From feasibility analysis to operational support, we provide solutions that drive growth, optimize resources, and deliver measurable results.",
    },
    {
      id: 9,
      title: "Repair & Maintenance services",
      image: "/images/camps/repair.jpg",
      shortDescription:
        "Comprehensive repair and maintenance services for machinery, vehicles, and more",
      fullDescription:
        "We offer reliable repair and maintenance solutions covering construction and public works machinery, industrial machine tools, and building facilities. Our skilled team ensures that equipment runs at peak performance and properties remain in excellent condition. By combining preventive maintenance with responsive repair services, we help minimize downtime, extend the lifespan of your assets, and keep your operations running smoothly.",
    },
    {
      id: 10,
      title: "Electrical & Network Installation and Maintenance",
      image: "/images/camps/electrical.webp",
      shortDescription:
        "Integrated electrical and network solutions to power and connect your projects.",
      fullDescription:
        "We deliver complete installation and maintenance services for both electrical systems and communication networks. Our expertise covers everything from wiring, power distribution, and lighting to structured cabling and IT network infrastructure. By combining electrical and network services, we provide efficient, secure, and future-ready solutions that ensure your facilities remain powered, connected, and fully operational.",
    },
    {
      id: 11,
      title: "Software Development",
      image: "/images/camps/software.webp",
      shortDescription:
        "Tailored software solutions designed to meet your business needs across all platforms.",
      fullDescription:
        "We design and develop custom software applications that bring your ideas to life, from web platforms, websites, mobile apps to desktop programs. Our developers focuses on creating reliable, user-friendly, and scalable systems that help optimize processes and enhance performance. By combining technical expertise with innovative design, we deliver digital solutions that support your growth and adapt to your evolving needs.",
    },
    {
      id: 12,
      title:
        "Representation or commercial agency for foreign states and groups",
      image: "/images/camps/representation.jpg",
      shortDescription:
        "Professional representation and commercial agency services for international partners.",
      fullDescription:
        "We act as a trusted commercial representative for foreign states, companies, and groups seeking to establish or expand their presence in the region. Our services include market representation, business development, and local commercial support, helping international partners navigate regulations, build strong networks, and achieve sustainable growth. With deep knowledge of the local market and strong professional connections, we provide a reliable gateway for successful international collaboration.",
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
              Services
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
