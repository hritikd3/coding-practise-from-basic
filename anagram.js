//take two string and check they are anagram or not 
//i.e, "mama": "amma" -> true 
//i.e, "awesome" : " wesome" -> false

function checkAnagram(first,second){
    if(first.length != second.length)
    return false;

    const lookup={};
    for(let i=0; i< first.length; i++){
    let letter= first[i]
    // check if letter exist so increament , otherwise set it to 1
   lookup[letter] ? lookup[letter] += 1 : lookup[letter]=1;
    }
    console.log(lookup);
    for(let i=0; i< second.length;i++){
        let letter=second[i];
//can't find the ltter or ltter is zero then its not a anagram
        if(!lookup[letter])
        return false
        else
        lookup[letter]-= 1;
        
    }
    return true;


}


checkAnagram("awesome","dsdssds")