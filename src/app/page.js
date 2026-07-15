'use client';
import { useState } from "react";
import Dialog from "@/components/dialog";
import styles from "./page.module.scss";

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    function toggle() {
        setIsActive(prev => !prev);
    }

    function toggleDialog() {
        setShowDialog(prev => !prev);
    }

    return (
        <>
            {!isActive ? (
                <section>
                    <div className="wrapper">
                        <h1>Will you go out with me?</h1>
                        <img src="/img/gif/start.gif" alt="Bubu dancing gif"/>
                        <div className="buttons">
                            <button onClick={toggle} className="button-1">Yes</button>
                            <button onClick={toggleDialog} className="button-2">No</button>
                        </div>
                    </div>
                </section>
            ) : (
                <section className={styles.yay}>
                    <div className="wrapper">
                        <h2>Yay!</h2>
                        <div className="title-content">
                            <p>I'm glad you said yes!</p>
                            <p>(After asking 3 times 😡)</p>
                        </div>
                        <h3>We gonna have so much fun!</h3>
                        <img src="/img/gif/yay.gif" alt="Bubu and Dudu horse riding with music on"/>
                        <a className="button-1" href="/form">Continue 🤍</a>
                    </div>
                    <button onClick={toggle} className="back-btn"></button>
                </section>
            )}

            {showDialog && <Dialog toggleDialog={toggleDialog}/>}
      
        </>
    );
}
