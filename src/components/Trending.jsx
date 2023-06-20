import { useState, useEffect } from "react"


import { getTrendingCryptos } from "../services/crypto_api"

export default function Trending () {

    const [trendingCryptos, setTrendingCryptos] = useState([])

    useEffect(() => {

        getTrendingCryptos().then(setTrendingCryptos)

    }, [])

    return (
        <div className="rounded-lg overflow-hidden border w-full max-w-max h-max">
            <h2 className="p-4 text-3xl font-semibold bg-black  text-white">Trending</h2>
            <div className="flex flex-col backdrop-blur-sm bg-zinc-950/75 text-white">
                {trendingCryptos.map((crypto, index) => {
                    const { id, small, name, symbol } = crypto.item
                    return (
                        <div key={id} className="border  hover:bg-gray-200/30 transition-all px-4">
                            <div className="flex gap-3">
                                <div className="p-3">
                                    <img src={small} alt="" />
                                </div>
                                <div className="flex gap-1 items-center ">
                                    <h2>{index + 1}. {name}</h2>
                                    <span>({symbol})</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}