import { CryptocurrenciesModel } from "../../models/cryptocurrencies";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";


type Currency = CryptocurrenciesModel;

interface CryptocurrenciesProps {
  simplified: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {

  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [searchCrypto, setSearchCrypto] = useState<string>('')
  const [criptos, setCriptos] = useState([]);

  const { data } = cryptoList || {};

  useEffect(() => {

    const filteredCoins = (data?.coins || []).filter((coin: Currency) => {
      return coin.name.toLowerCase().includes(searchCrypto.toLowerCase());
    });

    setCriptos(filteredCoins);

  }, [cryptoList, data?.coins, searchCrypto]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCrypto(event.target.value);
  };

  if (isFetching) return 'Carregando...'

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Buscar criptomoeda..." onChange={handleSearchChange} />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {criptos?.map((currency: Currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
              >
                <p>Preço: {millify(currency.price)}</p>
                <p>Valor de mercado: {millify(currency.marketCap)}%</p>
                <p>Alteração diária: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies;