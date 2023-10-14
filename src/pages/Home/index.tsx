import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "../Cryptocurrencies";
import News from "../News";

const { Title } = Typography;


const Home = () => {
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$ 5`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$ 6`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={`$ 7`} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={`$ 7`} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News />
    </>
  )
}

export default Home;