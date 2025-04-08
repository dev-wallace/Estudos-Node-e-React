import GlobalStyle from "./styles/global";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/form.js";

const Conteirner = styled.div`
  widith: 100%;
  max-width: 800px;
  margin-top: 20px;
  displaiy: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
   



`;



const Title = styled.h2``;


function App() {
  return (
    <>

<Container>
<Title>USUARIOS</Title>
<Form/>

</Container>

    <ToastContainer autoClose={3000} position = {toast.POSITION.BOTTOM_LEFT}/>
     <GlobalStyle /> 
    </>
   
  );
}

export default App;
