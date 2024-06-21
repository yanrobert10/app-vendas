import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { // fazendo que o componente tenha todos os outros elementos que um atributo comun 
    id:string;
    onChange?: ( value ) => void;
    label:string;
    columnClasses?: string;



}

export const Input: React.FC<InputProps> = ({
    onChange,
    id,
    label,
    columnClasses,
    ...inputProps




}: InputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
                    <label className="Label"  htmlFor= { id }>{ label }</label>
                    <div className="control">
                        <input 
                            className="input"  
                            id={ id }
                            { ...inputProps }
                            onChange={ event => {
                                if (onChange){
                                    onChange(event.target.value)
                                }
                            }}
                        />
                    </div>

                </div>
    )

}