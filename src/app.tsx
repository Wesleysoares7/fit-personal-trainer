import Divider from "./components/divider";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Training from "./pages/training/training";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Training />
    </>
  );
};

export default App;
