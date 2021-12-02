import './App.css';
import Login from './pageContainer/segment/Login';
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./components/Language/index";
import Carousel_slider from './components/custom/Carousel_slider';
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div class="container-login100 column" >
      <div className="welcomeNote mt-5 " ><Col xs="12">
        <h5>خوش آمدید</h5>
      </Col>
        <Col xs="12">
          <h2>سامانه جامع اطلاعات و داده ها</h2> </Col> </div>
      <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
        <Login t={t} />
        {/* <Carousel_slider /> */}
      </div>
    </div>
  );
}

export default App;
