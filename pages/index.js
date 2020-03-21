// import Link from "next/link";
import fetch from "isomorphic-unfetch";
import GlobalStyle from "../assets/styles/global";
import { Item } from "../components/Item";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Index = props => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Item data={props} />
      </Container>
    </>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("http://api.pathofexile.com/public-stash-tabs");
  const data = await res.json();
  return {
    // shows: data.map(entry => entry.show)
    users: data.stashes
  };
};

export default Index;
