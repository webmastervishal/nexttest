import { Container } from "../pageStyles"
import { GlobalStyle } from "./../components/Common/Layout/style"
import Login from "./../components/Login"

export default () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Login />
            </Container>
        </>
    )
}