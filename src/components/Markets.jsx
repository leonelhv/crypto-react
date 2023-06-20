import { useState } from "react"
// import { getMarkets } from "../services/crypto_api"
import Coin from "./Coin"
import { useEffect } from "react"
import marketsJSON from "../mocks/markets.json"

export default function Markets () {

    const [markets, setMarkets] = useState([])


    useEffect(() => {

        // getMarkets().then(setMarkets)
        setMarkets(marketsJSON)

    }, [])

    return (
        <div className="rounded-lg overflow-hidden w-full border">
            <h2 className="p-4 text-3xl font-semibold bg-black  text-white border-b">Markets</h2>
            <div className=" flex flex-col backdrop-blur-sm bg-black text-white max-h-screen overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {
                    markets.map((market) => (
                        <Coin coin={market} key={market.id} />
                    ))}

            </div>
        </div>
    )
}