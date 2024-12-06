// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    struct Campaign {
        address creator;
        uint256 goal;
        uint256 deadline;
        uint256 currentAmount;
        string description;
        bool claimed;
        mapping(address => uint256) contributions;
    }

    uint256 public campaignCount;
    mapping(uint256 => Campaign) public campaigns;
    
    event CampaignCreated(uint256 campaignId, address creator, uint256 goal, uint256 deadline);
    event ContributionMade(uint256 campaignId, address contributor, uint256 amount);
    event FundsClaimed(uint256 campaignId, address creator, uint256 amount);
    event RefundClaimed(uint256 campaignId, address contributor, uint256 amount);

    modifier validCampaign(uint256 _campaignId) {
        require(_campaignId < campaignCount, "Invalid campaign ID");
        _;
    }

    function createCampaign(
        uint256 _goal,
        uint256 _durationInDays,
        string memory _description
    ) external returns (uint256) {
        require(_goal > 0, "Goal must be greater than 0");
        require(_durationInDays > 0, "Duration must be greater than 0");
        
        uint256 campaignId = campaignCount++;
        Campaign storage campaign = campaigns[campaignId];
        
        campaign.creator = msg.sender;
        campaign.goal = _goal;
        campaign.deadline = block.timestamp + (_durationInDays * 1 days);
        campaign.description = _description;
        campaign.currentAmount = 0;
        campaign.claimed = false;
        
        emit CampaignCreated(campaignId, msg.sender, _goal, campaign.deadline);
        return campaignId;
    }

    function contribute(uint256 _campaignId) external payable validCampaign(_campaignId) {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(block.timestamp < campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than 0");
        
        campaign.contributions[msg.sender] += msg.value;
        campaign.currentAmount += msg.value;
        
        emit ContributionMade(_campaignId, msg.sender, msg.value);
    }

    function claimFunds(uint256 _campaignId) external validCampaign(_campaignId) {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(msg.sender == campaign.creator, "Only creator can claim funds");
        require(block.timestamp >= campaign.deadline, "Campaign has not ended");
        require(campaign.currentAmount >= campaign.goal, "Goal not reached");
        require(!campaign.claimed, "Funds already claimed");
        
        campaign.claimed = true;
        payable(campaign.creator).transfer(campaign.currentAmount);
        
        emit FundsClaimed(_campaignId, campaign.creator, campaign.currentAmount);
    }

    function claimRefund(uint256 _campaignId) external validCampaign(_campaignId) {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(block.timestamp >= campaign.deadline, "Campaign has not ended");
        require(campaign.currentAmount < campaign.goal, "Goal was reached");
        
        uint256 contributionAmount = campaign.contributions[msg.sender];
        require(contributionAmount > 0, "No contribution found");
        
        campaign.contributions[msg.sender] = 0;
        payable(msg.sender).transfer(contributionAmount);
        
        emit RefundClaimed(_campaignId, msg.sender, contributionAmount);
    }

    function getCampaignDetails(uint256 _campaignId) external view validCampaign(_campaignId) 
        returns (
            address creator,
            uint256 goal,
            uint256 deadline,
            uint256 currentAmount,
            string memory description,
            bool claimed
        ) 
    {
        Campaign storage campaign = campaigns[_campaignId];
        return (
            campaign.creator,
            campaign.goal,
            campaign.deadline,
            campaign.currentAmount,
            campaign.description,
            campaign.claimed
        );
    }

    function getContribution(uint256 _campaignId, address _contributor) external view validCampaign(_campaignId)
        returns (uint256)
    {
        return campaigns[_campaignId].contributions[_contributor];
    }
}