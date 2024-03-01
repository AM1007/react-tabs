import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Sharedlayout from 'components/SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound';

const About = lazy(() => import('pages/About'));
const Home = lazy(() => import('pages/Home'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));
const Products = lazy(() => import('pages/Products'));
const Mission = lazy(() => import('pages/Mission'));
const Team = lazy(() => import('pages/Team'));
const Reviews = lazy(() => import('pages/Reviews'));

const App = () => {
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

export default App;
