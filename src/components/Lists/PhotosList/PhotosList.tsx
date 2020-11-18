import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const PhotosList: FC<Props> = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
            <ImageWrapper>
                <img
                    src="https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg"
                    alt=""
                />
            </ImageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* overflow-x: auto; */
    display: flex;
    flex-wrap: wrap;
`;
const ImageWrapper = styled.div`
    margin: 0 5px;
    cursor: pointer;

    img {
        height: 100px;
        width: auto;
        transition: 0.5s;

        :hover {
            transform: scale(1.05);
        }
    }
`;

export default PhotosList;
