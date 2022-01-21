import PopUpPeso from 'components/PopUp/PopUpPeso';
import PopUpIMC from 'components/PopUp/PopUpIMC';
import { useState } from 'react';
import { Persons } from 'types/Persons';
import { DateConvert } from 'utils/convertDate';
import { getPesoIdeal } from 'utils/getPesoIdeal';
import './styles.css';

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
                    <p>{person.cpf}</p>
                </div>
                <div className="info-group">
                    <h3>Data:</h3>
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
                <div className="btn-group">
                        <button type="button" onClick={togglePopUpPeso}>Peso ideal</button>
                        <button type="button" onClick={togglePopUpIMC}>IMC</button>                                                
                </div>
                
                <PopUpPeso isPopUpPesoVisible={isPopUpPesoVisible} onBackdropClick={togglePopUpPeso} message={getPesoIdeal(person.sexo, person.altura)} />               
                <PopUpIMC isPopUpIMCVisible={isPopUpIMCVisible} onBackdropClick={togglePopUpIMC} person={person}/>               
            </div>
        </div>
    );
}

export default PersonInfo;