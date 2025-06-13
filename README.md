# Area Unit Converter

A command-line tool for converting between square meters and square feet.

## Features

- Convert square meters to square feet
- Convert square feet to square meters
- Interactive command-line interface
- Input validation
- Easy exit with Ctrl+K

## Usage

The program provides an interactive interface where users can:

1. Choose conversion type:
   - Option 1: Square meters to square feet
   - Option 2: Square feet to square meters
2. Enter the value to convert
3. Get the converted result with 2 decimal precision

### Running the Program

```bash
node skills.js
```

### Conversion Functions

The program includes two main conversion functions:

- `sqMtToSqFt(sqMt)`: Converts square meters to square feet
- `sqFtToSqMt(sqFt)`: Converts square feet to square meters

### Input Validation

- Inputs must be non-negative numbers
- Invalid inputs will trigger error messages
- Program continues to prompt for new conversions after each operation

### Exiting the Program

Press `Ctrl+K` at any time to exit the program.

## Technical Details

- Built with Node.js
- Uses the `readline` module for command-line interaction
- Implements error handling for invalid inputs
- Conversion factor: 1 square meter = 10.7639 square feet
