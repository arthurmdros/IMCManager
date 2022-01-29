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

type Props = {
    personId: string;
}

function UpdateCard({ personId }: Props) {
    const navigate = useNavigate();
    const [person, setPerson] = useState<Persons>();
    const [nome, setNome] = useState("");
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [dateSelected, setDateSelected] = useState(new Date());
    const options = ["Sexo", "Masculino", "Feminino", "Prefiro não dizer", "Outro"];
    const [selected, setSelected] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}/pessoas/${personId}`)
            .then(response => {
                setPerson(response.data);    
                setNome(response.data.nome);
                setAltura(response.data.altura);
                setPeso(response.data.peso);
            });
    }, [personId]);


    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelected(selectedValue);
    }  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const cpf = person?.cpf; 
        const data_nasc = person?.data_nasc;
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
                                    id="data"
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
                                    type="number"
                                    required
                                    step="0.01" min="0"
                                    placeholder="Altura"
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
                                    placeholder="Peso"
                                    id="peso"
                                    value={peso}
                                    onChange={e => setPeso(e.target.value as unknown as number)}
                                />
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="button-update" type="submit">Atualizar informações</button>
                            <button className="button-delete" type="button" onClick={togglePopUpCPF}>Deletar registro</button>                            
                            <PopUpCPF isPopUpCPFVisible={isPopUpCPFVisible} onBackdropClick={togglePopUpCPF}/>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default UpdateCard;