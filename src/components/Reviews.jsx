function Reviews() {
  return (
    <>
      <section className="my-5" id="reviews">
        <div className="container">
          <h2 className="my-5 py-5 text-center text-white">
            What Client Are Sayings
          </h2>

          <div
            id="carouselExampleDark"
            className="carousel  slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators ">
              <button
                type="button pt-5"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button "
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                
                <div className="carousel-caption d-none d-md-block">
                  <h3>❞</h3>
               <blockquote className="fs-5">
                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quia quisquam pariatur magnam tempore consectetur eius quo officia aliquid <br /> fugit numquam enim deleniti, molestiae, omnis minus illum voluptas <br /> perspiciatis voluptate? Dolores.</i>
               </blockquote>
               <p className="pb-3" ><i>-Garig Smith</i> </p>
               
                </div>
              </div>
              <div className="carousel-item">
                
                <div className="carousel-caption d-none d-md-block">
                <h3>❞</h3>
               <blockquote className="fs-5">
                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quia quisquam pariatur magnam tempore consectetur eius quo officia aliquid <br /> fugit numquam enim deleniti, molestiae, omnis minus illum voluptas <br /> perspiciatis voluptate? Dolores.</i>
               </blockquote>
               <p className="pb-3" ><i>-Garig Smith</i> </p>
                </div>
              </div>
              <div className="carousel-item">
                
                <div className="carousel-caption d-none d-md-block">
                <h3>❞</h3>
               <blockquote className="fs-5">
                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Quia quisquam pariatur magnam tempore consectetur eius quo officia aliquid <br /> fugit numquam enim deleniti, molestiae, omnis minus illum voluptas <br /> perspiciatis voluptate? Dolores.</i>
               </blockquote>
               <p className="pb-3"><i>-Garig Smith</i> </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
