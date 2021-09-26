async function main() {
    const LushNFT = await ethers.getContractFactory("LushNFT")
  
    const lushNFT = await LushNFT.deploy()
    console.log("Contract deployed to address:", lushNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  