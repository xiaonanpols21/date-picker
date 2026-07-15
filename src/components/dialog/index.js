import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function Dialog() {
    const dialogRef = useRef(null);
    const [step, setStep] = useState(1);
    const router = useRouter();

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    function handleYes() {
        if (step < 4) {
            setStep(prev => prev + 1);
        }
    }

    return (
        <>
            <dialog ref={dialogRef}>
                {step === 1 && (
                    <>
                        <h2>You sure? <span>🥺</span></h2>
                        <img src="/img/gif/no-1.gif" alt="Bubu crying"/>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2>You really sure?</h2>
                        <img src="/img/gif/no-2.gif" alt="Bubu crying on table"/>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2>Just go out with me!</h2>
                        <img src="/img/gif/no-3.gif" alt="Bubu waling"/>
                    </>
                )}

                {step === 4 && (
                    <div className={styles.step4}>
                        <h2>Yay!</h2>
                        <div className="title-content">
                            <p>I'm glad you said yes!</p>
                            <p>(After asking 3 times 😡)</p>
                        </div>
                        <h3>We gonna have so much fun!</h3>
                        <img src="/img/gif/yay.gif" alt="Bubu and Dudu horse riding with music on"/>
                    </div>
                )}
                
                <div className="buttons">
                    <button onClick={handleYes} className="button-1">Yes</button>
                    {step !== 3 && (<button className="button-2">No</button>)}
                </div>
            </dialog> 
        </>
    )
}