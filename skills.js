const readline = require('readline');

// convert sq mt to sq ft
function sqMtToSqFt(sqMt) {
    if (typeof sqMt !== 'number' || sqMt < 0) {
        throw new Error('Input must be a non-negative number');
    }
    return sqMt * 10.7639;
}

// convert sq ft to sq mt
function sqFtToSqMt(sqFt) {
    if (typeof sqFt !== 'number' || sqFt < 0) {
        throw new Error('Input must be a non-negative number');
    }
    return sqFt / 10.7639;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Press Ctrl+K to exit at any time.');

function promptUser() {
    rl.question(
        '\nChoose conversion:\n1. Square meters to square feet\n2. Square feet to square meters\nEnter 1 or 2: ',
        (choice) => {
            if (choice === '1') {
                rl.question('Enter value in square meters: ', (input) => {
                    try {
                        const sqMt = parseFloat(input);
                        const sqFt = sqMtToSqFt(sqMt);
                        console.log(`${sqMt} square meters is equal to ${sqFt.toFixed(2)} square feet`);
                    } catch (error) {
                        console.error(error.message);
                    }
                    promptUser();
                });
            } else if (choice === '2') {
                rl.question('Enter value in square feet: ', (input) => {
                    try {
                        const sqFt = parseFloat(input);
                        const sqMt = sqFtToSqMt(sqFt);
                        console.log(`${sqFt} square feet is equal to ${sqMt.toFixed(2)} square meters`);
                    } catch (error) {
                        console.error(error.message);
                    }
                    promptUser();
                });
            } else {
                console.log('Invalid choice. Please enter 1 or 2.');
                promptUser();
            }
        }
    );
}

// Handle Ctrl+K to exit
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'k') {
        console.log('\nExiting...');
        rl.close();
        process.exit();
    }
});

promptUser();