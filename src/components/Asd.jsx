import "./asd.css";
import css  from "./asd.module.css";

const Asd = ({children}) => {
    return(
        <p className={css.asd}>{children}</p>
    )
}


export default Asd