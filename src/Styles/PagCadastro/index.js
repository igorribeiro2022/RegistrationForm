import styled from 'styled-components'

const PagCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, RGB(0,0,50,0.5), RGB(0,0,50));

    section {
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(to right, RGB(0,0,50,0.5), RGB(0,0,50));

        display: flex;
        justify-content: flex-end;
    }

    img {
        width: 100px;
    }
    @media (max-width: 500px) {
        background-image: linear-gradient(to top, RGB(0,0,50), RGB(0,0,50,0.7), RGB(0,0,50,0.5), RGB(0,0,50,0.7), RGB(0,0,50));

        section {
            justify-content: center;
        }
    }
`

export default PagCadastro