const countLayers = (rug)=>{
    return Math.floor(rug.length/2)+1;
}

console.log(countLayers(
    [
        "AAAA",
        "ABBA",
        "AAAA"
        ]
));
console.log(countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
    ]) );