import { useState } from "react";
import useDialog from "@/hooks/useDialog";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Random({toggle, onRandomActivity}) {
    const dialogRef = useDialog();
    const [answer, setAnswer] = useState("");

    // Get random Activity
    const data = [
        "Dinner",
        "Shooting",
        "Billiards",
        "GTA5",
        "Movie",
        "Picnic",
        "Climing",
        "Hotel",
        "Gym",
        "Baking",
        "Cooking",
        "Beach",
        "Disneyland Paris",
        "Disneyland Tokyo"
    ];

    function spin(e) {
        e.preventDefault();

        const rollDice = Math.floor(Math.random() * data.length);
        const activity = data[rollDice];

        setAnswer(activity);
        onRandomActivity(activity);
    }


    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <div className="wrapper">
                <h2>Spin the wheel!</h2>
                <Image
                    src="/img/gif/spin.gif"
                    width={200}
                    height={200}
                    alt="Bubu dancing gif"
                />
            
                {answer && <p>{answer}</p>}
                <div className="buttons">
                    <button onClick={spin} className="button-1">Spin!</button>
                    {answer && <button className="button-2" onClick={toggle}>Continue</button>}
                    
                </div>
             
            </div>
        </dialog>
    )
}