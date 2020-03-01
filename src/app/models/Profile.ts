export class Profile {
  /* -- schema to simplyfy data modelling -- */
  /**
   * split main data
   */
  metadata: any;
  statsArray: Array<any>;

  /* -- schema for profile component -- */

  /**
   * metadata values
   */
  gamertag: string;
  activeLegend: string;

  /**
   *
   * stats array vales
   */
  imgUrl: string;
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

    //bind profile properties for display
    this.gamertag = this.metadata.platformUserId;
    this.activeLegend = this.metadata.activeLegendName;
    this.imgUrl = data.children[0].metadata.icon;
    this.overallRank = this.statsArray[0].value;
    this.overallKills = this.statsArray[1].value;
    this.overallDamage = this.statsArray[2].value;
    this.overallHeadshots = this.statsArray[3].value;
    this.overallTopThree = this.statsArray[4].value;
  }
}
