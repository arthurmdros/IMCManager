import React from "react";
import { DesktopPopUpIMCContainer, Header } from "./PopUpIMC.styles";
import PopUpIMCWrapper from "./PopUpIMCWrapper";

interface PopUpIMCWrapperProps {
    isPopUpIMCVisible: boolean;
    onBackdropClick: () => void;
    message: string;
}

const PopUpIMC: React.FC<PopUpIMCWrapperProps> = ({ onBackdropClick, isPopUpIMCVisible, message }) => {
    if (!isPopUpIMCVisible) { return null }

    return (
        <PopUpIMCWrapper onBackdropClick={onBackdropClick}>
            <DesktopPopUpIMCContainer>
                <Header>
                    O resultado é: {message}
                </Header>
            </DesktopPopUpIMCContainer>
        </PopUpIMCWrapper>
    );
}
export default PopUpIMC;