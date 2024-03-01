import { Container, Header, Logo, Link } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Sharedlayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense fallback={<h1>Loading page ...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Sharedlayout;
