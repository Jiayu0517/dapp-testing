async function main() {
    const HouseRental = await ethers.getContractFactory("HouseRental");
 
    // Start deployment, returning a promise that resolves to a contract object
    const house_rental = await HouseRental.deploy();   
    console.log("Contract deployed to address:", house_rental.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });