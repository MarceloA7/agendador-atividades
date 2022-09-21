import CampoTimeStyles from './CampoTimeStyles.module.scss';

const CampoTime = ({label, setTempo, value}:{label:string, setTempo:React.Dispatch<React.SetStateAction<string>>, value:string}) => {
    return(
        <div className={CampoTimeStyles.campoTime}>
            <label>{label}</label>
            <input type="time" step="1" onChange={(evento) => setTempo(evento.target.value)} value={value}/>
        </div>
    )
}

export default CampoTime