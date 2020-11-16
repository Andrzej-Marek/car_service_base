import styled from "styled-components";

export const TileWrapper = styled.div`
    border-radius: ${({ theme }) => theme.radius.small};
    box-shadow: ${({ theme }) => theme.boxShadow.tile};
    background: ${({ theme }) => theme.color.white};
`;
