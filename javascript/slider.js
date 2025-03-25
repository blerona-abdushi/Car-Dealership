document.addEventListener("DOMContentLoaded", () => {                        // shikojm nese dom eshte bere loaded dhe ekzekutojme funksionin
    
    const slides = [                                                         // brenda ksaj variable (slides) ruajme te gjitha slidet qe do shfaqim
        {                                                                    // qe do te jete nje array
            bgText:"AUDI",
            imageSrc:"img/Audi.png"
        },

        {
            bgText:"TOYOTA",
            imageSrc:"img/Toyota.png"
        },

        {
            bgText:"Tesla",
            imageSrc:"img/Tesla3.png"
        }
    ]

    let currentSlideIndex = 0;                                               // nje variable per slidin ose indexin fillestar qe ne rastin e pare eshte 0
                                                                                // qdmth brenda array ka me shku me mar elementin e pare
    
    const bgTextElement = document.querySelector(".hero-bg-text");           // shkojme dhe selektojme elementet perkatese qe tkemi mundesi 
    const imageElement = document.querySelector(".hero-right-top img");      // te ndryshojme kontentet e tyre
    const dots = document.querySelectorAll(".dot");

    function updateSlide(newIndex){                                         // nje funksion qe kur te shtypim shigjetat te ndryshoj ai slide
                                                                            // newIndex do perdoret per te ndryshuar currentSlideIndex dhe ndryshimi i kontentit kryesor 
        bgTextElement.classList.add("bg-text-fade-out");                    // ktu i shtojme klasen nga css
        imageElement.classList.add("image-fade-out");

        setTimeout(() =>{                                              // vendosim nje setTimeout qe te presi derisa animacioni te kryhet
            
            bgTextElement.textContent = slides[newIndex].bgText;       // bejm nje update qe bgTextElemnt duke e mare nga  slides[newIndex].bgText tek indexi perkates
            imageElement.src = slides[newIndex].imageSrc;

            bgTextElement.classList.remove("bg-text-fade-out");       // ne momentin qe do ndryshoj slide fillimishit do ja fshijme klasen
            imageElement.classList.remove("image-fade-out");

            bgTextElement.classList.add("bg-text-fade-in");           // dhe ktu i shtojme dy klas te reja 
            imageElement.classList.add("image-fade-in");

            dots.forEach((dot,i) => {                                 // updatojme pjesen e pikave duke mar indexin e tyre 
                dot.classList.toggle("active",i === newIndex);        // dhe duke i shtu klasen "active" nese pika eshte aktive dhe i(index) 
            })                                                        // ka me qen i barabart me newIndex qe na vjen prej funksionit ne parameter

            setTimeout(() =>{                                          // nje setTimeout per me fshi kto klas qe sna nevojiten te rrin aty
                bgTextElement.classList.remove("bg-text-fade-in");
                imageElement.classList.remove("image-fade-in");
            }, 600)
            
            currentSlideIndex = newIndex;                             // bejm update slidin aktual qe eshte 
        }, 600);                                                       // 600 milisec qe te ekzekutohet 
    }

    document.querySelector(".hero-right-bottom button:first-child").addEventListener("click", () => {    // selektojme butonin e pare per majtas first-child sepse jan dy njesoj dhe kshu mer te parin
        const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;                        // qe te shkoj nji me mbrapa dhe e modulojme me vet gjatsin e slides.length

        updateSlide(newIndex)                                                                            // dhe ne fund thirret butoni update slide duke dergu kte index
    })

    document.querySelector(".hero-right-bottom button:last-child").addEventListener("click", () => {    // selektojme butonin e dyte djathtas last-child 
        const newIndex = (currentSlideIndex + 1 ) % slides.length;                                        // currentSlideIndex do shkoj duke u rritur dhe modulohet me slides.length

        updateSlide(newIndex)                                                                           // dhe ne fund thirret butoni update slide duke dergu kte index
    })

    updateSlide(currentSlideIndex);                                                                     // sinjalizojme funkisonin updateSlide duke i dergu currentSlideIndex
});