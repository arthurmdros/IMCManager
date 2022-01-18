import axios, { AxiosRequestConfig } from 'axios';
import Navbar from 'components/NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDateAtual } from 'utils/getDate';
import { BASE_URL } from 'utils/requests';
import './styles.css';

function FormCard() {
    const navigate = useNavigate();
    const [dataSelected, setDataSelected] = useState(new Date());
    const [dataNasc, setDataNasc] = useState(getDateAtual());
    const [options, setOptions] = useState(["Masculino", "Feminino", "Prefiro não dizer", "Outro"]);
    const [selected, setSelected] = useState('0');

    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedValue = event.target.value;

        setSelected(selectedValue);
    }

    const handleDateSelected = (event: React.ChangeEvent<HTMLInputElement>) => {

        setDataSelected(new Date(event.target.value));
        const dia = String(dataSelected.getDate()).padStart(2, '0');
        const mes = String(dataSelected.getMonth() + 1).padStart(2, '0');
        const ano = dataSelected.getFullYear();
        const data_nasc = ano + '-' + mes + '-' + dia;
        setDataNasc(data_nasc.toString());
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const cpf = (event.target as any).cpf.value;
        var sexo = (event.target as any).sexo.value;
        if (sexo === "Masculino") {
            sexo = "M";
        } else if (sexo === "Feminino") {
            sexo = "F";
        } else {
            sexo = "";
        }
        const peso = (event.target as any).peso.value;
        const altura = (event.target as any).altura.value;
        const classIMC = { id: 1 };

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/pessoas',
            data: {
                nome: nome,
                cpf: cpf,
                data_nasc: dataNasc,
                sexo: sexo,
                peso: peso,
                altura: altura,
                classIMC: classIMC
            }
        }

        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <>
            <Navbar link="/" label="Já possuo cadastro" />
            <div className="register-container">
                <div className="content">
                    <section>
                        <h1>Registro na plataforma</h1>
                        <p>Faça seu cadastro, entre na plataforma e calcule informações referentes a sua saúde corporal.</p>
                    </section>
                    <form onSubmit={handleSubmit}>
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
                                <input id="data_nasc" type="date"
                                    value={dataNasc}
                                    onChange={date => handleDateSelected(date)}
                                />
                            </div>
                            <div className="field">
                                <select className="select-input" id="sexo" placeholder='Sexo' onChange={e => handleSelected(e)}>
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
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
                        <button className="button" type="submit">Novo registro</button>
                    </form>
                </div >
            </div >
        </>
    );
}

export default FormCard;