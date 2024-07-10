function AboutMe() {
  return (
    <>
      <section id="About">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="pb-4">About Me</h2>
              <img
                className=" pb-4 img-fluid"
                src="https://themewagon.github.io/credo/images/credo_img_1.jpg"
                alt="myphoto"
              />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat repudiandae cupiditate, aspernatur ipsa enim magnam
                quaerat pariatur vero provident necessitatibus amet saepe
                officiis labore. Provident deserunt necessitatibus expedita.
                Voluptate, soluta?
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo praesentium quibusdam minus voluptatem sequi iure
                amet?
              </p>
            </div>

            <div className="col-md-6 mt-5 ps-5">
              <h6>Photographer</h6>
              <div
                className="progress mb-5"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "89%" }}
                >
                  89%
                </div>
              </div>

              <h6>Wedding</h6>
              <div
                className="progress mb-5"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>

              <h6>Events</h6>
              <div
                className="progress mb-5"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "94%" }}
                >
                  94%
                </div>
              </div>

              <div className="my5"></div>
              <h6>Conferences</h6>
              <div
                className="progress mb-5"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "94%" }}
                >
                  94%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
