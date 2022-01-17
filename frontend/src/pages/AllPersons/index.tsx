import PersonInfo from "components/PersonInfo";
import "./styles.css";

function AllPersons() {

    return (
        <div className="container">
            <h1>Pessoas cadastradas</h1>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <PersonInfo />
                </div>
            </div>
        </div>
    );
}

export default AllPersons;