import Card from '../../Components/molecules/Card';
import Footer from '../../Components/molecules/Footer';
import Navbar from '../../Components/molecules/Navbar';
import Jumbotron from './child/Jumbotron';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto lg:max-w-[1200px]">
      <Jumbotron />
      <Card/>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
