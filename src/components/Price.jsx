export default function Price ({ data }) {
    return (
        <div className="text-white">
            <p className="text-xl font-bold">El precio es: <span className="text-green-500">{data.PRICE}</span></p>
            <p>Precio más alto del día: <span className="text-green-500">{data.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span className="text-green-500">{data.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span className="text-green-500">{data.CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización: <span className="text-red-500">{data.LASTUPDATE}</span></p>
        </div>
    )
}