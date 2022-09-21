import { Tempo } from "../../../utils/Tempo";
import RelogioStyles from "./RelogioStyles.module.scss"
interface Props {
    label:string
    valorRelogio:number
}
const Relogio = ({label, valorRelogio}:Props) =>{
    return (
        <>
            <div className={RelogioStyles.label}>
                <label>{label}</label>
            </div>
            <div className={RelogioStyles.relogio}>
                <span>{Tempo.segundosEmHoraMinutosSegundos(valorRelogio)}</span>
            </div>
        </>

    );
}

export default Relogio