import { useState, useEffect, useRef } from "react";

export default function Dialog() {
    const dialogRef = useRef(null);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    function handleYes() {
        if (step < 3) {
            setStep(prev => prev + 1);
        }
    }

    return (
        <>
            <dialog ref={dialogRef}>
                {step === 1 && (
                    <>
                        <h2>You sure? <span>🥺</span></h2>
                        <img src="/img/gif/no-1.gif" alt="Bubu and Dudu horse riding with music on"/>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2>You really sure? <span>🥺</span></h2>
                        <img src="/img/gif/no-1.gif" alt="Bubu and Dudu horse riding with music on"/>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2>Just go out with me! <span>🥺</span></h2>
                        <img src="/img/gif/no-1.gif" alt="Bubu and Dudu horse riding with music on"/>
                    </>
                )}
                
                <div className="buttons">
                    <button onClick={handleYes} className="button-1">Yes</button>
                    <button className="button-2">No</button>
                </div>
            </dialog> 
        </>
    )
}