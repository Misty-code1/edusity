import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAMS" title="What we Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
