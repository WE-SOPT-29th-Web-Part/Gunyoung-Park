import styled from "styled-components";

export function Footer() {
  return (
    <FooterBox>
      <h5>Tekiter</h5>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  color: white;
  background-color: grey;
  text-align: center;

  padding: 0.3em 0;
`;
