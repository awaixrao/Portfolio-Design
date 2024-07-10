import ServicesCards from "./ServicesCards";

function ServicesSection() {
  const servicesData = [
    {
      heading: "Wedding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-goblet-fill ri-2x"></i>,
    },
    {
      heading: "Events",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-calendar-fill ri-2x"></i>,
    },
    {
      heading: "Conferences",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-user-voice-fill ri-2x"></i>,
    },
    {
      heading: "Culture",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-color-filter-fill ri-2x"></i>,
    },
  ];

  return (
    <>
      <section id="Services">
        <div className="container"> 
          <div className="services my-5 pb-4">
            <h3 className="text-center mb-5">Services</h3>

            <div className="row">
              {servicesData.map((service, index) => {
                return (
                  <div className="col-md-6">
                    <ServicesCards 
                      heading={service.heading}
                      desc={service.desc}
                      icon={service.icon}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
