import { useState, useEffect, useRef } from "react";

export default function Random() {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    return (
        <dialog ref={dialogRef}>
            test
        </dialog>
    )
}