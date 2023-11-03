import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    flex-direction: column;

    h2{
        color: #182779;
        background-color: transparent;
        font-family: "Mohave", sans-serif;
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 15px;  
        margin-bottom: 2vh;
        text-align: center;
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
    
        
        background-color: transparent;


        &:hover{
            background-color: #0B66C2;
            color: white;
        } 
    }
    


`