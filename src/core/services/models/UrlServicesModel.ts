export namespace UrlServicesModel {
  export namespace CreateShortUrl {
    export type Request = string;
    export interface Response {}
  }
  export namespace GetUrlInformations {
    export type Request = string;
    export interface Response {
      url: string;
      clickCount: number;
      uniqueIps: number;
      clicksPerHour: number;
      avgTimeToAccessSeconds: number;
      createdAt: Date;
    }
  }
}
