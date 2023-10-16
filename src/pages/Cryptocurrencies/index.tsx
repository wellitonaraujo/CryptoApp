import { CryptocurrenciesProps } from "../../models/cryptocurrenciesProps";
import { CryptocurrenciesModel } from "../../models/cryptocurrencies";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, Col, Input, Row } from "antd";
import millify from "millify";

type Currency = CryptocurrenciesModel;

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {

  const count = simplified ? 100 : 10;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  const [searchCrypto, setSearchCrypto] = useState<string>('')
  const [criptos, setCriptos] = useState([]);

  const { data } = cryptoList || {};

  useEffect(() => {
    console.log(cryptoList?.data?.coins);

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
      {simplified && (
        <div className="search-crypto">
          <Input
            style={{ padding: 10 }}
            placeholder="Buscar criptomoeda..."
            onChange={handleSearchChange}
          />
        </div>
      )}

      <Row
        gutter={[32, 32]}
        className="crypto-card-container"
      >
        {criptos?.map((currency: Currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/*<Link to={`/coin/${currency.uuid}`}>*/}
            <Card
              title={`${currency.rank} - ${currency.name} `}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
            >
              <p>Preço: {millify(currency.price)}</p>
              <p>Valor de mercado: {millify(currency.marketCap)}%</p>
              <p>Alteração diária: {millify(currency.change)}</p>
            </Card>

            {/* </Link>*/}
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies;