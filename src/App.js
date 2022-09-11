// Components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CustomModal from "./components/CustomModal";

function App() {
  return (
    <>
      <NavBar />
      <CustomModal buttonLabel="Open Sesame">
        <h1>Some Heading</h1>
        <p>Some label</p>
      </CustomModal>
      <Header displayText="Video Games - Analyzed" />
    </>
  );
}

export default App;
