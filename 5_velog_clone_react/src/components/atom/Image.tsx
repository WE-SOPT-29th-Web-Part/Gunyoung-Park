import styled from "styled-components";

interface ImageProps {
  src: string;
}

export function Image(props: ImageProps) {
  return (
    <StyledImage>
      {props.src !== "" ? <img src={props.src} alt="thumbnail" /> : null}
    </StyledImage>
  );
}

const StyledImage = styled.div`
  height: 10em;

  img {
    height: 10em;
  }
`;
