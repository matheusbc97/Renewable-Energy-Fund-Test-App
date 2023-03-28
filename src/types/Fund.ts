export interface IFund {
  id: number;
  name: string;
  value: number;
  yield: number;
  aum: number;
  issueDate: string;
  vintageRange: string;
  ter: number;
  priceAtClose: number;
  priceAtOpen: number;
}
