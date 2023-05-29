import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true)
    fetch('https://meowfacts.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        const quote = data.data;
        setQuote(quote);
      })
      .catch(error => {
        console.error('Erro ao obter a frase:', error);
      });
    setIsLoading(false)
  }

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === '' ?
        (<Spinner />) : (<span data-testid="quote">{quote}</span>)
      }
    </Container>
  );
}

export default App;