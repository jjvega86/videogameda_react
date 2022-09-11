import styled from "styled-components";

// Styling
const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const HeaderWrapper = styled.section`
  padding: 4em;
`;

// Component

export default function Header({ displayText }) {
  return (
    <HeaderWrapper>
      <Heading>{displayText}</Heading>
    </HeaderWrapper>
  );
}
