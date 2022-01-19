import React from "react";
import { DesktopPopUpPesoContainer, Header } from "./PopUpPeso.styles";
import PopUpWrapper from "./PopUpPesoWrapper";

interface PopUpPesoWrapperProps {
    isPopUpPesoVisible: boolean;
    onBackdropClick: () => void;
    message: string;
}

const PopUpPeso: React.FC<PopUpPesoWrapperProps> = ({ onBackdropClick, isPopUpPesoVisible, message }) => {
    if (!isPopUpPesoVisible) { return null }

    return (
        <PopUpWrapper onBackdropClick={onBackdropClick}>
            <DesktopPopUpPesoContainer>
                <Header>
                    O resultado é: {message}
                </Header>
            </DesktopPopUpPesoContainer>
        </PopUpWrapper>
    );
}
export default PopUpPeso;