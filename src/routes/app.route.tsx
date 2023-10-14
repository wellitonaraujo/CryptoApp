import { Route, Routes } from 'react-router-dom';

import Cryptocurrencies from '../pages/Cryptocurrencies';
import CryptoDetails from '../pages/CryptoDetails';
import Exchanges from '../pages/Exchanges';
import Home from '../pages/Home';
import News from '../pages/News';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        <Route path='/cryptoDetails' element={<CryptoDetails />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </>
  )
}

export default AppRoutes;