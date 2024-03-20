import { useRouteError } from "react-router-dom";
const ErrorPage = () =>{
    const err= useRouteError();
    console.log(err);
    return(
        <div>
        <h1>Error Page</h1>
        <h2>{err.status} : {err.statusText}</h2>
        <h2>{err.message}</h2>
        </div>
    )
    
}

export default ErrorPage;