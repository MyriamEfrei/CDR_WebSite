import Region from "./Region"
import Informations from './FranceMapInfo.json';

const FranceMap = () => {
    const regions = Informations.allRegions; 
    console.log(regions[0].path);
    return (
        <svg className="france-map" xmlns="http://www.w3.org/2000/svg" width="300" height="325" viewBox="0 0 597.6 670.7" overflow="visible">
            {regions.map(region => <Region 
                pathMaking={ region.path } 
                key={ region.name }
            />
            )}
        </svg>
    )
}

export default FranceMap;