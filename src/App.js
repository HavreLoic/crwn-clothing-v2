import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import './categories.styles.scss';
import { GlobalStyle } from './global.styles';


const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;