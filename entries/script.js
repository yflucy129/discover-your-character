// Select the Option 2 box
const optionBox2 = document.getElementById('option2');

// Hover effect to change the body's background color
optionBox2.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = getComputedStyle(optionBox2).getPropertyValue('--tertiary').trim();
});

// Revert the body's background color when hover ends
optionBox2.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
});
