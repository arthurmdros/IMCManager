import React from "react";
import { cpfMask } from "utils/cpfMask";
import { DesktopPopUpCPFContainer, Header, BtnGroup } from "./PopUpCPF.styles";
import PopUpCPFWrapper from "./PoPUpCPFWrapper";
import "./styles.css";

interface PopUpCPFWrapperProps {
    isPopUpCPFVisible: boolean;
    onBackdropClick: () => void;
}

const PopUpCPF: React.FC<PopUpCPFWrapperProps> = ({ onBackdropClick, isPopUpCPFVisible }) => {
    if (!isPopUpCPFVisible) { return null }

    function deleteByCPF() {
        alert("Deletar registro");

        /*
            try {
                axios.delete(`${BASE_URL}/pessoas/${personId}`)
                    .then(response => {
                        alert("Registro deletado com sucesso!")
                        navigate("/");
                    });
            } catch (err) {
                alert('Erro ao deletar registro, tente novamente.');
            }
        */
    }

    return (
        <PopUpCPFWrapper onBackdropClick={() => { onBackdropClick() }}>
            <DesktopPopUpCPFContainer>
                <Header>
                    <h3>Informe seu CPF:</h3>
                    <input
                        className="input-info"
                        type="text"
                        placeholder="CPF"
                        required
                        maxLength={11}
                        onChange={value => cpfMask(value.toString())}
                        id="cpf"
                    />
                    <BtnGroup>
                        <button className="button-confirm" type="button" onClick={() => {deleteByCPF(); onBackdropClick()}}>Confirmar</button>
                        <button className="button-cancel" type="button" onClick={onBackdropClick}>Cancelar</button>
                    </BtnGroup>
                </Header>
            </DesktopPopUpCPFContainer>
        </PopUpCPFWrapper>
    );
}
export default PopUpCPF;