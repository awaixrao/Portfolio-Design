function ServicesCards(props) {
  return (
    <>
      <div class="card hoverCard mb-5 border-0">
        <div class="row g-0">
          <div class="col-md-2 d-flex bg-warning miIcon justify-content-center align-items-center">
            {props.icon}
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">{props.heading}</h5>
              <p class="card-text">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCards;
