import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MyMap = () => {
    const mapState = {
        center: [55.961032, 37.748466],
        zoom: 16,
    };

    const placemarkProps = {
        geometry: mapState.center,
        properties: {
            balloonContent: '<strong>Forest Dew</strong><br/>п. Быково, ул. Луговая, д.17',
            hintContent: 'Forest Dew — п. Быково',
        },
        options: {
            preset: 'islands#blueDotIconWithCaption',
            iconCaption: 'Forest Dew',
            balloonCloseButton: true,
            hideIconOnBalloonOpen: false,
        },
    };

    return (
        <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_MAPS_API_KEY }}>
            <Map defaultState={mapState} width="100%" height="400px">
                <Placemark {...placemarkProps} />
            </Map>
        </YMaps>
    );
};

export default MyMap;
