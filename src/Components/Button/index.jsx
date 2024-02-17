import { Container } from "./styles";

export function Button({title, loading = false, ...rest}){
    const handleClick = () => {
        if (!loading && onClick) {
          onClick();
        }
      };
    return(
        <Container 
        type="button"
        disabled={loading}
        onClick={handleClick}
        {...rest}
        >
            {loading ? 'carregando...' : title}
        </Container>
    )
    
}