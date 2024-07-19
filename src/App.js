import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import Home from './routes/Home/Home';
import Body from './elements/Body/Body';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(()=>{
    const preloadImages = async () => {
      const imagePromises = [
        './assets/images/hero-section.jpg',
        './assets/images/about-section.jpg',
        './assets/images/about-content.jpg'
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
    return <Body></Body>;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='sobre-nosotros' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
