import {Link} from 'react-router-dom'
function NotFound(){
    return(
    <> 
    <h2>Page Not Found</h2>
    <a style={{color:"red"}}href="/">Home</a>
    <Link to="/">Home</Link>
    </>
    );
}
export default NotFound;
