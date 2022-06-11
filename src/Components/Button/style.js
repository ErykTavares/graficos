import styled, {css} from 'styled-components';

export const ButtonStyle = styled.button`
    ${({theme})=> css`
        width: ${({width}) => width};
        height: ${({height}) => height};
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        background-color: ${theme.colors.darkPurple};
        color: white;
        border-radius: .65rem;
        text-shadow: 0px 2px 0 #7A7A7A;
        font-weight: 600;
        transition: .5s;
        &:hover{
            transform: scale(1.1);
        }
    `}
`