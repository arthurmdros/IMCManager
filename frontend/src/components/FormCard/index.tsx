import axios, { AxiosRequestConfig } from 'axios';
import DatePicker from 'react-datepicker';
import Navbar from 'components/NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDateAtual } from 'utils/getDate';
import { BASE_URL } from 'utils/requests';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { DateConvertAnother } from 'utils/convertDate';

function FormCard() {
    const navigate = useNavigate();
    const [dateSelected, setDateSelected] = useState(new Date());
    const [dataNasc, setDataNasc] = useState("");
    const [options, setOptions] = useState(["Masculino", "Feminino", "Prefiro não dizer", "Outro"]);
    const [selected, setSelected] = useState('0');

    function formataCPF(cpf: React.FocusEvent<HTMLInputElement, Element>) {
        const elementoAlvo = cpf;
        const cpfAtual = cpf.target.value;

        let cpfAtualizado;

        cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            function (regex, argumento1, argumento2, argumento3, argumento4) {
                return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
            })
        elementoAlvo.target.value = cpfAtualizado.toString();
    }

    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelected(selectedValue);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const cpf = (event.target as any).cpf.value;
        const date = (event.target as any).data.value;        
        const data_nasc = DateConvertAnother(date);
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
                data_nasc: data_nasc,
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
                            required
                            id="nome"
                        />
                        <input

                            type="text"
                            placeholder="CPF"
                            required
                            onBlur={value => formataCPF(value)}
                            id="cpf"
                        />
                        <div className="field-group">

                            <div className="field">
                                <DatePicker
                                    id="data"
                                    selected={dateSelected}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={date => date && setDateSelected(date)}
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
                                    required
                                    step="0.01" min="0"
                                    placeholder="Altura"
                                    id="altura"
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="number"
                                    required
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