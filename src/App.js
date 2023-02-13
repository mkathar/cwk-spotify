import Aside from "./components/aside";
import Footer from "./components/footer";
import Content from "./components/content";
import { BrowserRouter as Router } from "react-router-dom";
const a = "selam";
function App() {
  return (
    <>
      <div className="rework">
        <Aside />
        <Content />
      </div>

      <Footer />
    </>
  );
}

export default App;
