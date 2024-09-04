import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
