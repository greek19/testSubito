import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { resetForm } from "../store/formSlice";

function Step3() {
    const { stepTwoComplete, attendees, names, companyName,specialAccomodations } = useSelector((state: RootState) => state.form);
    const [checkReady, setCheckReady] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("----- Registration complete for "+attendees+" people! -----");
        names.forEach(element => {
           console.log("Name: "+element);
           
        });
        console.log("Company name on your badges? " + (companyName !== "" ? "Yes, name: "+companyName : "No") );
        console.log("Special accomodations required? "+ (specialAccomodations? "Yes": "No"));
        
        setCheckReady(false)
        dispatch(resetForm());
    };

return (
    <fieldset id="step3" className={!stepTwoComplete ? "commonFieldset lowerOpacity" : " commonFieldset active"} disabled={!stepTwoComplete}>
        <legend>Step 3</legend>
        <div id="rock">
            <label className="qLabel" htmlFor="ready">Are you ready to rock? </label>
            <input type="checkbox" id="ready" checked={checkReady} onChange={()=>setCheckReady(!checkReady)} />
        </div>
        <button type="button" disabled={!checkReady} onClick={()=>onSubmit()}>Complete Registration</button>
    </fieldset>
);
}
export default Step3;