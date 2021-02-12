import { useState, useEffect } from "react";

function useAutoSave(text) {
    const [saving, setSaving] = useState(false);
    const [lastText, setLastText] = useState("");

    useEffect(() => {
        const intervel = setInterval(async () => {
            await new Promise((resolve, reject) => setTimeout(async () => {
                if (text !== lastText) {
                    setSaving(true)
                    await new Promise((res, rej) => { setTimeout(() => { setLastText(text); res() }, 1000) })
                    setSaving(false)
                }
                clearInterval(intervel);
                resolve()
            }, 1000))
        }, 3000)

        return () => clearInterval(intervel)
    })

    return saving
}

export default useAutoSave