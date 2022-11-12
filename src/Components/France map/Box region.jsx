import "./FranceMap.css"

const BoxRegion = props => {
    const { region } = props
    console.log(region);
    return (
        <div className="box-region">
            <h3 className="box-region-title">
                <span>{ region.name }</span>
            </h3>
            
            <ul className="palmares">
                {region.palmares.map((el, index) => (
                    <li key={index}><span>Saison {index + 1}:</span> {el}</li>
                ))}
            </ul>

            <div className="referent">
                <h5>Référents</h5>
                <ul className="referent-list">
                    {region.referent.map((el, index) => (
                        <li key={ index }>{ el }</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BoxRegion;