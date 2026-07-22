"use client";
import { useState, useEffect } from "react";
import Random from "@/components/random";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Form() {
    // Variables
    const [form, setForm] = useState({
        date: "",
        time: "",
        activity: "",
        customActivity: "",
        randomActivity: ""
    });
    const [step, setStep] = useState(1);
    const [excitement, setExcitement] = useState(0);
    const [showDialog, setShowDialog] = useState(false);

    // LocalStorage
    useEffect(() => {
        const savedForm = localStorage.getItem("form");

        if (savedForm) {
            setForm(JSON.parse(savedForm));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(form));
    }, [form]);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // Steps
    function nextStep(e) {
        e.preventDefault();

        if (step < 3) {
            setStep(prev => prev + 1);
        }
    }

    function prevStep(e) {
        e.preventDefault();

        if (step > 1) {
            setStep(prev => prev - 1);
        }
    }

    // Activty
    function handleActivity(e) {
        const value = e.target.value;

        setForm(prev => ({
            ...prev,
            activity: prev.activity === value ? "" : value,
            customActivity: "",
            randomActivity: ""
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
            ...(name === "customActivity" && { activity: "", randomActivity: "" })
        }));
    }

    // Random
    function toggle(e) {
        e.preventDefault();
        setShowDialog(prev => !prev);
    }

    function handleRandomActivity(activity) {
        setForm(prev => ({
            ...prev,
            randomActivity: activity,
            activity: "",
            customActivity: ""
        }));
    }

    // Excitement
    const images = [
        "/img/gif/0.gif",
        "/img/gif/1.gif",
        "/img/gif/2.gif",
        "/img/gif/3.gif",
        "/img/gif/4.gif",
        "/img/gif/5.gif"
    ];

    function handleExcitement(e) {
        setExcitement(Number(e.target.value));
    }

    return (
        <main className={styles.main}>
            <form onSubmit={nextStep} className={`wrapper`}>

                {step === 1 && (
                    <fieldset className={styles.date}>
                        <legend>Pick a date and time!</legend>
                        <label>
                            Date
                            <input type="date" name="date" value={form.date} onChange={handleChange} required/>
                        </label>
                        <label>
                            Time
                            <input type="time" name="time" value={form.time} onChange={handleChange} required/>
                        </label>
                    </fieldset>
                )}

                {step === 2 && (
                    <>
                        <fieldset className={styles.activity}>
                            <legend>What would you like to do?</legend>

                            <label>
                                Dinner 🍜
                                <input type="checkbox" name="activity" value="dinner" checked={form.activity === "dinner"} onChange={handleActivity}/>
                            </label>
                            <label>
                                Shooting 🔫
                                <input type="checkbox" name="activity" value="shooting" checked={form.activity === "shooting"} onChange={handleActivity}/>
                            </label>
                            <label>
                                Billiards 🎱
                                <input type="checkbox" name="activity" value="billiards" checked={form.activity === "billiards"} onChange={handleActivity}/>
                            </label>
                            <label>
                                GTA5 🕹️
                                <input type="checkbox" name="activity" value="gta5" checked={form.activity === "gta5"} onChange={handleActivity}/>
                            </label>
                            <label>
                                Movie 🍿
                                <input type="checkbox" name="activity" value="movie" checked={form.activity === "movie"} onChange={handleActivity}/>
                            </label>
                            <label>
                                Picnic 🌸
                                <input type="checkbox" name="activity" value="picnic" checked={form.activity === "picnic"} onChange={handleActivity}/>
                            </label>
                        </fieldset>

                        <fieldset className={`${styles.myOwn}`}>
                            <legend>Or</legend>
                            <button onClick={toggle} className={form.randomActivity ? styles.active : null}>{form.randomActivity ? form.randomActivity : "Random 🎪"}</button>

                            {showDialog && <Random toggle={toggle} onChange={handleChange} onRandomActivity={handleRandomActivity}/>}

                            <label>
                                <input value={form.customActivity} onChange={handleChange} name="customActivity" type="text" placeholder="My own idea 💡" className={form.customActivity ? styles.active : null}/>
                            </label>
                        </fieldset>
                    </>
                )}

                {step === 3 && (
                    <fieldset className={styles.excitement}>
                        <div className="title-content">
                            <legend>How excited are you?</legend>
                            <p>Rate your excitement!</p>
                        </div>

                           <Image
                                src={images[excitement]}
                                width={200}
                                height={200}
                                alt="Excitement level"
                            />

                        <label>
                            <span className="visually-hidden">Excitement</span>
                            <input type="range" name="excitement" min="0" max="5" onChange={handleExcitement}/>
                        </label>
                        
                    </fieldset>
                )}


                <button className={`button-1 ${styles.button1}`}>Continue</button>
            </form>
            <button className="back-btn" onClick={prevStep}></button>
        </main>
    )
}