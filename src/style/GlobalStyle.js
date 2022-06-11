import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     ${({theme})=> css`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;
            text-decoration: none;
            font-family: "Montserrat", sans-serif;
        }

        a,a:hover, ul, li, button{
            all: unset;
            cursor:pointer;
        }

        main{
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #F7F7F7;
            overflow-x:hidden;
        }

        section{
            width: 100%;
            max-width: 1366px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem 0;
        }
        
        .appHeader{
            width: 100%;
            height: 100px;
            background-color: ${theme.colors.lightPurple};
           
        }

        .chartsSection{
            flex-direction: row;
            padding: 1rem 3rem;
            justify-content: space-between;
            @media screen and (max-width: 1312px) {
                height: 1000px;
                flex-direction: column;
                justify-content: space-around;
                padding: 1rem .5rem;
            }

        }

        .apexcharts-menu-icon{
            transform: scale(1.2) !important;
            svg{
                fill: ${`${theme.colors.darkPurple} !important`}  ;
            }           
                
        }
        
        .chartsSectionHeader{
            width:100%;
            height: 120px;
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 3rem;
            @media screen and (max-width:550px){
                padding: 0 .5rem;
                /* height: 150px;
                flex-direction:column;
                justify-content:space-evenly; */
            }
            @media screen and (max-width:480px){
                height: 150px;
                flex-direction:column;
                h2{
                    text-align:center;
                }
            }
        }

        .chart{
            width: 100%;
        }

        footer{
            width: 100%;
            height: 80px;
            display:flex;
            align-items: center;
            justify-content: center;
            background-color:lightgrey;
            color:${theme.colors.darkPurple};

            h6{
                font-size:.8rem;
                text-shadow: 1px 1px 0 #7A7A7A;
            }

            
            a:hover{
                color:purple;
            }
        }
        `}

`