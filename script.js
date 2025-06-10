
        const checkage = () => {
            const age = parseInt(document.getElementById("age").value.trim());
            const name = document.getElementById("name").value.trim();
	
            if(!name || isNaN(age)) {
                alert("Please enter valid details");
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
            .then((msg) => alert(msg))
            .catch((msg) => alert(msg));
        };
        document.getElementById("btn").addEventListener("click", checkage);