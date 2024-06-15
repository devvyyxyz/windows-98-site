// Function to import and log each module
const importAndLogModule = async (filePath) => {
    try {
        // Perform static import for each file
        const importedModule = await import(filePath); // Import the module
        console.log(`Loaded: ${filePath}`);
        // Optionally use importedModule if needed in further logic
    } catch (error) {
        console.error(`Failed to load: ${filePath}`, error);
    }
};

// List of .js files to import (static list)
const jsFiles = [
    'index.js',
    'selection-box.js' // Add more as needed
];

// Load all .js files from public/js directory
const loadJsFiles = () => {
    jsFiles.forEach(file => {
        // Assuming files are in public/js directory, use static imports
        if (file === 'index.js') {
            importAndLogModule('/js/index.js');
        } else if (file === 'selection-box.js') {
            importAndLogModule('/js/selection-box.js');
        }
        // Add more conditions as needed for additional files
    });
};

loadJsFiles(); // Start loading .js files
