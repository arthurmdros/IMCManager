import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface PopUpIMCProps {
    onBackdropClick: () => void;
}

const Overlay = styled.div`
background-color: rgba(0,0,0,0.5);
position: fixed;
height: 100%;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;

const PopUpIMCWrapper: React.FC<PopUpIMCProps> = ({ onBackdropClick, children }) => {
    return ReactDOM.createPortal(
        <Overlay onClick={onBackdropClick}>
            <div onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </Overlay>, document.getElementById('popup-root')!
    );
}

export default PopUpIMCWrapper;