function myDictionary() {                                               //Created function "myDictionary"
    var PC = {                                                          //Created variable "PC"
        CPU:"AMD5950x",                                                 //Created dictionary, KVPs
        GPU:"RTX3090",
        SSD:"M.2"
    };                                                                  //Ended dictionary
    delete PC.SSD;                                                      //Deleted KVP "SSD"
    document.getElementById("Dictionary").innerHTML = PC.SSD;           //Attempt to grab "PC.SSD", but will return undefined
}                                                                       //  since it has been deleted.