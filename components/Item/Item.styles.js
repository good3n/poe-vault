import styled from "styled-components";

export const StyledItem = styled.div`
  background: var(--color__dark200);
  border-radius: 10px;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }

  .item-image {
    background: var(--color__dark100);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding: 20px;
    }

    img {
      margin: auto;
      display: block;
      max-width: 100%;
    }
  }
`;

export const Header = styled.header`
  background: var(--color__dark100);
  padding: 12px 20px;
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
    color: #fff;
    font-size: 21px;
  }

  .requirements {
    margin-left: auto;
    font-size: 14px;
  }

  .requirement {
    display: inline-block;
    margin-left: 15px;
  }

  .req-value {
    font-weight: 600;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;

  .stats {
    font-size: 16px;

    ul {
      margin: 0;
      padding: 20px;
    }

    li {
      display: block;
      margin: 0 0 10px;

      &:last-child {
        margin-bottom: 0;
      }

      &.unidentified {
        color: var(--color__red);
      }
    }
  }
`;

export const Footer = styled.footer`
  background: var(--color__dark100);
  padding: 12px 20px;
  display: flex;
`;
