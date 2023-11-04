let kirish = (Texnologiya , tajriba , daraja , horijiy_til , soft_skills)=>{
    tajriba && horijiy_til ?  console.log(`Texnologiyasi: ${Texnologiya} , Tajribasi: ${tajriba} , Darajasi: ${daraja} , Horijiy Tili: ${horijiy_til} , Soft_Skills: ${soft_skills}`) 
    : console.log(`Texnologiyasi: ${Texnologiya} , Tajribasi: "", Darajasi: ${daraja} , Horijiy Tili: "" , Soft_Skills: ${soft_skills}`)
        
}
kirish("Web-dasturchi" , "" , "Senior" , "" , "salom");
kirish("JavaScript" , "" , "Senior" , "" , "salom");
kirish("Web-dasturchi" , "5 yil" , "Senior" , "Ingliz tili" , "salom");


