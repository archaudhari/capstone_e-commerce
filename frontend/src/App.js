import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Header from './Layout/Header/Header';
import Shop from './routes/Shop/Shop';
import Footer from './Layout/Footer/Footer';
import Home from './routes/Home/Home';
import Product from './routes/Product/Product';
import Cart from './routes/Cart/Cart';
import Profile from './routes/Profile/Profile';
import ForgotPassword from './componenets/ForgotPassword/ForgotPassword';
import ProductDetails from './componenets/Product/ProductDetails';
import ErrorPage from './routes/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            
            <Route path="/shop" element={<Shop /> }/>


            <Route path="/product" element={<Product /> }/>
            

            <Route path="/cart" element={<Cart /> }/>

            <Route path="/product/:id" element={<ProductDetails /> }/>

            <Route path="/account" element={<Profile /> }/>
            

            <Route path="/forgotpassword" element={<ForgotPassword /> }/>

            
            <Route path="*" element={<ErrorPage /> }/>

          </Routes>
          <Footer />
          </BrowserRouter>
    </div>
  );
}

export default App;
