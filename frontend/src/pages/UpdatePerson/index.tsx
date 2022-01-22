import UpdateCard from "components/UpdateCard";
import { useParams } from "react-router-dom";

function UpdatePerson(){
    const params = useParams();

    return(
        <UpdateCard personId={`${params.personId}`}/>
    );
}

export default UpdatePerson;