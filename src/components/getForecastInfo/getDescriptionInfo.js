import React from 'react'

export default function getDescriptionInfo(weatherCode) {
    switch (weatherCode) {
        case 1,2,3:
            return 'Parzialmente soleggiato';

        case 45,48:
            return 'Nebbia, Brina';

        case 51,53,55:
            return 'Pioviggine moderata';

        case 56,57:
            return 'Pioviggine fredda';

        case 61,63,65:
            return 'Pioggia';

        case 66,67:
            return 'Pioggia fredda';

        case 71,73,75:
            return 'Neve';

        case 77:
            return 'Grandine';

        case 80,81,82:
            return 'Pioggia intensa';

        case 85,86:
            return 'Neve intensa';
            
        case 95:
            return 'Temporale';
            
        case 96,99:
            return 'Tempesta con grandine';
            
        default:
            return 'Soleggiato'
            break;
    }
}
