import React from "react"
import Container from "react-bootstrap/Container"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

interface ITemplate {
    children: JSX.Element | JSX.Element[]
}
const Template: React.FC<ITemplate> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex-grow-1">
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    )
}

export default Template
