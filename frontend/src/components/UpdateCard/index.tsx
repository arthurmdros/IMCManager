import axios, { AxiosRequestConfig } from 'axios';
import br from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';
import Navbar from 'components/NavBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/requests';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { Persons } from 'types/Persons';
import PopUpCPF from 'components/PopUp/PopUpCPF';
import { DateConvert } from 'utils/convertDate';

type Props = {
    personId: string;
}

function UpdateCard({ personId }: Props) {
    const navigate = useNavigate();
    const [person, setPerson] = useState<Persons>();
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [dateSelected, setDateSelected] = useState(new Date());
    const [data_nasc, setData_nasc] = useState("");
    const options = ["Masculino", "Feminino", "Prefiro não dizer", "Outro"];
    const [selected, setSelected] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}/pessoas/${personId}`)
            .then(response => {
                setPerson(response.data);
                setNome(response.data.nome);
                setData_nasc(DateConvert(response.data.data_nasc));
                if (response.data.sexo === "M") {
                    setSelected("Masculino");
                } else if (response.data.sexo === "F") {
                    setSelected("Feminino");
                } else {
                    setSelected("Outro");
                }
                setCPF(response.data.cpf);
                setAltura(response.data.altura);
                setPeso(response.data.peso);
            });
    }, [personId]);


    const DatePickerSelect = (date: Date) => {    
        setDateSelected(date);
        const day = date.getDate();   
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();   
        setData_nasc(`${day}/${month}/${year}`);   
    }

    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelected(selectedValue);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const cpf = person?.cpf;
        const data_nasc = dateSelected;
        var sexo = selected;
        if (sexo === "Masculino") {
            sexo = "M";
        } else if (sexo === "Feminino") {
            sexo = "F";
        } else {
            sexo = "";
        }
        const classIMC = person?.classIMC;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: `/pessoas/${personId}`,
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

    const [isPopUpCPFVisible, setIsPopUpCPFVisible] = useState(false);
    const togglePopUpCPF = () => {
        setIsPopUpCPFVisible(wasPopUpCPFVisible => !wasPopUpCPFVisible)
    }

    return (
        <>
            <Navbar link="/" label="Retornar para home" />
            <div className="register-container">
                <div className="content">
                    <section>
                        <h1>Atualizar dados</h1>
                        <p>Aqui você pode atualizar seus dados cadastrais na plataforma ou apagá-los.</p>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='input-info'
                            type="text"
                            placeholder="Nome"
                            required
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        <div className="field-group">

                            <div className="field">
                                <DatePicker
                                    locale={br}
                                    selected={dateSelected}
                                    onChange={date => date && DatePickerSelect(date)}
                                    dateFormat="dd/MM/yyyy"
                                    value={data_nasc}
                                />
                            </div>
                            <div className="field">
                                <select className="select-input" id="sexo" placeholder='Sexo' onChange={e => handleSelected(e)}>
                                    <option selected disabled hidden>{selected}</option>
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
                                    placeholder="Altura (m)"
                                    id="altura"
                                    value={altura}
                                    onChange={e => setAltura(e.target.value as unknown as number)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="number"
                                    required
                                    step="0.01" min="0"
                                    placeholder="Peso (kg)"
                                    id="peso"
                                    value={peso}
                                    onChange={e => setPeso(e.target.value as unknown as number)}
                                />
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="button-update" type="submit">Atualizar informações</button>
                            <button className="button-delete" type="button" onClick={togglePopUpCPF}>Deletar registro</button>
                            <PopUpCPF isPopUpCPFVisible={isPopUpCPFVisible} onBackdropClick={togglePopUpCPF} cpfUser={cpf} personId={personId} />
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default UpdateCard;