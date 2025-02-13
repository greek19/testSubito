import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setAttendees, setNames, setStepOneComplete } from "../store/formSlice";
import check from "../assets/png_check.png";
import { RootState } from "../store/store";

function Step1() {
    const { attendees, names, stepOneComplete } = useSelector((state: RootState) => state.form);
    const [namesClass, setNamesClass] = useState("boldLeft");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStepOneComplete(false))
    }, [dispatch])

    useEffect(() => {
        const allFilled = names.length !== 0 && names?.every((name) => name.trim() !== "");
        dispatch(setStepOneComplete(allFilled));
        setNamesClass( attendees === 0 ?  "boldLeft" : "boldLeft active")
    }, [names, dispatch])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNamesClass("boldLeft")
  
        const newValue = Number(e.target.value)
        dispatch(setAttendees(newValue));
        setTimeout(() => {
            setNamesClass(newValue > 0 ? "boldLeft active" : "boldLeft")
        }, 250); 
    };

    const handleNameChange = (index: number, value: string) => {
        const updatedNames = [...names];
        updatedNames[index] = value;
        dispatch(setNames(updatedNames));
    };

    return (
        <fieldset id="step1" className="commonFieldset">
            <legend>Step 1</legend>

            <div className="sameLine">
                <label className="qLabel" htmlFor="attendees">How many people will be attending?</label>
                <select id="attendees" value={attendees} onChange={handleChange}>
                    <option key="default" value={0}>
                        Please Choose
                    </option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>

            <div id="names" className={namesClass}>
                <p className="textStd">Please provide full names:</p>
                <div id="namesContainer">
                    {names.map((name, index) => (
                        <div key={"row" + index} className="nameRow">
                            <label key={"label" + index} htmlFor={"id-" + index}>Attendee {index + 1} Name: </label>
                            <input id={"id-" + index} key={"input-" + index} type="text" placeholder={`Attendee Name`} value={name} onChange={(e) => handleNameChange(index, e.target.value)} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="greenCheck">
                <img src={check} alt="check" className={stepOneComplete ? "active" : ""} />
            </div>
        </fieldset>
    );
}
export default Step1;