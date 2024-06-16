import { on } from "stream";

interface InputProps {
    onChange?: ( value ) => void;
    label:string;
    columnClasses?: string;
    value:string;

}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    value,




}: InputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
                    <label className="Label"  htmlFor="inputSku">{label}</label>
                    <div className="control">
                        <input 
                            className="input"  
                            id="inputSku"
                            onChange={ event => {
                                if (onChange){
                                    onChange(event.target.value)
                                }
                            }}
                            placeholder="Digite o SKU do produto" 
                            value={ value }

                        />
                    </div>

                </div>
    )

}