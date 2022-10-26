import React from 'react';
import {Link} from 'react-router-dom';
import {baseURL, PokemonItemType} from '../../api/api';

export const PokemonItem: React.FC<PokemonItemType> = ({name, url}) => {
    const strId = url.replace(baseURL + 'pokemon', '').replaceAll('/', '')

    return (
        <div>
            <Link to={strId}>{name}</Link>
        </div>
    );
};
