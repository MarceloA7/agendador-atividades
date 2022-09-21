import BotaoStyles from './BotaoStyles.module.scss';

const Botao = ({children}:{children:string}) => {
    return (
        <div className={BotaoStyles.botao}>
            <button>{children}</button>
        </div>
    )
}

export default Botao