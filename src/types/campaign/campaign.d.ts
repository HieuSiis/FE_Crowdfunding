export type CampaignData = {
    createdCampaigns: {
        _id: string;
        category: string;
        title: string;
        description: string;
        srcVideo: string;
        raised: number;
        target: number;
        backer: number;
        day: number;
    }[];
};
