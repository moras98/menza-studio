import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import Home from './routes/Home/Home';
import Body from './elements/Body/Body';
import About from './routes/About/About';
import Services from './routes/Services/Services';
import Contact from './routes/Contact/Contact';
import LoadingSpinner from './elements/LoadingSpinner/LoadingSpinner';
import Section from './elements/Section/Section';
import SectionContent from './elements/SectionConrent/SectionContent';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(()=>{
    const preloadImages = async () => {
      const imagePromises = [
        '/menza-studio/assets/images/hero-section.jpg',
        '/menza-studio/assets/images/about-section.jpg',
        '/menza-studio/assets/images/about-content.jpg'
      ].map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(imagePromises);

      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  if (!imagesLoaded) {
    return <Body>
      <Section isHalf={false}>
        <SectionContent centered={true}>
          <LoadingSpinner/>
        </SectionContent>
      </Section>
    </Body>;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='sobre-nosotros' element={<About/>}/>
        <Route path='servicios' element={<Services/>}/>
        <Route path='contacto' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
