
interface MensagemProps {
    mensagem: string;
}

const Mensagem: React.FC<MensagemProps> = (props: any) => {
    return(
        <div>
            { props.mensagem}
        </div>
    )

}



const MeuComponente = () => {
    return (
        <div>
            <Mensagem mensagem= "Meu Componente"/>
        </div>

    )

}

export default MeuComponente;