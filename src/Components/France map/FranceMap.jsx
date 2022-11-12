import Informations from './FranceMapInfo.json';

const FranceMap = () => {
    const regions = Informations.allRegions; 
    console.log(regions[0].path);
    return (
        <svg className="france-map" xmlns="http://www.w3.org/2000/svg" width="600" height="505" viewBox="0 0 597.6 670.7" overflow="visible">
            {regions.map(region => 
                <path key={ region.name } fill="#eee" stroke="#000" d={ region.path }></path>
            )}
        </svg>
    )
}

export default FranceMap;