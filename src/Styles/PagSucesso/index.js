import styled from 'styled-components'

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    height: 100vh;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 0px;
    }

    ::-webkit-scrollbar-track {
        background: RGB(0,0,50,0);
    }

    ::-webkit-scrollbar-thumb {
        background-color: RGB(110,110,110,0.9);
        border-radius: 20px;
    }

    button {
        background-color: rgb(255,255,255,0.3);
        padding: 10px 15px;
        border: none;
        border-radius: 10px;
        margin: 10px auto;
        width: 40%;
        color: white;
        font-size: 11pt;
        
        :hover {
            background-color: rgb(100,100,100,0.5);
            transition: .3s;
        }

        :active {
            background-color: rgb(0,0,0,0.2);
            transform: scale(0.95);
        }
    }

    section {
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(to right, RGB(0,0,50,0.3), RGB(0,0,50));
        background-attachment: fixed;
        overflow-y: auto;

        display: flex;
        justify-content: space-between;

        ::-webkit-scrollbar {
        width: 0px;
    }

    }

    div {
        width: 60%;
        max-width: 600px;
        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        justify-content: space-around;

        padding: 40px;

        p {
            text-align: end;
            width: 100%;
            font-weight: lighter;
        }
    }

    @media (max-width: 500px) {
        section {
            flex-direction: column;
            align-items: center;
            background-image: linear-gradient(to top, RGB(0,0,50), RGB(0,0,50,0.7), RGB(0,0,50,0.5), RGB(0,0,50,0.7), RGB(0,0,50));

        }
        div {
            width: 70vw;
            p {
            text-align: justify;
            width: 100%;
            font-weight: lighter;
        }
        img {
            width: 100px;
        }
        }
    }

    @media (max-width: 350px) {
        section {
            flex-direction: column;
            align-items: center;
        }
        div {
            width: 70vw;
            img {
            width: 100px;
        }
        }
    }
`

export default Pagina