import './styles.css';

function PersonInfo() {
    return (
        <div className='personInfo'>
            <div key="id">
                
            <div className="info-group">
                <h3>Nome:</h3>
                <p>Fulano de tal</p>
                </div>
                <div className="weight-group">
                    <h3>Peso:</h3>
                    <p>86 kg</p>
                </div>
                <div className="height-group">
                    <h3>Altura:</h3>
                    <p>1,85</p>
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