import styled from "styled-components";

export const TileWrapper = styled.div`
    border-radius: ${({ theme }) => theme.radius.normal};
    box-shadow: ${({ theme }) => theme.boxShadow.tile};
    background: ${({ theme }) => theme.color.white};
`;
