export enum ChartId {
  TXAccess = "6582102b903ab0943c07dbf8",
  TXAdoption = "65a6952ca3f05308cc4f280c",
  TxReliability = "65a696bfe0bd8303ad697348",
  TXCostBarrier = "65b289e959e498194521b867",
  TXSubscription = "65b2898459e498194521b445",
  TXDigitalLiteracy = "65b28b888acf87538ccd1776",
  TXACP = "65b3dc52d10754e6790d81de",
  TXCybersecurityAwareness ="65b28c278acf87538ccd19bf",
  TXPublicResourceAccess = "65b28c7c59e498194521c4da",
  TXMoneyMatters ="65b28cd059e498194521cba6",
  TXBSL = "65b28d8859e498194521cea5",
  TXCost100 = "65b6dc22db9f7faac7f2e702",
  TXCybersecurityConfidence = "65b6dd79db9f7faac7f2e9f8",
  TXAdoptionTract = "65b817a5db9f7faac7f8ca2e",
  TXLowIncomePopulationTract = "65ba9c9e6b98f1a31d4f4a89",
  TXDevices = "65b28a7459e498194521bb72",
  TXACPAwareness = "65c14d6fe3659684dd48aeb9"
}

export enum SegmentId {
  counties = "county",
  regions = "65428489b4440631aad90229",
  tract = "tract"
}

export enum DataPointGeneratorName {
  noInternetProportion,
  hispeedShare,
  lowIncomeHispeedShare,
  lowIncomeInternetSmartphoneOnlyShare,
  internetSmartphoneOnlyShare,
  internetwithdeviceshare,
  lowIncomeInternetwithdeviceshare,
  bslUnserved,
  bslUnderserved,
  costAsBarrier,
  broadbandShare,
  digitalLiteracySkills,
  acpEligibleEnrolled,
  cybersecurityAwareness,
  publicResourceAccess,
  costOver100,
  cybersecurityConfidence,
  lowincomeShare,
  noHispeedShareTract,
  smartphoneOnly,
  acpAwareness
}