import { Routes, Route } from 'react-router-dom';
import About from 'pages/About';
import Products from 'pages/Products';
import ProductDetails from 'pages/ProductDetails';
import NotFound from 'pages/NotFound';
import Mission from 'pages/Mission';
import Team from 'pages/Team';
import Reviews from 'pages/Reviews';
import Home from 'pages/Home';
import Sharedlayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />;
      </Route>
    </Routes>
  );
};
