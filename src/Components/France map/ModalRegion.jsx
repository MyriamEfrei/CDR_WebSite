import BoxRegion from "./Box region";

const ModalRegion = props => {
    const { region, handler } = props;
    console.log(region);
    return (
        <div className="modal">
            <div className="modal-layout"></div>
            <div className="modal-content">
                <div onClick={handler}>
                    <svg width="45" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <g stroke="rgb(160, 160, 160)" strokeWidth="4">
                            <line x1="10" y1="10" x2="30" y2="30"/>
                            <line x1="10" y1="30" x2="30" y2="10"/>
                        </g>
                    </svg>
                </div>
                <BoxRegion type="modal" region={region} />
            </div>
        </div>  
    )
}

export default ModalRegion;