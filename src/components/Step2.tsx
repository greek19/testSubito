import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"
import { Fragment, useEffect, useState } from "react";
import { setCompanyName, setSpecialAccomodations, setStepTwoComplete } from "../store/formSlice";
import check from "../assets/png_check.png"

function Step2() {
    const { stepOneComplete, stepTwoComplete, companyName, specialAccomodations } = useSelector((state: RootState) => state.form);
    const [companyChoice, setCompanyChoice] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        setCompanyChoice("")
        dispatch(setCompanyName(""))
        dispatch(setSpecialAccomodations(null))
    },[stepOneComplete,dispatch])

    useEffect(()=>{
        dispatch(setStepTwoComplete(specialAccomodations!== null && (companyChoice==="no" || (companyChoice==="yes" && companyName!==""))))
    },[specialAccomodations,companyChoice, companyName, dispatch])

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyChoice(e.target.value);
    };   
    
    const handleCompanyNameChange = (value: string) => {
        dispatch(setCompanyName(value));
    };

    const handleAccomodationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSpecialAccomodations(e.target.value === "1"));
    };

    return (
        <fieldset id="step2" className={!stepOneComplete ? "commonFieldset lowerOpacity" : " commonFieldset active"}  disabled={!stepOneComplete}>
            <legend>Step 2</legend>

            <span className="qLabel" >Would you like your company name on your badges?</span>
            {renderRadioGroup("comapny", [{label:"Yes",value:"yes"},{label:"No",value:"no"}], companyChoice, handleCompanyChange) }

            <div id="companyName" className={companyChoice==="yes" ? "nameRow active": "nameRow"}>
                <label htmlFor="id-company-name">Company Name: </label>
                <input id="id-company-name" type="text" placeholder={`Company Name`} value={companyName} onChange={(e) => handleCompanyNameChange(e.target.value)} />
            </div>

            <span className="qLabel">Will anyone in you group require special accomodations?</span>
            {renderRadioGroup(
                "accomodation", 
                [{ label: "Yes", value: 1 },{ label: "No", value: 0 }], 
                specialAccomodations !== null ? Number(specialAccomodations) : null, 
                handleAccomodationChange
            )}

            <div className="greenCheck">
                <img src={check} alt="check" className={stepTwoComplete ? "active":""} />
            </div>
        </fieldset>
    );
}
export default Step2;

const renderRadioGroup = (name: string, options: { label: string; value: string | number }[], selectedValue: string | number | boolean | null, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
    <div>
        {options.map(({ label, value }) => (
            <Fragment key={name+label}>
                <input type="radio" id={name+label} name={name} value={value} checked={selectedValue === value} onChange={onChange} />
                <label htmlFor={name+label}>{label}</label>
            </Fragment>
        ))}
    </div>
);