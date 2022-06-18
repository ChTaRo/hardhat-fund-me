const { network } = require("hardhat")
const {
    developmentChain,
    DECIMAL,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // const chainID = network.config.chainId

    if (developmentChain.includes(network.name)) {
        log("Local network deteced! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMAL, INITIAL_ANSWER],
        })
        log("Mock deploed!")
        log("----------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
