export interface ExhibitionDetail {
  id : number,
  startDate : string,
  finisDate : string,
  city :  string,
  venue :  string,
  shortName :  string,
  englishName :  string,  
  eventName :  string,  
  category :  string,
  imgUrl:  string, 
  link: string, 
}

export interface ExhibitionList {
  exhibitions : ExhibitionDetail[];
}
