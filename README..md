# React Currency Conversion App

This is a simple React project that allows you to convert currency using real-time exchange rates provided by the [Frankfurter API](https://www.frankfurter.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/hariyebk/currency-converter.git
```

2. Navigate to the project directory:

```bash
cd currency-converter
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, you will see the following elements on the screen:

- An input field where you can enter the amount to convert.
- Two dropdown menus to select the source currency and the target currency.
- The converted value will be displayed below the dropdown menus.

To use the app, follow these steps:

1. Enter the amount you want to convert in the input field.
2. Select the source currency from the first dropdown menu.
3. Select the target currency from the second dropdown menu.
4. The converted value will be displayed below the dropdown menus.

## How It Works

The app uses the `useEffect` and `useState` hooks from React to manage the conversion logic and the component state.

When the component mounts or any of the dependencies (`amount`, `currency1`, `currency2`) change, the `useEffect` hook is triggered. It performs the following steps:

1. Creates an `AbortController` instance to handle the asynchronous fetch request.
2. Defines an `async` function `getdata` to fetch the conversion rate from the Frankfurter API.
3. Makes a `fetch` request to the API using the provided `amount`, `currency1`, and `currency2` parameters.
4. If the response is unsuccessful (e.g., network error), an error is thrown.
5. If the response is successful, the conversion rate is extracted from the response data and stored in the `value` state using the `setValue` function.
6. If the source and target currencies are the same, the `amount` is directly set as the `value`.
7. The `getdata` function fetches the conversion rate.
8. A cleanup function is returned from the `use effect` hook, which aborts the fetch request if the component is unmounted or if the dependencies change.

The input field and dropdown menus are bound to their respective state variables (`amount`, `currency1`, `currency2`) using the `value` prop and the `onChange` event handler. When the user interacts with these elements, the state variables are updated accordingly, triggering a re-render of the component.

The converted value is conditionally rendered using a ternary operator. If a valid `value` is available, it is displayed in a `<p>` element; otherwise, nothing is rendered.

## Dependencies

This project relies on the following dependencies:

- React A JavaScript library for building user interfaces.
- react-dom: The entry point to the DOM and server renderers for React.
- react-scripts: Configuration and scripts for Create React App.

These dependencies are automatically installed when you run `npm install`.

## Credits

- This project uses the [Frankfurter API](https://www.frankfurter.app/) to fetch real-time exchange rates.
