import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import { keyframes } from "@emotion/core";
import CountryOptions from "./CountryOptions";
import LanguageIcon from "@material-ui/icons/Language";

import ClearIcon from "@material-ui/icons/Clear";

//STYLE Start

const ChooseCountry = styled(LanguageIcon)`
  margin: 5px;
  color: #ffe;
`;

const Clear = styled(ClearIcon)`
  zoom: 1.5;
  margin: 5px;
  color: grey;
`;

const SearchButton = styled.button`
  background: #e15a5a;
  outline: none;
  border: transparent;
  justify-content: center;
  width: 70px;
  border-radius: 20px;
  margin 5px; 
  padding: 0;
  box-shadow: 3px 6px 16px 0px #333;
  cursor: pointer;
  &:hover {
    background: transparent linear-gradient(180deg, #9127e9 0%, #e15a5a 100%) 0%
    0% no-repeat padding-box;
    box-shadow: 1px 1px 7px 0px rgba(102, 102, 102, 1);

  }
`;

const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

const SearchForm = styled.div`
  width: 100vw;
  display: flex;
  background: #383c4d;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 21px -2px rgba(31, 31, 31, 1);
`;

const CountryDropdown = styled.select`
  width: 100vw;
  height: 65px;
  background: #383c4d;
  border: none;
  font-size: 1.3rem;
  padding: 14px;
  color: #e15a5a;
  :focus {
    outline: none;
  }
`;

const flip = keyframes`
 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const ClearButton = styled.button`
  background: transparent;
  outline: none;
  border: transparent;
  justify-content: center;
  padding: 0;
  :hover {
    animation: ${flip} 0.4s ease;
  }
`;

//STYLE End

export default function Header({ onSearch, inputValue }) {
  const [showSearch, setShowSearch] = React.useState(false);

  function handleChange(event) {
    const value = event.target.value;
    onSearch(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      {!showSearch && (
        <AppBar>
          <Logo chartCountry={inputValue} />
          <SearchButton active={showSearch} onClick={() => setShowSearch(true)}>
            <ChooseCountry />
          </SearchButton>
        </AppBar>
      )}
      {showSearch && (
        <SearchForm
          onSubmit={handleSubmit}
          onChange={() => setShowSearch(false)}
        >
          <CountryDropdown
            multi
            options={CountryOptions}
            onChange={handleChange}
            value={inputValue}
          >
            <CountryOptions />
          </CountryDropdown>
          <ClearButton active={showSearch} onClick={() => setShowSearch(false)}>
            <Clear></Clear>
          </ClearButton>
        </SearchForm>
      )}
    </>
  );
}
