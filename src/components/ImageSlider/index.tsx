import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';
import { Container, ImagesIndex, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
    imagesUrl: {
        id: string;
        photo: string;
    }[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!
        setImageIndex(index);
    });
    return (
        <Container>
            <ImagesIndex>
                {imagesUrl.map((item, index) => (
                    <Bullet
                        key={String(item.id)}
                        active={index === imageIndex} />
                ))}
            </ImagesIndex>

            <FlatList
                data={imagesUrl}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item.photo }}
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
            />
        </Container>
    )
}