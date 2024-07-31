document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }

    // Initial mining rate
    let miningRate = 1; // Starting rate in Naira
    let increment = 0.01; // Increment rate in Naira per second

    // Update mining rate every second
    setInterval(() => {
        miningRate += increment;
        document.getElementById('rate').textContent = `₦${miningRate.toFixed(2)} per hour`;
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const profilePic = localStorage.getItem('profilePic');

    if (username) {
        document.getElementById('username').textContent = username;
        document.getElementById('nav-username').textContent = username;
    }

    if (profilePic) {
        document.getElementById('main-profile-pic').src = profilePic;
        document.getElementById('nav-profile-pic').src = profilePic;
    }

    // Initial mining rate
    let miningRate = 10; // Starting rate in Naira
    let increment = 0.01; // Increment rate in Naira per second

    // Update mining rate every second
    setInterval(() => {
        miningRate += increment;
        document.getElementById('rate').textContent = `₦${miningRate.toFixed(2)} per hour`;
    }, 1000);
})