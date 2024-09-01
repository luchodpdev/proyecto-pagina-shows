import './Header.css'
import './LDP-PNG.png'

export function Header () {

    return (
        <header className="header">
            <div>
                <strong className='title'>Lucho De Pasquale</strong>
                <img src='./pngwing.png' />
            </div>

            <div className='enlaces'>
            <input type='text' className='button'/>
            <a>Shows</a>
            <a>Albums</a>
            <a>Quien soy</a>
            <a>Contacto</a>
            </div>

        </header>
    )
}