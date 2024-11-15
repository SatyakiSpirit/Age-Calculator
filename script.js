function calculateAge() {
    const dob = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    if (!dob) {
        resultDiv.innerHTML = '<p style="color: red;">⚠️ Please select a date of birth!</p>';
        return;
    }

    const dobDate = new Date(dob);
    const now = new Date();

    const ageInMilliseconds = now - dobDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInMonths = Math.floor(ageInDays / 30.44); // Average days in a month
    const ageInYears = now.getFullYear() - dobDate.getFullYear();

    resultDiv.innerHTML = `
        <p>🎂 <strong>Age:</strong> ${ageInYears} Years</p>
        <p>⏳ <strong>Months:</strong> ${ageInMonths}</p>
        <p>🌞 <strong>Days:</strong> ${ageInDays}</p>
        <p>🕒 <strong>Hours:</strong> ${ageInHours}</p>
        <p>⏱️ <strong>Seconds:</strong> ${ageInSeconds}</p>
    `;
}
