const checkage = () => {
    // Get and clean inputs
    const ageInput = document.getElementById("age").value.trim();
    const nameInput = document.getElementById("name").value.trim();
    
    // Convert age to number and validate
    const age = parseInt(ageInput);
    const name = nameInput;
    
    // Validation (more precise than !age which fails for 0)
    if(!nameInput || isNaN(age) || ageInput === '') {
        alert("Please enter valid details.");
        return;
    }

    // Create and handle promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(msg => alert(msg))
    .catch(msg => alert(msg));
};