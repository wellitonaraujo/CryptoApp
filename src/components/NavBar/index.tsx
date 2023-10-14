import { HomeOutlined, MoneyCollectOutlined, FundOutlined, BuildOutlined } from '@ant-design/icons';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

import icon from '../../assets/cryptocurrencies.png';

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
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>

        <Menu.Item icon={<BuildOutlined />}>
          <Link to='/news'>Nens</Link>
        </Menu.Item>
      </Menu>

    </div>
  )
}

export default NavBar