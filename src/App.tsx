import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import { Layout, Typography } from 'antd';
import { } from 'react-router-dom';
import AppRoutes from './routes/app.route';

function App() {

  return (
    <Router>
      <div className='app'>
        <div className='navbar'>
          <NavBar />
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <AppRoutes />
            </div>
          </Layout>
        </div>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoApp <br />
            Todos os direitos
          </Typography.Title>
        </div>

      </div>
    </Router>
  )
}

export default App
