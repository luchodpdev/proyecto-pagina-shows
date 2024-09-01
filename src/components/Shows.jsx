import { shows } from '../mocks/shows.json'
import './Shows.css'

export function Shows () {
   
    return (
        <section className='shows-container'>
            <ul className='shows-container-shows'>
                {shows.map(show => (
                    <li key='show.id' className='shows-show'>
                        <h3>{show.placeName}</h3>
                        <img src={show.thumbnails} alt={show.alt} />
                        <div className='show-info'>
                            <p>🎫 Entrada: €{show.entrance}</p>
                            <p>⛔ Aforo: {show.aforo} personas</p>
                            <p>📅 Fecha: {show.date}</p>
                            <p>🕥 Hora: {show.time}</p>
                            <p>🌍 Dirección: {show.adress}</p>
                        </div>

                        <button>Compra tu entrada</button>

                    </li>
                ))}
            </ul>
        </section>
    )
}