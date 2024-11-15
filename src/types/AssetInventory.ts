interface AssetFields {
    Asset: string;
    "Asset Type": string;
    "Asset Description": string;
    "Asset Broadband Focus Area": string[];
    "Asset Covered Population": string[];
    "Organization Type": string[];
    "Organization Sub-Type": string[];
    "Coverage Area": string[];
    Program: string;
    "Key Contact": string;
    "Contact Email": string;
    "Org County": string[];
    County: string[];
    Website?: string;
    Hide: boolean;
}

export interface AssetInfo {
  createdTime: string;
  fields: AssetFields
}