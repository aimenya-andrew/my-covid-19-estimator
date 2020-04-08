const covid19ImpactEstimator = (data) => {
    const input = data;
    const reportedCases = data.reportedCases;
    impact.currentlyInfected = reportedCases * 10;
    severeImpact.currentlyInfected = reportedCases * 50;
    impact.infectionsByRequestedTime = currentlyInfected * 512;
    severeImpact.infectionsByRequestedTime = currentlyInfected * 512;

    return {
        data,
        impact,
        severeImpact,
    };
};

export default covid19ImpactEstimator;
