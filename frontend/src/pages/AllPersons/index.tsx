import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import Navbar from "components/NavBar";
import PersonInfo from "components/PersonInfo";
import "./styles.css";
import { ContentPersons } from "types/Persons";

function AllPersons() {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<ContentPersons>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

useEffect(() => {
    axios.get(`${BASE_URL}/pessoas`)
        .then(response => {
            const data = response.data as ContentPersons;
            setPage(data);
        });
}, [page]);

return (
    <>
        <Navbar link="/pessoas/form" label="Faça seu cadastro" />
        <div className="container">
            <h1>Pessoas cadastradas</h1>
            <div className="row">
                {page.content.map(person => (
                    <div key={person.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <PersonInfo person={person} />
                    </div>
                ))}
            </div>
        </div>
    </>
);
}

export default AllPersons;