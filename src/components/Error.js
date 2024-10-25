import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>{error.status} : {error.statusText}</h1>
            <br></br>
            <h1>Oops...</h1>
            <br></br>
            <h2>Something went Wrong</h2>
            <br></br>
            <h3>{error.data}</h3>
        </div>
    )
};

export default Error; 