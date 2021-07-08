import React from "react";
import { StackInput, StackList, Shortcut, Navbar } from "./components";
import { RepoProvider } from "./context/RepoContext";
import styled from "styled-components";
import { Hr } from "./styles/common";

function App() {
  return (
    <RepoProvider>
      <AppContainer>
        <Navbar>
          <>
            <StackInput />
            <Hr />
            <Shortcut />
          </>
        </Navbar>
        <StackList />
      </AppContainer>
    </RepoProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  height: calc(100vh - 20px);
  column-gap: 30px;
  padding: 10px;
  justify-content: center;
  overflow-y: scroll;
  /* overflow-x: hidden; */

  /* // TODO : Apply Responsiveness */
`;
