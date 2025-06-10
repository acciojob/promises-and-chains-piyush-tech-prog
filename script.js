 const checkage = ()=>{
            const age = document.getElementById("age").value
            const name = document.getElementById("name").value

            if(!age || !name){
                alert("Please enter valid details.")
                return
            }
            const prom = new Promise((res,rej)=>{
                setTimeout(()=>{
                    if(age>18){
                        res(`Welcome, ${name}. You can vote.`)
                    }else{
                        rej()
                    }
                },4000)
            }).then((msg)=>alert(msg)).catch((msg)=>alert(msg))
        }