import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { setCompanyName, setSpecialAccomodations } from "../../../store/formSlice";
import Step2 from "../../../components/Step2";

const mockStore = configureStore();
const initialState = {
    form: {
        stepOneComplete: true,
        stepTwoComplete: false,
        companyName: "",
        specialAccomodations: null,
    },
};

describe("Step2 Component", () => {
    let store: any;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = vi.fn();
    });

    const renderComponent = () =>
        render(
            <Provider store={store}>
                <Step2 />
            </Provider>
        );

    test("renders correctly", async () => {
        renderComponent();
        expect(screen.getByText("Step 2")).toBeInTheDocument();
        expect(screen.getByText(/Would you like your company name on your badges\?/i)).toBeInTheDocument();
    });

    test("dispatches action when company choice changes", () => {
        renderComponent();

        const radioYes = screen.getByLabelText("Yes", { selector: 'input[name="comapny"]' });
        fireEvent.click(radioYes);

        expect(store.dispatch).toHaveBeenCalledWith(setCompanyName(""));
    });

    test("dispatches action when company name changes", () => {
        renderComponent();

        const companyNameInput = screen.getByPlaceholderText("Company Name");
        fireEvent.change(companyNameInput, { target: { value: "Subito.it" } });

        expect(store.dispatch).toHaveBeenCalledWith(setCompanyName("Subito.it"));
    });

    test("dispatches action when special accomodations choice changes", () => {
        renderComponent();

        const radioYes = screen.getByLabelText("Yes", { selector: 'input[name="accomodation"]' });
        fireEvent.click(radioYes);

        expect(store.dispatch).toHaveBeenCalledWith(setSpecialAccomodations(true));
    });

    test("dispatches action when step two conditions are met", async () => {
        renderComponent();

        fireEvent.click(screen.getByLabelText("Yes", { selector: 'input[name="comapny"]' }));
        fireEvent.change(screen.getByPlaceholderText("Company Name"), { target: { value: "Subito.it" } });
        fireEvent.click(screen.getByLabelText("Yes", { selector: 'input[name="accomodation"]' }));

        expect(store.dispatch).toHaveBeenCalledWith(setCompanyName("Subito.it"));
    });
});
