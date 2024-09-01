import './Header.css'
import './LDP-PNG.png'

export function Header () {

    return (
        <header className="header">
            <div>
                <strong>Lucho De Pasquale</strong>
                <img src='./pngwing.png' />
            </div>

            <div>
            <a>Shows</a>
            <a>Albums</a>
            <a>Quien soy</a>
            <a>Contacto</a>
            </div>

        </header>
    )
}