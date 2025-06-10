 const checkage = ()=>{
            const age = document.getElementById("age").value.trim()
            const name = document.getElementById("name").value.trim()

            if(!age || !name){
                alert("Please enter valid details.")
                return
            }
            const prom = new Promise((res,rej)=>{
                setTimeout(()=>{
                    if(age>18){
                        res(`Welcome, ${name}. You can vote.`)
                    }else{
                        rej(`Oh sorry ${name}. You aren't old enough.`)
                    }
                },4000)
            }).then((msg)=>alert(msg)).catch((msg)=>alert(msg))
        }