import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <header>
      <Header />
      <Nav />
    </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
