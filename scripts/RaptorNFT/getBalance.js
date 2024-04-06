const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const RaptorNFT = await hre.ethers.getContractFactory("RaptorNFT");
  const raptorNFT = await RaptorNFT.attach(CONTRACT_ADDRESS);

  const balance = await raptorNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});