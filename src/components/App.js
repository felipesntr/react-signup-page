import styled from 'styled-components';
import bgImage from "../assets/bg.png";
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Container>
        <Wrapper>
          <Sidebar />
          <Main />
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;


export default App;
