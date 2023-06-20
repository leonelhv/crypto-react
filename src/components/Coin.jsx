import { IconTrendingDown, IconTrendingUp } from "../assets/svg/Icons";
import { currencyFormat } from "../utils/currencyFormat";




const Coin = ({ coin }) => {
    console.log(coin);
    return (

        <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-4 rounded border-gray-200 border-b hover:bg-gray-200/30 items-center">
            <div className="flex items-center gap-1 w-full">
                <img className="w-12 mr-2" src={coin.image} alt={coin.name} />
                <p>{coin.name}</p>
                <span className="text-xs">({coin.symbol})</span>
            </div>
            <span className="w-full text-center">{currencyFormat(coin.current_price)}</span>
            <span className={`flex gap-1 font-semibold ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                {coin.price_change_percentage_24h < 0 ? <IconTrendingDown /> : <IconTrendingUp />}
                {coin.price_change_percentage_24h}
            </span>
            <div className="hidden sm:block">
                <p className="font-semibold">Market Cap</p>
                <span>{currencyFormat(coin.market_cap)}</span>
            </div>
        </div>

    )
}

export default Coin