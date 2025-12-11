//import logo from "../logo.svg";
import { ReactComponent as MyLogo } from "../logo.svg";

function Logo(props) {

    return (
       <MyLogo className={props.colorClass} alt="Logo" />
    )
}

export default Logo;