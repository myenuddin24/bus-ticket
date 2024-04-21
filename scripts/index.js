function scrollToDown(){
    document.getElementById("buyTicket").scrollIntoView();
}

function setClickEvent(event){

   const bgColor = 'greenyellow';
   event.style.backgroundColor = bgColor ;



   const currentSeat = getElementValueById('selected-seat');
   const updatedCurrentSeat = currentSeat + 1;
   setElementValueById('selected-seat', updatedCurrentSeat);


   const remainingSeat = getElementValueById('remaining-sent');
   const updatedRemainingSeat = remainingSeat - 1;
   setElementValueById('remaining-sent', updatedRemainingSeat);


    const totalPrice = getElementValueById('total-price');
    const newPrice = totalPrice + 550;
    setElementValueById('total-price', newPrice);


    const grandTotal = getElementValueById('grand-total');
    const newGrandTotal = grandTotal + 550;
    setElementValueById('grand-total', newGrandTotal);
    
   
}




