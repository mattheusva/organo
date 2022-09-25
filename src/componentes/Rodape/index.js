import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='ícone facebook'></img>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='ícone twitter'></img>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='ícone instagram'></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>Desenvolvido por Matheus</p>
            </section>
        </footer>
    )
}

export default Rodape;