import styled from "styled-components";

export const Container = styled.div`
    background-color: #F5F1F0;
    height: 100vh;
    padding: 2vh;

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

    div{
        justify-content: center;
    }
    


`