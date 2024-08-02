import "./Home.scss";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div className="home-container">
      <div className="stars">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <div className="content-section"></div>
      <Nav />
    </div>
  );
};

export default Home;
