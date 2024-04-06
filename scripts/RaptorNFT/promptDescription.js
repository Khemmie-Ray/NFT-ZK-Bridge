const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const RaptorNFT = await hre.ethers.getContractFactory("RaptorNFT");
  const raptorNFT = RaptorNFT.attach(CONTRACT_ADDRESS);

  console.log(await raptorNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});