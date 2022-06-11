import React from "react";
import { BarCharts, Card, ScatterCharts, Title, Button } from "./Components";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import {ReactComponent as Filter}  from "./assets/svg/filter.svg";

function App() {
  return (
   <main>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header className="appHeader" />
      <section >
        <header className="chartsSectionHeader" >
          <Title title="DashBoard" subTitle="Desafio Técnico FrontEnd by ErykTavares"  />
          <Button type="button" width="100px" height="40px">
            <Filter />
            Filtrar
          </Button>
        </header>
        <section className="chartsSection">
          <Card name="Barras" >
            <BarCharts />
          </Card>
          <Card name="Scatter" >
            <ScatterCharts />
          </Card>
        </section>
      </section>
      <footer>
          <h6>Feito por <a href="https://eryktavares-portfolio.netlify.app/home" target="_blank" rel="noreferrer">ErykTavares</a></h6>
      </footer>
    </ThemeProvider>
   </main>
  );
}

export default App;
