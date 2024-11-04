import axios from "axios";
import { useEffect, createContext, useState } from "react";

export const CandidateContext = createContext(null);

const url = import.meta.env.VITE_BASE_URL;

const CandidateContextProvider = (props) => {
  const [allCandidate, setAllCandidate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const pageSize = 5;

  const fetchAllCandidate = async () => {
    const response = await axios.get(url + "/candidate");
    // console.log(response);
    setAllCandidate(response.data.data);
  };

  useEffect(() => {
    async function loadCandidates() {
      await fetchAllCandidate();
    }
    loadCandidates();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filterData = allCandidate.filter((candidate) =>
        Object.values(candidate).some((val) =>
          val.toString().toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredCandidates(filterData);
    } else {
      setFilteredCandidates([]);  // Clear filteredCandidates when search is cleared
    }
  };

  const candidatesToPaginate = searchTerm ? filteredCandidates : allCandidate;

  const totalPage = Math.ceil(candidatesToPaginate.length / pageSize);
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  
  const currentCandidates = candidatesToPaginate.slice(startIndex, endIndex);
  
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddButton = ()=>{
    setShowAddForm(true);
  }

  const contextValue = {
    allCandidate,
    setAllCandidate,
    currentCandidates,
    handleNext,
    handlePrevious,
    currentPage,
    totalPage,
    handleSearch,
    filteredCandidates,
    searchTerm,
    handleAddButton,
    showAddForm,
  };

  return (
    <CandidateContext.Provider value={contextValue}>
      {props.children}
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;
