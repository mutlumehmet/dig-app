import { FC } from "react"
import styles from "./AppBar.module.css"
import digieggs_logo from "../assets/digieggs_logo.png"
const AppBar : FC = () => {
    return (
    <div className={styles.appBar}>
        <img src={digieggs_logo} alt="digieggs-logo" />;
        <div>Logo</div>
        <div>Logo</div>
        </div>
    )};
export default AppBar;

