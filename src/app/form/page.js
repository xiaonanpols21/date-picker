import styles from "./styles.module.scss";

export default function Form() {
    return (
        <form className={`${styles.form}`}>
            <fieldset>
                <legend>Pick a date and time!</legend>
            </fieldset>
        </form>
    )
}