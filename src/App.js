import './App.css';
import Head from './components/Head';
import ServicesSection from './components/ServicesSection';
import AboutMe from './components/AboutMe';
import MyPhotography from './components/MyPhotography';
import Reviews from './components/Reviews';
import CardsSection from './components/CardsSection';
import Message from './components/Message';
import Footer from './components/Footer';

function App() {
  return (
    <>

    <Head/>
    <ServicesSection/>
    <AboutMe />
    <MyPhotography/>
    <Reviews/>
    <CardsSection />
     <Message />
      <a href='#Home' className='scrollTop text-dark'>Sroll To Top<i class=" fs-3 ri-skip-up-line"></i></a> 
      <Footer/>
    </>
  );
}

export default App;
