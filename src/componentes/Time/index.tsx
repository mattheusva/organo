import { IColaborador } from '../../compartilhado/interface/IColaborador';
import Colaborador from '../Colaborador';
import './Time.css';

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    return (
        (props.colaboradores.length > 0) && <section className='Time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => <Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}/> 
                    )}
            </div>
        </section>
    )
}

export default Time;