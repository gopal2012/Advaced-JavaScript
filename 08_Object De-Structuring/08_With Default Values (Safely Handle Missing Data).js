let product = {
    name: "iPhone",
    specs: {
        ram: "6GB",
        storage: "128GB"
    }
};

function printSpecs({
    name,
    specs: {
        ram="N/A",
        storage= "N/A",
        camera= "Not given"
    } ={}
}){
    console.log(`${name} - RAM: ${ram}, Storage: ${storage}, Camera: ${camera}`);
}

printSpecs(product);