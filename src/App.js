import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Resume } from "./components/resume/Resume";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Blogs from "./components/blogs/Blogs";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing/>
        <Testimonials/>
        <Blogs/>
        <Contacts/>
      </main>
    </>
  );
}

export default App;
