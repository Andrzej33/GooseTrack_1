import { Link } from 'react-router-dom';
import { Container } from './MainPage.styled';

const Home = () => {
  return (
    <Container>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Container>
  );
};

export default Home;
