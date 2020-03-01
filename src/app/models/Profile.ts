export class Profile {
  /* schema to simplyfy data modelling */
  metadata: object;
  statsArray: [];

  /* schema for profile components */
  activeLegend: string;
  imgUrl: string;
  gamertag: string;
  platform: string;
  overallRank: number;
  overallKills: number;
  overallDamage: number;
  overallHeadshots: number;
  overallTopThree: number;

  ngOnInit() {}

  // models profile response into workable profile for view
  public buildProfile(data: any) {
    // section initial schema into two blocks to branch from
    this.metadata = data.metadata;
    this.statsArray = data.stats;
  }
}
