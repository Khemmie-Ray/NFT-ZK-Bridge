// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract RaptorNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("RaptorNFT", "RPNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://coral-willowy-felidae-848.mypinata.cloud/ipfs/QmZmoEV7tkYdkQ9BmtbXz5cJ1zWQ1JLk854cyY36Du6FRT/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Eagle Haven: NFT Collection Celebrating Africa's Avian Majesty.";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}