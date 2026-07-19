"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function Form() {
    // Variables
    const [form, setForm] = useState({
        date: "",
        time: "",
        activity: "",
        customActivity: ""
    });
    const [step, setStep] = useState(1);

    //LocalStorage
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

    //Steps
    function nextStep(e) {
        e.preventDefault();

        if (step < 2) {
            setStep(prev => prev + 1);
        }
    }

    function prevStep(e) {
        e.preventDefault();

        if (step > 1) {
            setStep(prev => prev - 1);
        }
    }

    //Activty
    function handleActivity(e) {
        const value = e.target.value;

        setForm(prev => ({
            ...prev,
            activity: prev.activity === value ? "" : value,
            customActivity: ""
        }));
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
            ...(name === "customActivity" && { activity: "" })
        }));
    }




    return (
        <main className={styles.main}>
            <form onSubmit={nextStep} className={`wrapper`}>

                {step === 1 && (
                    <fieldset className={styles.date}>
                        <legend>Pick a date and time!</legend>
                        <label>
                            Date
                            <input type="date" name="date" onChange={handleChange} required/>
                        </label>
                        <label>
                            Time
                            <input type="time" name="time" onChange={handleChange} required/>
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
                            <button>Random 🎪</button>

                            <label>
                                <input value={form.customActivity} onChange={handleChange} name="customActivity" type="text" placeholder="My own idea 💡"  className={form.customActivity ? styles.active : null}/>
                            </label>
                        </fieldset>
                    </>
                )}


                <button className={`button-1 ${styles.button1}`}>Continue</button>
            </form>
            <button className="back-btn" onClick={prevStep}></button>
        </main>
    )
}