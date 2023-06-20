import { useState } from "react"
import MatrixEffect from "./components/MatrixEffect"
import { useEffect } from "react"
import { COINS } from "./consts/coins"
import Price from "./components/Price"
import ChartCrypto from "./components/ChartCrypto"

function App () {

  const [cryptos, setCryptos] = useState([])
  const [coins] = useState(() => COINS)
  const [cryptoInfo, setCryptoInfo] = useState(null)


  const [cryptoSelected, setCryptoSelected] = useState(null)
  const [coinSelected, setCoinSelected] = useState(null)

  useEffect(() => {

    const getApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url)
      const data = await response.json()
      setCryptos(data.Data)
    }
    getApi()

  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`
    const response = await fetch(url)
    const data = await response.json()
    setCryptoInfo(data['DISPLAY'][cryptoSelected][coinSelected])
  }

  const handleCryptoSelected = (e) => {
    setCryptoSelected(e.target.value)
    setCryptoInfo(null)
  }

  const handleCoinSelected = (e) => {
    setCoinSelected(e.target.value)
    setCryptoInfo(null)
  }



  return (
    <div className="w-full min-h-screen relative bg-black flex justify-center items-center overflow-x-hidden">
      <MatrixEffect />
      <div className="flex flex-col justify-center items-center relative z-10 bg-gray-800 max-w-6xl p-4 px-8 my-6 rounded-lg ">

        <div className="flex flex-col gap-8 lg:flex-row">
          <div>
            <h1 className="text-white text-3xl font-bold my-6 text-center">Cotizador de criptomendas</h1>
            <img src="/cryptos.png" alt="" className="w-96 h-auto object-cover" />
          </div>
          <form action="" className="flex flex-col gap-4 justify-center" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-4">
              <span className="text-white">Elige tu criptomoneda</span>
              <select name="" id="" className="block w-full p-2" onChange={handleCryptoSelected}>
                <option value="">- Elige -</option>
                {cryptos.map(crypto => (
                  <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}
              </select>
            </label>

            <label htmlFor="" className="flex flex-col gap-4">
              <span className="text-white">Elige tu moneda</span>
              <select name="" id="" className="block w-full p-2" onChange={handleCoinSelected}>
                <option value="">- Elige -</option>
                {coins.map(coin => (
                  <option key={coin.code} value={coin.code}>{coin.name}</option>
                ))}
              </select>
            </label>

            <button className="bg-black text-white py-2 px-4 rounded-lg">Obtener Información</button>
          </form>
          <div className="flex justify-center items-center my-12 flex-col">

            {cryptoInfo && <>
              <h2 className="text-center text-white text-3xl font-bold mb-6"> {cryptoSelected} - {coinSelected}</h2>
              <Price data={cryptoInfo} />
              <img src={`https://www.cryptocompare.com/${cryptoInfo.IMAGEURL}`} alt="" className="w-24 mt-6" />

            </>}
          </div>

        </div>

        {cryptoInfo &&
          <div className="w-full">
            <ChartCrypto crypto={"chiliz"} currency={coinSelected} />
          </div>
        }

      </div>
    </div>
  )
}

export default App
