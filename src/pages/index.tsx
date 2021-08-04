import React from 'react';
import Footer from '../components/Footer/Footer';
import HomeBlockFour from '../components/Home/HomeBlockFour/HomeBlockFour';
import HomeBlockOne from '../components/Home/HomeBlockOne/HomeBlockOne';
import HomeBlockThree from '../components/Home/HomeBlockThree/HomeBlockThree';
import HomeBlockTwo from '../components/Home/HomeBlockTwo/HomeBlockTwo';
import SeoComponent from '../components/SeoComponent/SeoComponent';

const Home: React.FC = () => {
  return (
    <main>
      <SeoComponent
        title="Palest"
        desc="Conheça mais um template da prodbase feito para te inspirar!!"
        keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://palest.prodbase.com.br/"
      />
      <HomeBlockOne />
      <HomeBlockTwo />
      <HomeBlockThree />
      <HomeBlockFour />
      <Footer />
    </main>
  )
}

export default Home;