const covid19ImpactEstimator = (data) => {
    const impact = {};
    const severeImpact = {};
    impact.currentlyInfected = ((data.reportedCases) * 10);
    severeImpact.currentlyInfected = ((data.reportedCases) * 50);
    impact.infectionsByRequestedTime = (impact.currentlyInfected * 512);
    severeImpact.infectionsByRequestedTime =(severeImpact.currentlyInfected * 512);

    const output = {
        data,
        impact,
        severeImpact
    };
    return output;
};

export default covid19ImpactEstimator;
