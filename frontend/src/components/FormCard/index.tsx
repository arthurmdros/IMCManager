import axios, { AxiosRequestConfig } from 'axios';
import br from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';
import Navbar from 'components/NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/requests';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { cpfMask } from 'utils/cpfMask';

function FormCard() {
    const navigate = useNavigate();
    const [dateSelected, setDateSelected] = useState(new Date());
    const options = ["Sexo", "Masculino", "Feminino", "Prefiro não dizer", "Outro"];
    const [selected, setSelected] = useState('Sexo');
    const [cpf, setCPF] = useState('');

    function handleCPF(cpf: React.ChangeEvent<HTMLInputElement>) {
        setCPF(cpfMask(cpf.target.value));
    }

    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelected(selectedValue);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const cpf = (event.target as any).cpf.value;
        const data_nasc = dateSelected;
        var sexo = selected;
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
                            className='input-info'
                            type="text"
                            placeholder="Nome"
                            required
                            id="nome"
                        />
                        <input
                            className='input-info'
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            required
                            maxLength={14}
                            onChange={value => handleCPF(value)}
                            id="cpf"
                        />
                        <div className="field-group">

                            <div className="field">
                                <DatePicker
                                    locale={br}
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
                                    className='input-number'
                                    type="number"
                                    required
                                    step="0.01" min="0"
                                    placeholder="Altura"
                                    id="altura"
                                />
                            </div>
                            <div className="field">
                                <input
                                    className='input-number'
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