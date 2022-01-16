function FormCard() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e calcule informações referentes a sua saúde corporal.</p>
                    <a href="/">
                        Já possuo cadastro
                    </a>
                </section>
                <form>
                    <input
                        placeholder="Nome"
                        value="nome"
                    />
                    <input
                        placeholder="Data de nascimento"
                        value="data_nasc"
                    />
                    <input
                        placeholder="CPF"
                        value="cpf"
                    />
                    <input
                        placeholder="Altura"
                        value="altura"
                    />
                    <input
                        placeholder="Peso"
                        value="peso"
                    />
                    <div className="input-group">
                        <button className="button" type="submit">Peso ideal</button>
                        <button className="button" type="submit">Seu IMC</button>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default FormCard;