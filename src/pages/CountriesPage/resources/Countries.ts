export interface CountrySearch {
    Country: string;
    Slug:    string;
    ISO2:    string;
}

export interface CountryDetails {
    Country:     string;
    CountryCode: string;
    Province:    string;
    City:        string;
    CityCode:    string;
    Lat:         string;
    Lon:         string;
    Confirmed:   number;
    Deaths:      number;
    Recovered:   number;
    Active:      number;
    Date:        Date;
}