import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Cabecalho = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    display: flex;  
    padding: 5px;
    margin-bottom: 5vh;

    img{
      background-color: white;  
      height: 6vh;
    }

    button{
        color: rgba(24, 39, 121, 1);
        border: 3px solid #0B66C2;
        border-radius: 40px; 
        padding: 5px 15px 5px 15px;
        font-size: 15px;
        font-weight: bold;

        &:hover{
            background-color: #0B66C2;
            color: white;
        }
    }
`


export const Card = styled.div`
    background-color: #FFFFFF;
    margin: 10vh 0vh 10vh 0;
    width:fit-content;
    border-radius: 50px;
    padding: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        color: #182779;
        background-color: #FEFEFE;
        font-family: "Mohave", sans-serif;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 15px;  
        margin-bottom: 2vh;
        text-align: center;
    }

    form{
        background-color: white;
        width: 100%;
        display: block;
    }

    label{
       color: #182779;
       font-size: 20px; 
       background-color: white;
       display: block;
       margin-bottom: 1vh;
    }

    input{
        background-color: #FDFDFD;
        outline-color: rgba(176, 176, 176, 1);
        border-radius: 10px;
        border: solid 1px;
        padding: 10px;
        align-content: center;
        justify-content: center;
        margin-bottom: 4vh;
        width: 25vw;
        height: 5vh;
        font-size: 20px;
    }

    button{
        color: rgba(24, 39, 121, 1);
        border: 3px solid #0B66C2;
        border-radius: 40px; 
        width: 10vw;
        padding: 5px;
        font-size: 20px;
        font-weight: bold;
        display: block;
        margin: auto;
        margin-top: 2vh;
        background-color: transparent;


        &:hover{
            background-color: #0B66C2;
            color: white;
        } 
    }


`


export const Footer = styled.footer`
    background-color: #182779;
    margin-top: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    margin-top: 9vh;
`