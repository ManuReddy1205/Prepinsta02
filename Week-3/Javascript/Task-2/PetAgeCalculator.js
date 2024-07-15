function calculatePetAge(PetAgeInHumanYear, conversionRate = 7){

    const petAgeInPerYear =  PetAgeInHumanYear * conversionRate;
    
    document.write(`your kitty is ${petAgeInPerYear} years old in cat Years!<br>`);
}
calculatePetAge(5);
calculatePetAge(2, 7);
calculatePetAge(2, 4);