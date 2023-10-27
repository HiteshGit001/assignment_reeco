import styled from "styled-components";

export const GridBox = (repete: number) => styled.div`
padding:0.5rem;
display:grid;
align-items:center;
overflow-x: scroll;
grid-template-columns:repeat(${repete}, 1fr);
`