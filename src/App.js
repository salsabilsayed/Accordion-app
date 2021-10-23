import Container from './components/Container';
import Content from './components/Content';


function App() {
  return (
    <div className="bg-magenta min-h-screen flex justify-center items-center py-10">
        <Container>
            <Content />
        </Container>
    </div>
  );
}

export default App;
