// import Link from "next/link";
import fetch from "isomorphic-unfetch";
import GlobalStyle from "../assets/styles/global";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 50px;
`;

const StyledUser = styled.div`
  background: var(--color_purple-dark);
  padding: 20px;
  border-radius: 10px;
  color: #fff;

  h2 {
    color: var(--color_pink);
    font-size: 1.25rem;
  }

  strong {
    color: var(--color_pink);
    font-size: 0.75rem;
  }

  .items {
  }

  .item {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .item-image {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;

    img {
      margin: auto;
      display: block;
      max-width: 100%;
    }
  }
`;

const Index = props => {
  return (
    <>
      <GlobalStyle />
      <h1>Stashes</h1>
      <Container>
        {console.log(props.users)}
        {props.users.map(user => {
          return (
            <>
              {user.accountName ? (
                <StyledUser key={user.id}>
                  <h2>{user.accountName}</h2>
                  <p>
                    <strong>Last Character Name:</strong>{" "}
                    {user.lastCharacterName}
                  </p>
                  <p>
                    <strong>League:</strong> {user.league}
                  </p>
                  <p>
                    <strong>Stash:</strong> {user.stash}
                  </p>
                  <div className="items">
                    {user.items.map(item => {
                      return (
                        <>
                          {item.name ? (
                            <div className="item" key={item.id}>
                              <div className="item-image">
                                <img src={item.icon} alt={item.name} />
                              </div>
                              <span>{item.name}</span>
                            </div>
                          ) : null}
                        </>
                      );
                    })}
                  </div>
                </StyledUser>
              ) : null}
            </>
          );
        })}
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
