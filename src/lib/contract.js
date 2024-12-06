import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constants";

export const getContract = async (signerOrProvider) => {
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signerOrProvider);
};
