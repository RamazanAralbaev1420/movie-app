import styled from "styled-components";

export const Wrap = styled.div`
    width: 100%;
    min-height: 400px;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image:linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url(${props => props.bg_url});
`