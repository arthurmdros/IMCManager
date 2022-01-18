import { Persons } from 'types/Persons';
import { DateConvert } from 'utils/convertDate';
import './styles.css';

type Props = {
    person: Persons;
}
function PersonInfo({ person }: Props) {

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
                    <button type="button">
                        Peso ideal
                    </button>
                    <button type="button">
                        IMC
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PersonInfo;