import React, { FC, useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

interface OwnProps {}

type Props = OwnProps;

const PhotosList: FC<Props> = () => {
    const [photoLightbox, setPhotoLightBox] = useState({
        isOpen: false,
        photoIndex: 0,
    });

    const onLightboxClose = () => {
        setPhotoLightBox((prevState) => ({ ...prevState, isOpen: false }));
    };
    const onMoveNextPhoto = () => {
        setPhotoLightBox((prevState) => ({
            ...prevState,
            photoIndex: (photoIndex + 1) % images.length,
        }));
    };
    const onMovePrevPhoto = () => {
        setPhotoLightBox((prevState) => ({
            ...prevState,
            photoIndex: (photoIndex + images.length - 1) % images.length,
        }));
    };

    const images = [
        "https://static.posters.cz/image/750/plakaty/auta-3-cars-3-mcqueen-race-i47515.jpg",
        "https://profiauto.pl/files/cache/b89ec3401a7a9c7ff8574bb28bd44121.jpg",
        "https://www.carscare.pl/wp-content/uploads/2020/11/green-car2.png",
    ];
    const { isOpen, photoIndex } = photoLightbox;
    return (
        <>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={onLightboxClose}
                    onMovePrevRequest={onMovePrevPhoto}
                    onMoveNextRequest={onMoveNextPhoto}
                />
            )}
            <Wrapper>
                {images.map((image, photoIndex) => (
                    <ImageWrapper key={image}>
                        <img
                            src={image}
                            alt="image"
                            onClick={() => setPhotoLightBox({ photoIndex, isOpen: true })}
                        />
                    </ImageWrapper>
                ))}
            </Wrapper>
        </>
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
