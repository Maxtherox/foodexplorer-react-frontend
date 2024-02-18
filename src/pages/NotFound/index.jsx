import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NotFound() {
  return (
    <Container>
      <h1>Erro 404: Página indisponível</h1>
      <Link to="/">voltar para o início</Link>
    </Container>
  )
}