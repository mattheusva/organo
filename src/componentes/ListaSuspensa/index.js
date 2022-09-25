import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                <option value=""></option>
            </select>
        </div>
    )
}

export default ListaSuspensa;