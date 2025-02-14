import { useSelector, useDispatch } from "react-redux";
import { resetForm, setReadyToRock } from "../store/formSlice";
import { RootState } from "../store/store";

function Step3() {
    const { stepTwoComplete, attendees, names, companyName, specialAccomodations, readyToRock } = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("----- Registration complete for " + attendees + " people! -----");
        names.forEach(element => {
            console.log("Name: " + element);
        });
        console.log("Company name on your badges? " + (companyName !== "" ? "Yes, name: " + companyName : "No"));
        console.log("Special accomodations required? " + (specialAccomodations ? "Yes" : "No"));

        dispatch(setReadyToRock(false));
        dispatch(resetForm());
    };

    return (
        <fieldset id="step3" className={!stepTwoComplete ? "commonFieldset lowerOpacity" : "commonFieldset active"} disabled={!stepTwoComplete}>
            <legend>Step 3</legend>
            <div id="rock">
                <label className="qLabel" htmlFor="ready">Are you ready to rock? </label>
                <input type="checkbox" id="ready" checked={readyToRock} onChange={() => dispatch(setReadyToRock(!readyToRock))} />
            </div>
            <button type="button" id="completeBtn" disabled={!readyToRock} onClick={() => onSubmit()}>Complete Registration</button>
        </fieldset>
    );
}
export default Step3;