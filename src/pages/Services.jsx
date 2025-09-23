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
  const [currentPage, setCurrentPage] = useState(1);
  const servicesGridRef = useRef(null);

  // Items per page - 6 services (2 rows of 3)
  const ITEMS_PER_PAGE = 6;

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

    // Reset expanded items and pagination
    setExpandedItems((prev) => ({
      ...prev,
      [activeTab]: {}, // clear the current tab
      [tab]: {}, // make sure the next tab starts fresh
    }));
    setCurrentPage(1); // Reset to first page when changing tabs

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Smooth scroll to top of services grid
    if (servicesGridRef.current) {
      servicesGridRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
    {
      id: 2,
      title: "Lubricants and wood Varnish",
      image: "/images/camps/lubrificant.png",
      shortDescription:
        "High-quality lubricants and protective wood varnishes to improve performance and durability.",
      fullDescription:
        "We supply a wide range of lubricants and varnishes designed to optimize equipment performance and extend service life. Our lubricants ensure smooth operation, reduce wear, and improve energy efficiency, while our varnishes provide strong protection against corrosion, heat, and harsh environments. With reliable products tailored to industrial and construction needs, we help maintain efficiency, safety, and long-term durability.",
    },
    {
      id: 3,
      title: "Electrical supplies",
      image: "/images/camps/electrical_supplies.webp",
      shortDescription:
        "Reliable source for quality electrical materials, equipment, and accessories.",
      fullDescription:
        "We provide a wide range of electrical supplies to meet the needs of your projects. From cables, switches, and lighting systems to advanced electrical equipment, our products combine quality, durability, and safety. With trusted brands and efficient delivery, we ensure that your projects are equipped with the right materials for smooth and reliable operations.",
    },
    {
      id: 4,
      title: "Supply of Kitchen, Refrigeration, and Store Equipment",
      image: "/images/camps/kitchen_supplies.webp",
      shortDescription:
        "supply of kitchen, refrigeration, and store equipment for professional use.",
      fullDescription:
        "We offer wholesale kitchen equipment, refrigeration units, and store fixtures designed for restaurants, supermarkets, and commercial spaces. Our products are durable, efficient, and cost-effective, ensuring smooth daily operations. We supply everything from kitchen tools to advanced cooling and display systems for fully equipped workspaces.",
    },
    {
      id: 5,
      title: "Laundry, Hotel, Café, and Restaurant Equipment",
      image: "/images/camps/hotel_equipment.webp",
      shortDescription:
        "supply of professional equipment for laundries, hotels, cafés, and restaurants.",
      fullDescription:
        "We offer a wide range of high-quality equipment and appliances tailored for the hospitality and service industry. From laundry machines and hotel furnishings to café and restaurant kitchen equipment, our wholesale solutions are designed to combine durability, efficiency, and cost-effectiveness. With trusted brands and reliable supply, we help businesses create fully equipped spaces that deliver comfort, performance, and customer satisfaction.",
    },
    {
      id: 6,
      title: "Hand tools",
      image: "/images/camps/handtools.jpeg",
      shortDescription:
        "Durable and versatile hand tools for construction, repair, and everyday use.",
      fullDescription:
        "We supply a wide selection of hand tools designed for professionals and general users alike. From wrenches, hammers, and screwdrivers to specialized tools for construction and maintenance, our products ensure reliability, precision, and safety. Built to last and easy to handle, our tools support efficiency and performance across all types of projects.",
    },
    {
      id: 7,
      title: "Firefighting Equipment",
      image: "/images/camps/firefighting.webp",
      shortDescription:
        "supply of reliable firefighting and fire safety equipment.",
      fullDescription:
        "We provide a complete range of firefighting equipment to ensure maximum safety and protection in industrial, commercial, and residential environments. Our products include fire extinguishers, hoses, alarms, and protective gear, all sourced from trusted manufacturers and compliant with safety standards. With durable, efficient, and easy-to-use solutions, we help safeguard people, properties, and operations against fire risks.",
    },
    {
      id: 8,
      title: "Pumps for All Applications",
      image: "/images/camps/Different-Types-of-Pumps.jpg",
      shortDescription:
        "Supply of pumps designed for all types of applications, including residential, commercial, and industrial use.",
      fullDescription:
        "We offer a comprehensive selection of durable and efficient pumps designed for various applications, including water supply, irrigation, wastewater management, industrial processes, construction, firefighting, and HVAC systems. Our pumps, made from high-quality materials and advanced engineering, ensure optimal flow, energy savings, and a long service life for residential, commercial, and industrial use, meeting the highest standards of quality and safety.",
    },
    {
      id: 9,
      title: "Jewelry and Watches",
      image: "/images/camps/Jewelry.png",
      shortDescription:
        "fine jewelry and watches for retail and professional distribution.",
      fullDescription:
        "We specialize in the supply of high-quality jewelry and watches, offering a wide selection of products that combine elegance, craftsmanship, and durability. Our range includes gold, silver, and precious stone jewelry, alongside luxury and fashion watches tailored to diverse markets and customer preferences. Whether for jewelers, retailers, or boutiques, we provide reliable sourcing, competitive pricing, and timeless designs that meet the highest industry standards.",
    },
    {
      id: 10,
      title: "Household appliance",
      image: "/images/camps/electrical_house.webp",
      shortDescription:
        "distribution of electrical appliances for households, businesses, and industries.",
      fullDescription:
        "We offer a diverse selection of high-quality electrical appliances for residential, commercial, and industrial clients. Our catalog features all household devices, office equipment, and specialized appliances sourced from trusted manufacturers. We focus on delivering durable, efficient, and innovative solutions tailored to meet a wide range of customer needs, from large-scale projects to individual retail purchases.",
    },
    {
      id: 11,
      title: "supply of telephony, their accessories and their spare parts.",
      image: "/images/camps/telephone.webp",
      shortDescription:
        "Supply of telecommunication devices, accessories, and spare parts for personal and professional use.",
      fullDescription:
        "We offer comprehensive telephony solutions, including smartphones, landline devices, VoIP systems, and accessories like chargers, headsets, and more. We also supply spare parts for maintenance and repair, serving individuals, businesses, and resellers with reliable, high-quality products at competitive prices to meet diverse communication needs.",
    },
    {
      id: 12,
      title: "IT equipment, office machines, accessories and supplies",
      image: "/images/camps/IT.jpg",
      shortDescription:
        "supply of IT equipment, office machines, and accessories.",
      fullDescription:
        "We provide IT and office solutions designed to improve efficiency and productivity. Our catalog includes computers, laptops, printers, photocopiers, networking devices, servers, along with accessories such as keyboards, mice, storage devices, cables. We also supply a variety of office consumables and supplies, ensuring seamless day-to-day operations.",
    },
    {
      id: 13,
      title: "Glass Materials Supply",
      image: "/images/camps/glasse.jpg",
      shortDescription:
        "distribution of glass materials for construction, decoration, and industrial use.",
      fullDescription:
        "We sell a wide selection of glass materials tailored for multiple applications, including construction projects, interior decoration, furniture, windows, façades, and industrial use. Our range covers plain, tempered, laminated, and specialized glass types, Whether supplying contractors, architects, or resellers, we provide reliable products and solutions that combine functionality with design excellence.",
    },
    {
      id: 14,
      title: "Wheels solutions",
      image: "/images/camps/wheels.jpg",
      shortDescription:
        "Supply of all types of wheels for vehicles, machinery, and more",
      fullDescription:
        "We specialize in the supply of high-quality wheels designed for cars, trucks, heavy machinery, industrial equipment, and specialized applications. Our range includes standard, heavy-duty, and custom wheels that combine durability, performance, and safety. Whether serving automotive workshops, construction companies, or industrial operations, we provide reliable wheel solutions that meet international standards and ensure long-term efficiency.",
    },
    {
      id: 15,
      title: "Bags supply",
      image: "/images/camps/bags.png",
      shortDescription: "supply of all types of bags",
      fullDescription:
        "We provide bags tailored to different needs, including shopping bags, packaging bags, travel bags, backpacks, and industrial-use sacks. Our products are available in various materials such as plastic, paper, fabric, and eco-friendly alternatives to suit both retail and professional requirements.",
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

  // Get current data based on active tab
  const currentData = activeTab === "supplies" ? suppliesData : solutionsData;
  const currentExpandedItems = expandedItems[activeTab] || {};

  // Pagination calculations
  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = currentData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
          {currentItems.map((item, index) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container" data-aos="fade-up">
            <div className="pagination">
              <button
                className={`pagination-btn ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <div className="page-numbers">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`page-number ${
                      currentPage === number ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                className={`pagination-btn ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesPage;
