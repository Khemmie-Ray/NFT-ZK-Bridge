const hre = require("hardhat");

async function main() {
  const RaptorNFT = await hre.ethers.deployContract("RaptorNFT");
  const raptorNFT = await RaptorNFT.waitForDeployment();

  console.log("RaptorNFT address:", raptorNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});