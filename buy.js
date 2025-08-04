
    const quantityIn=document.querySelectorAll('.quantity');
    const minusbutton=document.querySelectorAll('.minus');
    const plusbutton=document.querySelectorAll('.plus');
    const totalspan=document.getElementById('total');
    const ticketTypeRadios=document.querySelectorAll('input[name="type"]');
    let ticketTypeMultiplier=1;
    function updateTotal(){
        let total=0;
        quantityIn.forEach(input => {
            const price=Number(input.dataset.price);
            const quantity=Number(input.value);
            total +=price*quantity;     
        });
        total*= ticketTypeMultiplier;
        totalspan.textContent=total;
    }
    plusbutton.forEach(button => {
        button.addEventListener('click',()=> {
            const input=button.parentElement.querySelector('.quantity');
            input.value=Number(input.value)+1;
            updateTotal();
        });
    });
    minusbutton.forEach(button => {
        button.addEventListener('click',()=> {
            const input=button.parentElement.querySelector('.quantity');
            if (Number(input.value)>0) {
                input.value=Number(input.value)-1;
                updateTotal();
            }
        });
    });
            ticketTypeRadios.forEach(radio=>{
                radio.addEventListener('change',()=>{
                    ticketTypeMultiplier=Number(radio.value)|| 1;
                    updateTotal();
                })
            });
            updateTotal();
    