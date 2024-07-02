import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
    return <header id="header">
        <img src={logo} alt="logo showing a money bag" />
        <h1>Inverstment Calculator</h1>
    </header>
}