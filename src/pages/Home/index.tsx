import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Typography, Row, Col, Statistic } from "antd";
import { GlobalStats } from "../../models/globalStats";
import Cryptocurrencies from "../Cryptocurrencies";
import { Link } from "react-router-dom";

const { Title } = Typography;

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);

  const {
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    total,
    totalMarkets
  } = data?.data?.stats || {} as GlobalStats;

  if (isFetching) return 'Carregando...'

  return (
    <>
      <Title level={2} className="heading">Estatísticas Global de Crypto</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total de criptomoedas" value={total} /></Col>
        <Col span={12}><Statistic title="Total de Exchanges" value={totalExchanges} /></Col>
        <Col span={12}><Statistic title="Valor total de mercado" value={totalMarketCap} /></Col>
        <Col span={12}><Statistic title="Volume Total 24h" value={total24hVolume} /></Col>
        <Col span={12}><Statistic title="Mercados totais" value={totalMarkets} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">As 10 principais criptomoedas do mundo</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Ver mais</Link></Title>
      </div>

      <Cryptocurrencies simplified={false} />

    </>
  )
}

export default Home;