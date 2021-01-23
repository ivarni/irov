import styled from 'styled-components';

const Layout = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Link = styled.a`
    color: #131331;
`;

const Logo = styled.img`
  width: 12rem;
  height: 12rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 5px 2px 1px rgba(0, 0, 0, 0.4);
`;

const Paragraph = styled.p`
    color: #ffffff;
    font-size: 1rem;
`;

const SubTitle = styled.h2`
    color: #ffffff;
    font-size: 2rem;
`;

const Title = styled.h1`
    color: #ffffff;
    font-size: 4rem;
`;

export {
    Layout,
    Link,
    Logo,
    Paragraph,
    SubTitle,
    Title,
};