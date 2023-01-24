import { useEffect, useState } from "react"

export default function About() {
    const [yearsOld, updateYearsOld] = useState(0)

    useEffect(() => {
        const birthDate = new Date('21 July 2005')
        const nowDate = new Date(Date.now()).getTime()
        const diff = (nowDate - birthDate)
        const parsedDiff = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.2425))
        updateYearsOld(parsedDiff)
    })

    // updateYearsOld()

    return (
        <div className="aboutPage">
            <h1 className="bold title">About</h1>
            <span className="normal text">Hi! 👋</span>
            <span className="normal text">
                My name is </span>
            <span className="bold colored text">Álvaro Rüger </span>
            <span className="normal text">, I'm </span>
            <span className="bold text">
                {yearsOld}
            </span>
            <span className="normal text"> years old</span>
        </div>
    )
}