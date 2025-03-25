// kur klikohet forma do futemi brenda ktij funksioni

function subscribeUser(event){                                                      // bejm nje funskion duke thirrur ne event (event)
    event.preventDefault();                                                         // e bejm per tmos u ber refresh faqia kur shtype butoni

    const email = document.getElementById("subscriberEmail").value;                 // bejm nje variable per tu lidhur me imail duke e mare id nga html dhe duke i lexu vtm value
    const isSubscribed = document.getElementById("checkbox").checked;               // marim pjesen e checkbox nga html ,sepse na intereson te dijm a eshte check apo jo 

    if(!email || !email.includes("@")){                                             // shkojme validojme formen per me dit nqs email eshte i sakt dhe cdo gje eshte ne rregull
        Toastify({
            text: "Please enter your Email adress!",                                // perdorim toastify per me shfaq mesazhin kur imail nuk eshte valid
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
        }).showToast();
        return;
    }

    const subscriber = {                                                        // ruajme pjesen e subscribe te userit si nje objekt
        email: email,                                                           // shko mer imail e userit
        subscribed: isSubscribed,                                               // dergojme vleren isSubscribed ,ose del true ose false
    }

    localStorage.setItem("subscriber",JSON.stringify(subscriber));             // marim objektin subscriber dhe kto te dhena idergojme ne local storage

    Toastify({                                                                 // perdorim toastify kte her kur imaili eshte ber suksesfull
        text: "Subscribed succesfull your are now subscribed",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#28a745",
    }).showToast();

    document.getElementById("subscriberEmail").value = "";                         // e bejm per te pastruar formen 
    document.getElementById("checkbox").checked = true;                            // qe checkbox te jet perher check

}


// ktu eshte nje ngjarje per formen qe behet subscribe
document.getElementById("subscribeForm").addEventListener("submit", subscribeUser)           // marim id e subscribeForm dhe kur te behet submit te shkoj te thrrasi funksionin subscribeUser

function checkSubscriptionStatus(){                                                         // bejm nje funskion per ta lajmeru qe eshte ber nje here subscribe
    
    const subscriber = JSON.parse(localStorage.getItem("subscriber"));                      // nje variable si ta lexojme nga local storage me key subscriber

    if(subscriber && subscriber.subscribed){                                                // bejm nje if qe nqs subscriber eshte ber nje her
        
        document.getElementById("subscriberEmail").value = subscriber.email;                // shkojme lexojme pjesen e subscriberEmail duke i lexu vleren dhe e zevendesojme me vleren subscriber.emal
        document.getElementById("checkbox").checked = subscriber.subscribed;                // shkojme lexojme pjesen e checkbox dhe e rujme vleren e subscribe qe i bjen true ose false

        Toastify({                                                                          // kqyrim kto dy vlera dhe me pas shfaqim mesazhin toastify
            text: "You are alredy subscribed with Email:" + subscriber.email,               // ktu shfaqim mesazhin dhe e bashkangjisim si string + subscriber.email
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "#17a2b8",
        }).showToast()
    }
}

document.addEventListener("DOMContentLoaded", checkSubscriptionStatus)                    // ktu e thresim si funksion kur DOM eshte bere loaded komplet