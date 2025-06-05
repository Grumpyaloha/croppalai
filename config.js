// Configuration file for environment variables
const config = {
    // Default values - these will be overridden by environment variables
    GEMINI_API_URL_BASE: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE'
};

// Override with environment variables if they exist
if (typeof process !== 'undefined' && process.env) {
    config.GEMINI_API_URL_BASE = process.env.GEMINI_API_URL_BASE || config.GEMINI_API_URL_BASE;
    config.GEMINI_API_KEY = process.env.GEMINI_API_KEY || config.GEMINI_API_KEY;
}

export default config;
