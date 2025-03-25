document.addEventListener("DOMContentLoaded", () => {                       // presim nese eshte bo load kontenti dhe pastaj te ekzekutohet vet funksioni    
    
    const form = document.getElementById("emailForm");                      // ruajm me i variable formen dhe e lidhim me html
    const nameInput = document.getElementById("name");                      // ruajm me i variable nameInput dhe e lidhim me html
    const emailInput = document.getElementById("email");                    // ruajm me i variable emailInput dhe e lidhim me html
    const subjectInput = document.getElementById("subject");                // ruajm me i variable subjectInput dhe e lidhim me html
    const messageInput = document.getElementById("message");                // ruajm me i variable messageInput dhe e lidhim me html

    form.addEventListener("submit", (e) => {                                // brenda formes krijojme nje event listener per te shikuar nese po ndodh
        e.preventDefault();                                                 // eventi submit,nese ka ndodh nje funksion brenda qe e quajm me (e)

        const name = nameInput.value.trim();                                // validojme inputat brenda formes
        const email = emailInput.value.trim();                              // validojme inputin duke i largu hapsirat e bardha
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if(!name || !email || !subject || !message){                                   // shkruajme kushtet qe te validojme kto inpute,i bejm te gjitha fushat required
            Toastify({                                                                 // bejm nji mesazh me toastify nqs te gjitha jan required
                text: "All fields are required!",
                duration: 3000,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
            }).showToast();
            return;                                                                     // bejm return ,kur kodi mberrin ktu athere del komplet jasht atij funksioni
        }

        if(!validateEmail(email)){                                                         // bejm nje kusht per me shiku a eshte validu emaili
            Toastify({
                text: "Please enter a valid email address!",                               // toastify per me shfaq mesazhin
                duration: 3000,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371 )",
            }).showToast();
            return;
        }

        sendEmail({name, email, subject, message});                                    // bejm nje funksion sendEmail dhe e dergojme argumentat
    })

    function validateEmail(email){                                                        // funksion per te validu emailin dhe preim nje parameter email
        const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;         // bejm nje variable me pa a eshte valide ky imail         
        return emailPattern.test(email);                                                  // e etstojme nqs email eshte e sakt e kthen kte kusht ne true
    }

    function sendEmail(data){                                                          // krijojme nje funksion sendEmail me parameter (data) qe e kemi dergu nje objekt
        setTimeout(() => {                                                             // e bejm me setTimeout qe te mar pak kohe qe te ekzekutohet
            Toastify({                                                                 // dhe me kte shfaqim nje mesazh
                text: "Email has been sent!",
                duration: 3000,
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #00b09b , #96c93d)",
            }).showToast();
            form.reset();                                                                // e bejm form.reset pas 1000ms qe te ekzekutohet kodi jone
        },1000)
            
    }
})