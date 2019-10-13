export class Profile {
    /* inital request schema */
    profile: object;
    data: object;
 
    /* schema to simplyfy data modelling */
    metadata: object;
    statsArray: [];

    /* schema for profile components */
    activeLegend: string;
    imgUrl: string;
    gamertag:string;
    platform:string;
    overallRank: number;
    overallKills: number;
    overallDamage: number;
    overallHeadshots: number;
    overallTopThree: number;

    constructor() {

    }

}

 