import './styles.css';

function FormCard() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Registro na plataforma</h1>
                    <p>Faça seu cadastro, entre na plataforma e calcule informações referentes a sua saúde corporal.</p>                    
                </section>
                <form>
                    <input
                        placeholder="Nome"
                        value="nome"
                    />
                    <input
                        placeholder="CPF"
                        value="cpf"
                    />
                    <div className="field-group">

                        <div className="field">
                            <input
                                placeholder="Data de nascimento"
                                value="data_nasc"
                            />
                        </div>
                        <div className="field">
                            <select className="select-input" id="sexo" placeholder='Sexo'>
                                <option>Masculino</option>
                                <option>Feminino</option>
                                <option>Prefiro não dizer</option>
                                <option>Outro</option>
                            </select>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <input
                                placeholder="Altura"
                                value="altura"
                            />
                        </div>
                        <div className="field">
                            <input
                                placeholder="Peso"
                                value="peso"
                            />
                        </div>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div >
        </div >
    );
}

export default FormCard;