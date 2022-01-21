import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import { Persons } from "types/Persons";
import { getIMC } from "utils/getIMC";
import { BASE_URL } from "utils/requests";
import { DesktopPopUpIMCContainer, Header } from "./PopUpIMC.styles";
import PopUpIMCWrapper from "./PopUpIMCWrapper";

interface PopUpIMCWrapperProps {
    isPopUpIMCVisible: boolean;
    onBackdropClick: () => void;
    person: Persons;
}

const PopUpIMC: React.FC<PopUpIMCWrapperProps> = ({ onBackdropClick, isPopUpIMCVisible, person }) => {  
    if (!isPopUpIMCVisible) { return null }

    function handleClassIMC() {
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: `/pessoas/${person.id}/classIMC`,
            data: {
                classIMC: person.classIMC
            }
        }

        axios(config);
    }

    const resultIMC = +getIMC(person.peso, person.altura);
    var resultClassIMC = "";

    if (resultIMC < 18.5) {
        person.classIMC.id = 2;
        resultClassIMC = "Magreza";
    } else if (resultIMC > 18.5 && resultIMC < 24.9) {
        person.classIMC.id = 3;
        resultClassIMC = "Normal";
    } else if (resultIMC > 24.9 && resultIMC < 29.9) {
        person.classIMC.id = 4;
        resultClassIMC = "Sobrepeso";
    } else if (resultIMC > 29.9 && resultIMC < 34.9) {
        person.classIMC.id = 5;
        resultClassIMC = "Obesidade grau I";
    } else if (resultIMC > 34.9 && resultIMC < 39.9) {
        person.classIMC.id = 6;
        resultClassIMC = "Obesidade grau II";
    } else if (resultIMC > 39.9) {
        person.classIMC.id = 7;
        resultClassIMC = "Obesidade grau III";
    }

    return (
        <PopUpIMCWrapper onBackdropClick={() => {onBackdropClick(); handleClassIMC()}}>
            <DesktopPopUpIMCContainer>
                <Header>
                    O resultado foi: <p>{resultIMC} - {resultClassIMC}</p>
                </Header>
            </DesktopPopUpIMCContainer>
        </PopUpIMCWrapper>
    );
}
export default PopUpIMC;