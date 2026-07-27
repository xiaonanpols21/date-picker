"use client";
import Image from "next/image";

export default function Thanks() {
    function handleNewDate() {
        localStorage.removeItem("form");
        window.location.href = "/";
    }

    return (
        <section>
            <div className="wrapper">
                <h2>Have fun on your date!</h2>
                <div className="title-content">
                    <p>Have fun on your date!</p>
                </div>
                <Image
                    src="/img/gif/yay.gif"
                    width={200}
                    height={200}
                    alt="Bubu and Dudu horse riding with music on"
                />
                <button onClick={handleNewDate} className="button-1">Pick new date</button>
            </div>
        </section>
    )
}