import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app.route';
import NavBar from './components/NavBar';
import { } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';


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
      </div>
    </Router>
  )
}

export default App
