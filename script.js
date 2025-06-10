const checkage = ()=>{
            const age = document.getElementById("age").value
            const name = document.getElementById("name").value

            if(!age || !name){
                alert("Please enter valid details.")
            }
            const prom = new Promise((res,rej)=>{
                if(age>18){
                   setTimeout(()=>{res(alert(`Welcome, ${name} You can vote.`));},4000)
                }else{
                    setTimeout(()=>{rej(alert(`Oh sorry ${name} You aren't old enough.`));},4000)
                }
               
            })
        }
