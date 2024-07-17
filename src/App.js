import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './routes/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
