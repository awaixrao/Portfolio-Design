import Nav from "./Nav";
import Content from "./Content";
import bgimg from "../images/bg.jpg";

function Head() {
  return (
    <>
      <section id="Home" style={{ backgroundImage: `url(${bgimg})` }}>
        <Nav />
        <div className="container heroText h-100 ">
          <Content />
        </div>
      </section>
    </>
  );
}
export default Head;
