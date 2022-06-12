import styled from 'styled-components'

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 40vw;
    max-width: 250px;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    color: rgb(180,100,100);
    text-shadow: 1px 1px 10px rgb(255,255,255,0.1);

    input {
        background-color: rgb(0,0,0,0);
        padding: 10px 15px;
        border: none;
        width: 90%;
        margin: 10px auto;
        border-bottom: 1px solid white;
        color: white;
        font-size: 12pt;

    }

    button {
        background-color: rgb(255,255,255,0.1);
        padding: 10px 15px;
        border: none;
        border-radius: 10px;
        margin: 10px auto;
        width: 40%;
        color: white;
        
        :hover {
            background-color: rgb(100,100,100,0.2);
            transition: .3s;
        }

        :active {
            background-color: rgb(0,0,0,0.2);
            transform: scale(0.95);
        }
    }

    @media (max-width: 500px) {
        width: 90vw;

        input {
            font-size: 14pt;
        }

        button {
            font-size: 15pt;
            padding: 15px 30px;
            width: auto;
        }
    }
    @media (max-width: 350px) {
        width: 65vw;
    }
`

export default Formulario