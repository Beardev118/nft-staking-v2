// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const Alice = await ethers.getContractFactory("AliceNFT");
  const alice = await Alice.deploy();

  await alice.deployed();

  console.log("Alice deployed to:", alice.address);

  const Market = await ethers.getContractFactory("Market");
  const market = await Market.deploy();

  await market.deployed();

  console.log("Market deployed to:", market.address);

  const MarketV2 = await ethers.getContractFactory("MarketV2");
  const marketV2 = await MarketV2.deploy();

  await marketV2.deployed();

  console.log("MarketV2 deployed to:", marketV2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
