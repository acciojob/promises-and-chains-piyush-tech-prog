const checkage = ()=>{
            const age = document.getElementById("age").value
            const name = document.getElementById("name").value

            if(!age || !name){
                alert("Please Enter valid Details")
            }
            const prom = new Promise((res,rej)=>{
                if(age>18){
                   setTimeout(()=>{res(alert("Welcome . You can Vote")); location.reload()},4000)
                }else{
                    setTimeout(()=>{rej(alert("Oh sorry . You aren't old enough")); location.reload()},4000)
                }
               
            })
        }
