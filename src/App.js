import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import MusicList from "./components/MusicList";
import Header from "./components/AppHeader.js";

const SearchResults = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [searchValue, setSearchValue] = React.useState("trinidad+and+tobago");

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Header onSearch={handleSearch} inputValue={searchValue} />
      <SearchResults>
        <MusicList searchValue={searchValue} />
      </SearchResults>
    </div>
  );
}

export default App;
