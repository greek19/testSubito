import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Step1 from "../../../components/Step1";
import { beforeEach, describe, expect, test, vi } from "vitest";

// Creiamo un mock dello store Redux
const mockStore = configureStore();
const initialState = {
    form: {
        attendees: 0,
        names: [],
        stepOneComplete: false,
    },
};

describe("Step1 Component", () => {
    let store: any;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = vi.fn(); // Mockiamo il dispatch
    });

    const renderComponent = () =>
        render(
            <Provider store={store}>
                <Step1 />
            </Provider>
        );

    test("renders correctly", () => {
        renderComponent();
        expect(screen.getByText("Step 1")).toBeInTheDocument();
        expect(screen.getByLabelText("How many people will be attending?")).toBeInTheDocument();
    });

    test("dispatches action when attendees dropdown changes", () => {
        renderComponent();
        const select = screen.getByLabelText("How many people will be attending?");
        fireEvent.change(select, { target: { value: "3" } });

        expect(store.dispatch).toHaveBeenCalledWith({ type: "form/setAttendees", payload: 3 });
    });

    test("renders input fields when attendees are selected", () => {
        store = mockStore({
            form: { attendees: 2, names: ["", ""], stepOneComplete: false },
        });
        renderComponent();

        expect(screen.getByLabelText("Attendee 1 Name:")).toBeInTheDocument();
        expect(screen.getByLabelText("Attendee 2 Name:")).toBeInTheDocument();
    });


    test("dispatches action when entering names", () => {
        store = mockStore({
            form: { attendees: 1, names: [""], stepOneComplete: false },
        });
        renderComponent();

        const input = screen.getByPlaceholderText("Attendee Name");
        fireEvent.change(input, { target: { value: "John Doe" } });

        // Aspettiamo che l'azione venga dispatchata
        const actions = store.getActions();
        expect(actions).toEqual([
            { type: "form/setStepOneComplete", payload: false },
            { type: "form/setStepOneComplete", payload: false },
            { type: "form/setNames", payload: ["John Doe"] },
        ]);
    });
});
