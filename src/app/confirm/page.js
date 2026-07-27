"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Confirm() {
    const [form, setForm] = useState("");

    useEffect(() => {
        const savedForm = localStorage.getItem("form");

          if (savedForm) {
            setForm(JSON.parse(savedForm));
        }
    }, []);

    console.log(form)

    const activity =
    form.activity ||
    form.randomActivity ||
    form.customActivity;

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
                        <p>{form.date}</p>
                        <Image
                            src="/img/svg/agenda.svg"
                            width={35}
                            height={35}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <p>Time</p>
                        <p>{form.time}</p>
                        <Image
                            src="/img/svg/clock.svg"
                            width={35}
                            height={35}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <p>Activity</p>
                        <p>{activity}</p>
                        <Image
                            src="/img/svg/activity.svg"
                            width={35}
                            height={35}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <p>Excitement</p>
                        <p>{form.excitement}</p>
                        <Image
                            src="/img/svg/heart.svg"
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