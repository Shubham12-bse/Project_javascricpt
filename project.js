const NFTs = []

function mintNFT(_name, _eyecolor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyecolor": _eyecolor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nName: " + NFTs[i].name);
        console.log("\nShirtType: " + NFTs[i].shirtType);
        console.log("\nEyeColor: " + NFTs[i].eyecolor);
        console.log("\nBling: " + NFTs[i].bling);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Shubham", "Black", "Printed", "Silver Chain");
listNFTs();
getTotalSupply();