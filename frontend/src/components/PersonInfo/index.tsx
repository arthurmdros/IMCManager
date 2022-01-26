import PopUpPeso from 'components/PopUp/PopUpPeso';
import PopUpIMC from 'components/PopUp/PopUpIMC';
import { FiUser } from "react-icons/fi";
import { useState } from 'react';
import { Persons } from 'types/Persons';
import { DateConvert } from 'utils/convertDate';
import { getPesoIdeal } from 'utils/getPesoIdeal';
import './styles.css';
import { Link } from 'react-router-dom';
import { hideCPF } from 'utils/hideCPF';

type Props = {
    person: Persons;
}
function PersonInfo({ person }: Props) {

    const [isPopUpPesoVisible, setIsPopUpPesoVisible] = useState(false);
    const togglePopUpPeso = () => {
        setIsPopUpPesoVisible(wasPopUpPesoVisible => !wasPopUpPesoVisible)
    }

    const [isPopUpIMCVisible, setIsPopUpIMCVisible] = useState(false);
    const togglePopUpIMC = () => {
        setIsPopUpIMCVisible(wasPopUpIMCVisible => !wasPopUpIMCVisible)
    }

    return (
        <div className='personInfo'>
            <div>
                <div className="info-group">
                    <h3>Nome:</h3>
                    <p>{person.nome}</p>
                </div>
                  <div className="info-group">
                    <h3>CPF:</h3>
                    <p>{hideCPF(person.cpf)}</p>
                </div>
                <div className="info-group">
                    <h3>Nascido em:</h3>
                    <p>{DateConvert(person.data_nasc)}</p>
                </div>
                <div className="info-group">
                    <h3>IMC:</h3>
                    <p>{person.classIMC.nome}</p>
                </div>
                <div className="weight-group">
                    <h3>Peso:</h3>
                    <p>{person.peso}</p>

                    <h3>Altura:</h3>
                    <p>{person.altura}</p>
                </div>
                <Link className="button-profile"  to={`/pessoas/update/${person.id}`}> Perfil
                    <FiUser size={18} color="#141F6A" />
                </Link>
                <div className="btn-group">
                    <button className='button-action' type="button" onClick={togglePopUpPeso}>Peso ideal</button>
                    <button className='button-action' type="button" onClick={togglePopUpIMC}>IMC</button>
                </div>

                <PopUpPeso isPopUpPesoVisible={isPopUpPesoVisible} onBackdropClick={togglePopUpPeso} message={getPesoIdeal(person.sexo, person.altura)} />
                <PopUpIMC isPopUpIMCVisible={isPopUpIMCVisible} onBackdropClick={togglePopUpIMC} person={person} />
            </div>
        </div>
    );
}

export default PersonInfo;