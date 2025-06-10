<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting Age Checker</title>
</head>
<body>
    <!-- Added form element with proper structure -->
    <form id="form">
        <input type="number" id="age" value="">
        <input type="text" id="name" value="">
        <button type="button" id="btn">Submit</button>
    </form>

    <script>
        const checkage = () => {
            const age = parseInt(document.getElementById("age").value.trim());
            const name = document.getElementById("name").value.trim();

            // Exact error message match (no period at end)
            if(!name || isNaN(age)) {
                alert("Please enter valid details"); // No period to match test
                return;
            }

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

        // Add event listener to button
        document.getElementById("btn").addEventListener("click", checkage);
    </script>
</body>
</html>