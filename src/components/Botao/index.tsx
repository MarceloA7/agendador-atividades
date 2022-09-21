import BotaoStyles from './BotaoStyles.module.scss';

const Botao = ({children, clicado}:{children:string, clicado?:() => void}) => {
    return (
        <div className={BotaoStyles.botao}>
            <button onClick={clicado}>{children}</button>
        </div>
    )
}

export default Botao