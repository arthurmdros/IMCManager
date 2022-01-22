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

type Props = {
    personId: string;
}

function UpdateCard({ personId }: Props) {
    const navigate = useNavigate();
    const [person, setPerson] = useState<Persons>();
    const [dateSelected, setDateSelected] = useState(new Date());
    const options = ["Sexo", "Masculino", "Feminino", "Prefiro não dizer", "Outro"];
    const [selected, setSelected] = useState('');

    useEffect(() => {
        axios.get(`${BASE_URL}/pessoas/${personId}`)
            .then(response => {
                setPerson(response.data);            
            });
    }, [personId]);


    const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelected(selectedValue);
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
                    <form>
                        <input
                            className='input-info'
                            type="text"
                            placeholder="Nome"
                            required
                            id="nome"
                            value={person?.nome}
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
                                    value={person?.altura}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="number"
                                    required
                                    step="0.01" min="0"
                                    placeholder="Peso"
                                    id="peso"
                                    value={person?.peso}
                                />
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="button-update" type="submit">Atualizar informações</button>
                            <button className="button-delete" type="button" onClick={() => alert("Deletar")}>Deletar registro</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default UpdateCard;