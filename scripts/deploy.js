import hre from "hardhat";

const { ethers } = await hre.network.connect();

async function main() {
    const Storage = await ethers.getContractFactory("SecureStorage");

    const contract = await Storage.deploy();

    await contract.waitForDeployment();

    console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
}); 