import styled , {css} from 'styled-components';

export const CardStyle = styled.section`
    ${({theme})=> css`
        all: unset;
        position: relative;
        width : 600px;
        height : 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: .5rem;
        @media screen and (max-width: 630px) {
            width: 100%;
        } 

        h3{
            position: absolute;
            display:flex;
            align-items: center;
            justify-content: center;
            top: 30px;
            left: 40px;
            color: ${theme.colors.darkPurple};

            span{
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: .2rem;
                margin-left: .5rem;
            }
        }

        div{
            width: 100%;
        }
    `}

`