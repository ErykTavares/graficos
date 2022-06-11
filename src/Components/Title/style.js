import styled, {css} from 'styled-components';

export const TitleStyle = styled.h2`
    ${({theme})=> css`
        display: flex;
        flex-direction: column;
        font-size: 2.5rem;
        color: ${theme.colors.darkPurple};
        text-shadow: 0px 2px 0 #7A7A7A;
        
        span{
            font-size:1rem;
            font-weight: 500;
            color: ${theme.colors.gray3};
            margin-left:.2rem;
            text-shadow: none;
        }    
    `}
`