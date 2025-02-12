import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Step3 from '../../../components/Step3';
import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { resetForm } from '../../../store/formSlice';

const mockStore = configureStore();
const initialState = {
  form: {
    attendees: 1,
    names: ["Rossi"],
    stepOneComplete: true,
    stepTwoComplete: true,
    companyName: "Company",
    specialAccomodations: false,
  },
};

describe('Step3 component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = vi.fn();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <Step3 />
      </Provider>
    );

  test('renders and handles submission', async () => {
    renderComponent();

    const checkbox = screen.getByLabelText('Are you ready to rock?');
    expect(checkbox).toBeInTheDocument();

    const submitButton = screen.getByText('Complete Registration');
    expect(submitButton).toBeDisabled();

    fireEvent.click(checkbox);

    await waitFor(() => expect(submitButton).toBeEnabled());

    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(resetForm());
    expect(checkbox).toBeInstanceOf(HTMLInputElement);
  });


  test('does not allow submission if checkbox is not checked', () => {
    renderComponent();

    const submitButton = screen.getByText('Complete Registration');

    expect(submitButton).toBeDisabled();
  });
});
