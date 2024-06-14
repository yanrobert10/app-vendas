 import { useState } from "react"
 import { Layout } from "components";

 export const CadastroProdutos: React.FC = () => {

    const [ sku, setSku ] = useState<string>('');
    const [ preco, setPreco ] = useState<string>('');
    const [ nome, setNome ] = useState<string>('');
    const [ descricao, setDescricao ] = useState<string>('');

    const submit = () => {
        const produto = {
            sku,
            preco,
            nome,
            descricao
        }

        console.log( produto );
    }


    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">
                <div className="field column is-half">
                    <label className="Label"  htmlFor="inputSku"> SKU: *</label>
                    <div className="control">
                        <input 
                            className="input"  
                            id="inputSku"
                            onChange={ event => setSku(event.target.value)}
                            placeholder="Digite o SKU do produto" 
                            value={ sku }

                        />
                    </div>

                </div>

                <div className="field column is-half">
                    <label className="Label"  htmlFor="inputPreco"> Preço: *</label>
                    <div className="control">
                        <input 
                            className="input"  
                            id="inputPreco"
                            onChange={ event => setPreco(event.target.value)}
                            placeholder="Digite o Preço do produto" 
                            value={ preco }
                        />
                    </div>

                </div>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label className="Label"  htmlFor="inputNome"> Nome: *</label>
                    <div className="control">
                        <input 
                            className="input"  
                            id="inputNome"
                            onChange={ event => setNome(event.target.value)}
                            placeholder="Digite o Nome do produto" 
                            value={ nome }
                        />
                    </div>

                </div>
                
            </div>

            <div className="columns">
            <div className="field column is-full">
                <label className="Label"  htmlFor="inputDescricao"> Descrição: *</label>
                <div className="control">
                    <textarea 
                        className="textarea"  
                        id="inputDescricao"
                        onChange={ event => setDescricao(event.target.value)}
                        placeholder="Digite a Descrição detalhada do produto" 
                        value={ descricao }
                    />
                </div>

            </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                <button 
                    className="button is-link"
                    onClick={ submit }
                >
                    Salvar
                </button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>

            </div>


        </Layout>
    )
 }