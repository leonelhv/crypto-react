import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default function ChartCrypto ({ currency, crypto }) {
    const [coinChartData, setCoinChartData] = useState([]);

    useEffect(() => {
        const getMarketChart = () => {
            fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=7`)
                .then(response => response.json())
                .then(res => {
                    const coinChartData = res.prices.map(item => ({ x: item[0], y: item[1].toFixed(2) }));
                    setCoinChartData(coinChartData);
                })
                .catch(error => {
                    console.error('Error fetching market chart data:', error);
                });
        };

        getMarketChart();
    }, []);

    const options = {
        responsive: true,
    };

    const data = {
        labels: coinChartData.map(val => dayjs(val.x).format('MMM/DD')),
        datasets: [
            {
                fill: true,
                label: 'Matic Network',
                data: coinChartData.map(val => val.y),
                borderColor: 'rgba(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            {coinChartData.length > 0 ? (
                <Line options={options} data={data} />
            ) : (
                <p>Loading chart data...</p>
            )}
        </>
    );
}
