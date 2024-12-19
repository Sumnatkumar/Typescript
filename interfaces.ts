interface Namepro{
    firstname:string, 
    lastname:string,
}

let namets = (namepro:Namepro) =>{
    console.log(namepro.firstname);
    console.log(namepro.lastname);
}

namets({
    firstname:"Sumant",
    lastname:"Kumar"
})