import {IFund, IFundUserPortfolio} from '../types';

export const fundsMock: IFund[] = [
  {
    id: 1,
    name: 'ABC Fund',
    value: 100,
    yield: 2.5,
    aum: 5000000,
    issueDate: '2022-01-01',
    vintageRange: '2010-2020',
    ter: 0.75,
    priceAtClose: 102,
    priceAtOpen: 100,
  },
  {
    id: 2,
    name: 'XYZ Fund',
    value: 50,
    yield: 1.8,
    aum: 3000000,
    issueDate: '2021-05-15',
    vintageRange: '2015-2025',
    ter: 1.25,
    priceAtClose: 55,
    priceAtOpen: 52,
  },
  {
    id: 3,
    name: 'DEF Fund',
    value: 75,
    yield: 3.2,
    aum: 8000000,
    issueDate: '2020-09-30',
    vintageRange: '2008-2018',
    ter: 0.95,
    priceAtClose: 80,
    priceAtOpen: 78,
  },
];

interface IFundBreakdownItem {
  id: number;
  name: string;
  description: string;
}

export interface IFundsAllInfos {
  fundId: number;
  fund: IFund;
  userPortfolio: IFundUserPortfolio;
  breakdown: IFundBreakdownItem[];
}

const fundBreakdownMock: IFundBreakdownItem[] = [
  {
    id: 1,
    name: 'AspiraDAC',
    description:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
  },
  {
    id: 2,
    name: 'EcoGenius',
    description:
      'EcoGenius provides eco-friendly solutions for your daily life, such as reusable straws and bamboo toothbrushes.',
  },
  {
    id: 3,
    name: 'Greenify',
    description:
      'Greenify is a mobile app that helps you track and reduce your carbon footprint.',
  },
  {
    id: 4,
    name: 'SustainTech',
    description:
      'SustainTech creates innovative sustainable technologies for a better future, such as solar-powered water purifiers and electric vehicles.',
  },
];

export const fundsAllMock: IFundsAllInfos[] = [
  {
    fundId: 1,
    fund: {
      id: 1,
      name: 'ABC Fund',
      value: 100,
      yield: -2.5,
      aum: 5000000,
      issueDate: '2022-01-01',
      vintageRange: '2010-2020',
      ter: 0.75,
      priceAtClose: 102,
      priceAtOpen: 100,
    },
    userPortfolio: {
      credits: 18,
      value: 328.14,
      yield: 8.42,
      lastPurchase: '28d ago',
      retiredCredits: 1,
    },
    breakdown: fundBreakdownMock,
  },
  {
    fundId: 2,
    fund: {
      id: 2,
      name: 'DEF Fund',
      value: 50,
      yield: 1.8,
      aum: 2000000,
      issueDate: '2021-06-01',
      vintageRange: '2015-2025',
      ter: 1.25,
      priceAtClose: 52,
      priceAtOpen: 50,
    },
    userPortfolio: {
      credits: 12,
      value: 218.76,
      yield: 6.28,
      lastPurchase: '35d ago',
      retiredCredits: 0,
    },
    breakdown: fundBreakdownMock,
  },
  {
    fundId: 3,
    fund: {
      id: 3,
      name: 'GHI Fund',
      value: 75,
      yield: 3.2,
      aum: 3000000,
      issueDate: '2020-03-15',
      vintageRange: '2015-2025',
      ter: 0.95,
      priceAtClose: 76,
      priceAtOpen: 74,
    },
    userPortfolio: {
      credits: 10,
      value: 182.6,
      yield: 5.12,
      lastPurchase: '42d ago',
      retiredCredits: 0,
    },
    breakdown: fundBreakdownMock,
  },
];
