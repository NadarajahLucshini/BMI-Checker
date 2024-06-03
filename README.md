# BMI Calculator

A simple React application to calculate Body Mass Index (BMI) based on user input for weight and height. The application also provides health tips and stores the history of BMI calculations in the local storage.

## Features

- Calculate BMI based on weight and height
- Supports both metric (kg, cm) and imperial (lb, ft) units
- Provides health messages and recommendations based on BMI
- Stores and displays BMI calculation history
- Reload button to reset the application state

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/bmi-calculator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd bmi-calculator
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the application, run:
```sh
npm start
```
The application will open in your default browser at `http://localhost:3000`.

## Usage

1. Enter your height and weight.
2. Select the appropriate units (cm/ft for height and kg/lb for weight).
3. Click the `Submit` button to calculate your BMI.
4. View your BMI, health message, and recommendations.
5. The BMI history is stored in the local storage and displayed under the BMI history section.
6. Click the `Reload` button to reset the application and clear the BMI history.

## Folder Structure

```
bmi-calculator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── underweight.png
│   │   ├── normal.png
│   │   ├── overweight.png
│   │   └── obese.png
│   ├── components/
│   │   └── BMI.js
│   ├── style.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- React documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- BMI formula reference: [Wikipedia](https://en.wikipedia.org/wiki/Body_mass_index)

## Contact

For any questions or feedback, please reach out to nadarajahlucshini@gmail.com


