import Navbar from 'components/NavBar';
import './styles.css';

function getDateAtual() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;
    return dataAtual.toString();

}

function FormCard() {
    return (
        <>
            <Navbar link="/" label="Já possuo cadastro" />
            <div className="register-container">
                <div className="content">
                    <section>
                        <h1>Registro na plataforma</h1>
                        <p>Faça seu cadastro, entre na plataforma e calcule informações referentes a sua saúde corporal.</p>
                    </section>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome"
                            id="nome"
                        />
                        <input

                            type="text"
                            placeholder="CPF"
                            id="cpf"
                        />
                        <div className="field-group">

                            <div className="field">
                                <input id="date" type="date"
                                    value={getDateAtual()}
                                />
                            </div>
                            <div className="field">
                                <select className="select-input" id="sexo" placeholder='Sexo'>
                                    <option value="" selected disabled hidden>Sexo</option>
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
                                    type="number"
                                    step="0.01" min="0"
                                    placeholder="Altura"
                                    id="altura"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="number"
                                    step="0.01" min="0"
                                    placeholder="Peso"
                                    id="peso"
                                />
                            </div>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div >
            </div >
        </>
    );
}

export default FormCard;