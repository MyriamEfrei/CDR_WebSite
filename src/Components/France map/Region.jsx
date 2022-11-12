import "./FranceMap.css";

const Region = (props) => {
    const { pathMaking } = props;
    return (
        <path fill="#eee" stroke="#000" d = { pathMaking }></path>
    )
}

export default Region;