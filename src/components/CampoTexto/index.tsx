import CampoTextoStyles from './CampoTextoStyles.module.scss'

const CampoTexto = ({label, setNome, value} : {label:string, setNome:React.Dispatch<React.SetStateAction<string>>, value:string}) => {
    return (
        <div className={CampoTextoStyles.campoTexto}>
            <label>{label}</label>
            <input type="text" onChange={(evento) => setNome(evento.target.value)} value={value}/>
        </div>
    )
}

export default CampoTexto