const cars = [                                             // perdorim nje variable si array per vendosjen e objekteve(makinave)
    {
        name: "Tesla Model 3",
        type: "Cars & Minivan",
        year: 2023,
        model: "LC76",
        fuel: "Petrol",
        price: 36620,
        used: true,
        image: "img/tesla.avif"
    },

    {
        name: "Ford F-150",
        type: "Trucks",
        year: 2021,
        model: "XL",
        fuel: "Diesel",
        price: 28500,
        used: false,
        image: "img/Fordf150.png"
    },

    {
        name: "Toyota Highlander",
        type: "Crossovers & SUVs",
        year: 2022,
        model: "SE",
        fuel: "Hybrid",
        price: 42000,
        used: false,
        image: "img/toyota.png"
    },

    {
        name: "Chevorlet Bolt",
        type: "Electrified",
        year: 2023,
        model: "EV",
        fuel: "Electric",
        price: 31000,
        used: true,
        image: "img/chevroletbolt.png"
    },

    {
        name: "Chevrolet",
        type: "Cars & Minivan",
        year: 2023,
        model: "EV",
        fuel: "Electric",
        price: 31000,
        used: true,
        image: "img/chevroletbolt.png"
    },

    {
        name: "Ferrari",
        type: "Cars & Minivan",
        year: 2021,
        model: "SPORT",
        fuel: "Petrol",
        price: 150000,
        used: false,
        image: "img/ferarikuq.avif"
    },

    {
        name: "Ferrari-Spider",
        type: "Cars & Minivan",
        year: 2021,
        model: "SPORT",
        fuel: "Petrol",
        price: 170000,
        used: false,
        image: "img/ferrari-spider.avif"
    },

    {
        name: "Honda",
        type: "Crossovers & SUVs",
        year: 2023,
        model: "Civic",
        fuel: "Hybrid",
        price: 50000,
        used: false,
        image: "img/honda-civic-hybrid.avif"
    },

    {
        name: "Tesla",
        type: "Electrified",
        year: 2021,
        model: "EV",
        fuel: "Petrol",
        price: 35000,
        used: false,
        image: "img/tesla-kuqe.avif"
    },

    {
        name: "Honda",
        type: "Electrified",
        year: 2021,
        model: "SPORT",
        fuel: "Hybrid",
        price: 60000,
        used: false,
        image: "img/honda-blu-hybrid.avif"
    },

    {
        name: "Audi R8",
        type: "Cars & Minivan",
        year: 2021,
        model: "SPORT",
        fuel: "Petrol",
        price: 165000,
        used: false,
        image: "img/audi-rs8blu.avif"
    },

    {
        name: "Ford F-150",
        type: "Trucks",
        year: 2021,
        model: "XL",
        fuel: "Diesel",
        price: 28500,
        used: false,
        image: "img/Fordf150.png"
    }
]


function filterCarsByCategory(category){                                    //bejm nje funskion per te ber filtrimin e ktyre veturave ne baz te kategoris
    
    if(category === "All"){                                                 // nese category eshte e = all 
        return cars;                                                        //atehere kthei te gjitha veturat
    }
    return cars.filter(car => car.type === category);                        // ose perndryshe beje filtrimin me array function duke i thene
}                                                                           // shikoja tipin ksaj veture a eshte e barabarte me tipin qe ka ardh prej kategoris
                                                                            // konsiderojme tipin e cdo veture si nje kategori                                                                            function displayCars(carList){                                              
    

function displayCars(carList){                                            // bejm funksionin per me shfaq veturat qe kemi filtruar                          
    const container = document.querySelector(".cards-container");         //bejm nje variable const container dhe selektojme nga html cards-container
    container.innerHTML = "";                                             // i themi kti container fillimisht ti fshi komplet veturat
                                                                          // per te ber paraqitjen e veturave sipas car list qe na vjen
    
    carList.forEach(car => {                                             //e bejm forEach qe te kalojm ne cdo vetur(objekt) i qasemi si vetur(car)                                                                
        const carCard = document.createElement("div");                   // ti paraqisim krejt veturat si karta duke krijuar dhe nje div
        carCard.classList.add("card");                                   //kti divi i shtojm nje klas duke e qujt card,per ti kriju vet cartat e objekteve (makinave)

        carCard.innerHTML =                                              // kshu shfaqim te dhenat e objekteve ne browser 
        `                                           
        <div class="card-header">
            <h3>${car.name}</h3>
                <p>${car.used ? "Used" : "New"}</p>
        </div>
        <div class="card-content">
            <div class="image">
                <img src="${car.image}" alt="${car.name}"/>
            </div>
                <ul>
                    <li><span>Model Year:</span>${car.year}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Fuel:</span>${car.fuel}</li>
                </ul>
                    <h3 class="price">$ ${car.price}</h3>
                    <button class="order-btn">
                        Order now<span><i class="fa-solid fa-chevron-right"></i></span>
                    </button>
                </div>
        `

        carCard.classList.add("card-fade-in");                                       // lloj animacioni qe kur te ndrohen cartat te vij me nje efekt
        container.appendChild(carCard);                                                   // bejm vet karten append brenda container
    })
}
                                                                                      // funskion per te bere pjesen e butonit aktive qe kur te klikohet te shkoj dhe ti thrrasi funksionet qe krijuam
                                                                                        // qe tna funksionoj filtrimi
document.querySelectorAll(".category").forEach(button => {                                        // per cdo button                             
    button.addEventListener("click", event => {                                                   // per te degjuar cdo button qe behet click bejm nje even si array funksion        
        document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));    // ktu bejm fshirjen e klases aktive te ai butoni qe eshte larguar 
        event.target.classList.add("active");                                                     // dhe ktu ja shtojm vetem butonit qe ja kemi selektu

        const selectedCategory = event.target.textContent;                                        // selektojme funksionin filteCarsByCategory qe ti filtrojm kto vetura dhe per ti shfaq ne web                              
        const filteredCars = filterCarsByCategory(selectedCategory);                              // selektojme fillimisht textin e kategoris,thresim funksionin dhe i dergojme kategorin qe kemi selektu
        displayCars(filteredCars);                                                                // ktu thrrasim funksionin qe te shfaqi veturat duke i dergu veturat e filtrume
    })
})

document.addEventListener("DOMContentLoaded",displayCars(cars))                            // ne fund e sinjalizojme dhe i dergojme komplet veturat