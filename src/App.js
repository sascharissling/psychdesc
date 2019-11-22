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
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <SearchResults>
        <MusicList />
      </SearchResults>
    </div>
  );
}

export default App;
