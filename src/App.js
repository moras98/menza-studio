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
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from './routes/routes';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { i18n } = useTranslation('routes');
  const currentLanguage = i18n.language || 'es';
  const currentRoutes = routes[currentLanguage];

  useEffect(() => {
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

  if (!imagesLoaded && !i18n.isInitialized) {
    return (
      <Body>
        <Section isHalf={false}>
          <SectionContent centered={true}>
            <LoadingSpinner/>
          </SectionContent>
        </Section>
      </Body>
    );
  }

  return (
    <BrowserRouter basename='/menza-studio'>
      <Routes>
        <Route path={currentRoutes.home} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={currentRoutes.about} element={<About/>}/>
          <Route path={currentRoutes.services} element={<Services/>}/>
          <Route path={currentRoutes.contact} element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
