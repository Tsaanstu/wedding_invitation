import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MyMap = () => {
    const mapState = {
        center: [55.961032, 37.748466],
        zoom: 16,
    };

    const placemarkProperties = {
        hintContent: 'Villa Arcobaleno ', // Текст подсказки при наведении
        balloonContent: 'Центральная улица, 21А, деревня Высоково, городской округ Мытищи, Московская область', // Содержимое балуна при клике
    };

    return (
        <YMaps query={{ apikey: process.env.REACT_APP_YANDEX_MAPS_API_KEY }}>
            <Map defaultState={mapState} width="100%" height="400px">
                <Placemark
                    geometry={mapState.center}
                    properties={placemarkProperties}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />
            </Map>
        </YMaps>
    );
};

export default MyMap;
