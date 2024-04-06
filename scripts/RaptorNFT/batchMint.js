const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const RaptorNFT = await hre.ethers.getContractFactory("RaptorNFT");
  const raptorNFT = RaptorNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await raptorNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `RaptorNFT Balance: ${await raptorNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} RaptorNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
  console.log(await raptorNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});