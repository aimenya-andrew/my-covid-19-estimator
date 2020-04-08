const covid19ImpactEstimator = (data) => {
  let factor;
  const time = data.timeToElapse;
  const impact = {};
  const severeImpact = {};
  if ((data.periodType) === 'days') {
    factor = Math.floor((time / 3));
  } else if ((data.timeToElapse) === 'weeks') {
    factor = Math.floor(((time / 3) * 7));
  } else if (((data.timeToElapse) === 'months')) {
    factor = Math.floor(((time / 3) * 30));
  }
  impact.currentlyInfected = ((data.reportedCases) * 10);
  severeImpact.currentlyInfected = ((data.reportedCases) * 50);
  impact.infectionsByRequestedTime = (impact.currentlyInfected * (2 ** factor));
  severeImpact.infectionsByRequestedTime = (severeImpact.currentlyInfected * (2 ** factor));

  const output = {
    data,
    impact,
    severeImpact
  };
  return output;
};

export default covid19ImpactEstimator;
