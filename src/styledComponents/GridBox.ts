import styled from "styled-components";

export const GridBox = (repete: number) => styled.div`
padding:0.5rem;
display:grid;
align-items:center;
grid-template-columns:repeat(${repete}, 1fr);
`