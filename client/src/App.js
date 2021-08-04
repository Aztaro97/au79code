import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import HomeComponents from "./components/pagesScreens/Home/HomeComponents";
import { GlobalStyle } from "./globalStyle";
import AuthComponents from "./components/pagesScreens/auth/authTab";
import LoaderComponent from "./components/Loader";
import CreateProductComponent from "./components/pagesScreens/products/createProduct";
import ProductAndCompanyComponent from "./components/pagesScreens/productsAndCompany/tabs";
import EditProductScreen from "./components/pagesScreens/EditProductsAndCompany/editProductScreen";
import EditProductAndCompanyComponent from "./components/pagesScreens/EditProductsAndCompany/tabs";
import CartComponent from "./components/pagesScreens/cart/cart";
import ShippingComponenet from "./components/pagesScreens/checkout/shipping";
import ThankComponenet from "./components/pagesScreens/checkout/thankPage";
import RegisterComponenet from "./components/pagesScreens/auth/RegisterPage";
import PayementStep from "./components/pagesScreens/checkout/completePayement";
import CompanyListComponent from "./components/pagesScreens/CompanyList/index";
import EcommerceHomeComponent from "./components/pagesScreens/e-commerce/homeECommerce";
import PaymentCompopnent from "./components/pagesScreens/checkout/payment";
import pageNotFound from "./components/pagesScreens/pageNotFund"
import Loading from "./components/Loader";
import Strip from "./components/pagesScreens/checkout/stripe/stripeContainer"
import MapScreen from "./components/pagesScreens/checkout/googleMap/mapScreen"


function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponents} />
          <Route path="/auth" component={AuthComponents} />
          <Route path="/add-product" component={CreateProductComponent} />
          <Route path="/products" component={ProductAndCompanyComponent} />
          <Route path="/product/:id" component={EditProductScreen} />
          <Route path="/myproducts" component={EditProductAndCompanyComponent} />
          <Route path="/e-commerce" component={EcommerceHomeComponent} />
          <Route path="/companies" component={CompanyListComponent} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/shipping" component={ShippingComponenet} />
          <Route path="/thank" component={ThankComponenet} />
          <Route path="/register" component={RegisterComponenet} />
          <Route path="/payement" component={PayementStep} />
          <Route path="/payment" component={PaymentCompopnent} />
          <Route path="/loader" component={Loading} />
          <Route path="/map" component={MapScreen} />
          <Route path="/stripe" component={Strip} />
          <Route component={pageNotFound} />
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
