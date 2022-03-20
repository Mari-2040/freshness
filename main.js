 let user = [
    {
        surati:"images/shavi.jpg",
        satauri:"YOUR TITLE HERE",
        texti: "Vestibulumaccumsan egestibulum eu justo"

    },
    {
        surati:"images/Two-dobermans-1-1024x681.jpg",
        satauri:"YOUR TITLE HERE",
        texti: "Vestibulumaccumsan egestibulum eu justo"
    }, 
    {

        surati:"images/dog.jpg",
        satauri:"YOUR TITLE HERE",
        texti: "Vestibulumaccumsan egestibulum eu justo"
     
    },
];

let info ="";

for(obieqti of user){

    info+=`  <div class="yuti">          
                <img class="yuti-img" src="${obieqti.surati}">
                    <div class="here">${obieqti.satauri}E</div>
                        <div class="vest">${obieqti.texti}</div>
                            <button class="more">
                                READ MORE »
                            </button>
            </div>`

}
document.getElementById("mshobeli").innerHTML=info;



let user2 =[

    {
        picture:"images/07.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",
    },

    {
        picture:"images/08.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",
    },

    {
        picture:"images/09.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",

    },

    
    {
        picture:"images/06.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",
    },

    {
        picture:"images/07.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",
    },
    
    {
        picture:"images/03.jpg",
        paragraph:"Title Goes Here",
        text:"Morbit incidunt maurisque",

    },
]


let here="";

for (obgeqt of user2){

    here+= `<div class="mus">
                <img class="age" src="${obgeqt.picture}">
               <div class="div">
                    <h1 class="satauri">${obgeqt.paragraph}</h1>
                    <p class="texsti">${obgeqt.text}</p>
                </div>
            </div>`
console.log(obgeqt);
}

document.getElementById("shvili").innerHTML=here;
