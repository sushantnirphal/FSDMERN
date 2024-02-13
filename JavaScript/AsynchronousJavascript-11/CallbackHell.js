 bookHotel(hotelId, function(){
    if(error){
        handleError
    }else{
        proceedToPayment(hotelId,function(){
            if(error){
                handleError
            }else{
                showBookingStatus(function(){
                    if(error){
                        handleError
                    }else{
                        updateBookingHistory(function(){
                            if(error){
                                handleError
                            }else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
 })


 