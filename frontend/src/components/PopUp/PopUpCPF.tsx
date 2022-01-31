import axios from "axios";
import React from "react";
import { BASE_URL } from "utils/requests";
import { DesktopPopUpCPFContainer, Header, BtnGroup } from "./PopUpCPF.styles";
import PopUpCPFWrapper from "./PoPUpCPFWrapper";
import "./styles.css";

interface PopUpCPFWrapperProps {
    isPopUpCPFVisible: boolean;
    onBackdropClick: () => void;
    cpfUser: string;
    personId: string;
}

const PopUpCPF: React.FC<PopUpCPFWrapperProps> = ({ onBackdropClick, isPopUpCPFVisible, cpfUser, personId }) => {
    if (!isPopUpCPFVisible) { return null }

    function handleCPF(cpf: React.FocusEvent<HTMLInputElement, Element>) {
        const elementoAlvo = cpf;
        const cpfAtual = cpf.target.value;

        let cpfAtualizado;

        cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            function (regex, argumento1, argumento2, argumento3, argumento4) {
                return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
            })
        elementoAlvo.target.value = cpfAtualizado.toString();
    }

    function deleteByCPF(event: React.FormEvent<HTMLFormElement>) {
        const cpfValidate = (event.target as any).cpf.value;
        if (cpfValidate === cpfUser) { 
            axios.delete(`${BASE_URL}/pessoas/${personId}`)
                    .then(response => {
                        alert("Registro deletado com sucesso!");
                        onBackdropClick();
                    });
        }else { 
            alert('Erro ao deletar registro, tente novamente.');
        }
    }

    return (
        <PopUpCPFWrapper onBackdropClick={() => { onBackdropClick() }}>
            <DesktopPopUpCPFContainer>
                <Header>
                    <form onSubmit={deleteByCPF}>
                        <h3>Informe seu CPF (somente números):</h3>
                        <input
                            className="input-info"
                            type="text"
                            placeholder="CPF"
                            required
                            maxLength={11}
                            onBlur={value => handleCPF(value)}
                            id="cpf"
                        />
                        <BtnGroup>
                            <button className="button-confirm" type="submit">Confirmar</button>
                            <button className="button-cancel" type="button" onClick={onBackdropClick}>Cancelar</button>
                        </BtnGroup>
                    </form>
                </Header>
            </DesktopPopUpCPFContainer>
        </PopUpCPFWrapper>
    );
}
export default PopUpCPF;
