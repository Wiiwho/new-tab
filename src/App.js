import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WelcomeText = styled.p`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 5px;
  font-family: Cairo;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const SearchCard = styled.div`
  position: relative;
  height: 50px;
  width: 400px;
  background: #fff;
  box-shadow: 1px 1px 40px -15px rgba(0, 0, 0, 0.65);
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const SearchField = styled.input`
  font-family: Roboto Condensed;
  border: none;
  outline: none;
  margin-left: 15px;
`;

function App() {
  const [query, setQuery] = useState("");
  return (
    <Container>
      <WelcomeText> WELCOME ELI </WelcomeText>
      <SearchCard>
        <Search color="disabled"></Search>
        <SearchField
          onKeyDown={e =>
            e.key === "Enter" &&
            window.open(`https://www.google.com/search?q=${query}`, "_blank")
          }
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search using Google..."
        ></SearchField>
      </SearchCard>
    </Container>
  );
}

export default App;
