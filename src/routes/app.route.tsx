import Cryptocurrencies from '../pages/Cryptocurrencies';
import CryptoDetails from '../pages/CryptoDetails';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/cryptocurrencies' element={<Cryptocurrencies simplified />} />
        <Route path='/cryptoDetails' element={<CryptoDetails />} />
      </Routes>
    </>
  )
}

export default AppRoutes;