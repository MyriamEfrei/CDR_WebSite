import React, { useState } from 'react';
import allRegions from './FranceMapInfo.json';
import "./FranceMap.css"
import BoxRegion from './Box region';
import ModalRegion from "./ModalRegion"

const FranceMap = () => {
    const regions = allRegions.allRegions;
    const [regionChoice, setRegionChoice] = useState(undefined);
    const [modal, setModal] = useState(false)

    const displayModal = region => {
        setRegionChoice(region)
        setModal(true)
    }

    const deleteModal = () => {
        setModal(false)
        setRegionChoice(undefined)
    }

    return (
        <div className="france-map-container">
            <svg className="france-map" xmlns="http://www.w3.org/2000/svg" width="360" height="303" viewBox="0 0 597.6 670.7" overflow="visible">
                {regions.map(region => 
                    <path 
                        key={ region.name } 
                        stroke="#000"
                        d = { region.path }
                        onMouseOver = {() => setRegionChoice(region) }
                        onMouseLeave = {() => !modal && setRegionChoice(undefined) }
                        onClick = {() => displayModal(region) }
                    ></path>
                )}
            </svg>
            {(regionChoice && !modal) ? 
            <BoxRegion region = {regionChoice} /> : 
            <div className="fake-box"></div>}
            {modal && <ModalRegion handler={deleteModal} region={regionChoice} />}
        </div>
    )
}

export default FranceMap;