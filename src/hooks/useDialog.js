import { useEffect, useRef } from "react";

export default function useDialog() {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    return dialogRef;
}