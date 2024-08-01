import styled from "styled-components";
import Atividades from "./Atividades";
import Banner from "./Banner";
import Depoimentos from "./Depoimentos";
import Pesquisa from "./Pesquisa";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial() {
    return (
        <>
            <Banner />
            <Container>
                <Pesquisa />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}

// https://www.figma.com/design/61CRNXlUmooMttGVa0GvML/React-fullstack---Voll.med?node-id=410-6247&t=jU7bKZPTdhVk5nXM-0