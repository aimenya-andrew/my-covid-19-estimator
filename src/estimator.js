const covid19ImpactEstimator = (data) => {
    const input = data;
    return {
        data: input,
        impact: {
            currentlyInfected: reportedCases * 10,
            infectionsByRequestedTime: currentlyInfected * 512,

        },
        severeImpact: {
            currentlyInfected: reportedCases * 50,
            infectionsByRequestedTime: currentlyInfected * 512,
        }
    };
};

export default covid19ImpactEstimator;
