const themeSwitcher = document.getElementById('themeSwitcher');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function getCurrentTheme() {
    return localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    themeSwitcher.innerHTML = theme === 'light' ? '🌞' : '🌙';
}

// Set initial theme
setTheme(getCurrentTheme());

// Handle theme switch
themeSwitcher.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Listen for OS theme changes
prefersDarkScheme.addListener((e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
});