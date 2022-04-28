import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
