import Image from "next/image";
import styles from "./styles.module.scss";

export default function Confirm() {
    return (
        <section className={styles.confirm}>
            <div className="wrapper">
                <h1>Almost there!</h1>
                <div className="title-content">
                    <p>Please confirm to send your invitation</p>
                </div>
                
                <ul>
                    <li>
                        <p>Date</p>
                        <p>03/06/2027</p>
                        <Image
                            src="/img/svg/agenda.svg"
                            width={35}
                            height={35}
                            alt="Picture of the author"
                        />
                    </li>
                </ul>
             
                <div className="buttons">
                    <button className="button-1">Confirm</button>
                </div>
            </div>
        </section>
    )
}