import './styles.css';

function PersonInfo() {
    return (
        <div className='personInfo'>
            <div key="id">
                <h3>Nome:</h3>
                <p>"Fulano de tal"</p>

                <h3>Peso:</h3>
                <p>"86 kg"</p>

                <h3>Altura:</h3>
                <p>"1,85"</p>

                <button className="btn-peso" type="button">
                    Peso ideal
                </button>

                <button className="btn-imc" type="button">
                    IMC
                </button>
            </div>
        </div>
    );
}

export default PersonInfo;