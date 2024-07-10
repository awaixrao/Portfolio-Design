import PostCards from "./PostCards";

function CardsSection() {
  const cardData = [
    {
      title: "Why Photography Is Good For Business",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
      img: (
        <img
          className="img-fluid "
          src="https://themewagon.github.io/credo/images/blog_1.jpg"
          alt=""
        />
      ),
    },
    {
      title: "Why Photography Is Good For Business",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
      img: (
        <img
          className="img-fluid"
          src="https://themewagon.github.io/credo/images/blog_2.jpg"
          alt=""
        />
      ),
    },
    {
      title: "Why Photography Is Good For Business",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
      img: (
        <img
          className="img-fluid "
          src="https://themewagon.github.io/credo/images/img_10.jpg"
          alt=""
        />
      ),
    },
  ];

  return (
    <>
    <section id="Blog">
      <div className="container">
        <div className="row">
        <h3 className="text-center mb-5 py-5" >Blog Posts</h3>
          {cardData.map((card, index) => {
            return (
              <div className="col-md-4">
                <PostCards
                  title={card.title}
                  text={card.text}
                  img={card.img}
                />
              </div>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}

export default CardsSection;
