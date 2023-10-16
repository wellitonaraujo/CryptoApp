import { HomeOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../../assets/cryptocurrencies.png';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav-container'>

      <div className='logo-container'>
        <Avatar src={icon} size="large" />

        <Typography.Title level={2} className='logo'>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>

      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to='/'>Início</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Criptomoedas</Link>
        </Menu.Item>
      </Menu>

    </div>
  )
}

export default NavBar