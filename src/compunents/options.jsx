import { useEffect, useMemo, useState } from "react"

export const Options = ({ currectAnswer, incurrectAnswer, onAnswer }) => {
    const [selected, setSelected] = useState('')
    useEffect(() => {
        setSelected("");
    }, [currectAnswer])
    function hendleOptions(value) {
        setSelected(value)
        onAnswer(value)
    }
    const shuffledAnswer = useMemo(() => {
        const allAnswer = [...incurrectAnswer, currectAnswer]
        return allAnswer.sort(() => Math.random() - 0.5)
    },[currectAnswer, incurrectAnswer])
    return (
        <>
            {shuffledAnswer.map((option, index) => {
                return (
                    <div key={index} className="text-md sm:text-lg font-semibold text-gray-700 dark:text-gray-300" >
                        <input className="cursor-pointer" type="radio" name="option" checked={selected === option} value={option} onClick={() => hendleOptions(option)} />
                        <label>&nbsp;&nbsp;{option}</label>
                    </div>
                )
            })}
        </>
    )
}



