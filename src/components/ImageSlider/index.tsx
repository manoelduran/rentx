import React from 'react';
import { Container, ImagesIndex, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
    return (
        <Container>
            <ImagesIndex>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImagesIndex>
            <CarImageWrapper>
                <CarImage
                    source={{ uri: imagesUrl[0] }}
                    resizeMode="contain"
                />
            </CarImageWrapper>
        </Container>
    )
}