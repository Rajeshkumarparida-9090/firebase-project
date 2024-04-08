// import {BrowserRouter, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>Page Not Found</Route>
        </Switch>
      </Router> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>Page Not Found</Route>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
