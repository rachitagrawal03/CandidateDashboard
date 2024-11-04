import { useContext } from "react";
import Candidate from "./pages/Candidate";
import { CandidateContext } from "./context/candidateContext";
import AddCandidate from "./components/AddCandidate";

function App() {
  const {showAddForm} = useContext(CandidateContext);
  return (
    <>
      {showAddForm && <AddCandidate/>}
      <Candidate/>
    </>
  );
}

export default App;
