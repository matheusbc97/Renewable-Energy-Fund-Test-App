import {Button, Text} from '../../../components';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';

const Container = styled.View`
  padding-horizontal: 20px;
  padding-top: 60px;
`;

const PortfolioValuesRow = styled.View`
  flex-direction: row;
`;

const PortfolioValuesRightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const PortfolioValuesLeftContainer = styled.View`
  flex: 1;
`;

const PortfolioValue = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const PortfolioPercentage = styled.Text``;

const PortfolioLastPurchase = styled.Text`
  color: ${COLORS.onBackgroundVariant};
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
`;

const ButtonPrimary = styled(Button)`
  flex: 1;
`;

const ButtonSecondary = styled(Button)`
  flex: 1;
  margin-left: 10px;
`;

const RetiredCreditsText = styled.Text`
  margin-top: 15px;
  color: ${COLORS.onBackgroundVariant};
`;

const DisclaimerContainer = styled.View`
  background-color: #f4f4f4;
  margin-top: 40px;
  padding: 10px;
  border-radius: 4px;
`;

const DisclaimerText = styled.Text`
  color: ${COLORS.onBackgroundVariant};
`;

const BuyButton = styled(Button)`
  margin-top: 30px;
`;

export default function FundUserPortfolio() {
  return (
    <Container>
      <Text variant="title">Your Portfolio</Text>

      <PortfolioValuesRow>
        <PortfolioValuesLeftContainer>
          <PortfolioValue>18 Credits</PortfolioValue>
          <PortfolioPercentage>8.41%</PortfolioPercentage>
        </PortfolioValuesLeftContainer>

        <PortfolioValuesRightContainer>
          <PortfolioValue>$328.14</PortfolioValue>
          <PortfolioLastPurchase>Last purchase 28d ago</PortfolioLastPurchase>
        </PortfolioValuesRightContainer>
      </PortfolioValuesRow>

      <ButtonsContainer>
        <ButtonPrimary label="Sell" onPress={() => {}} />
        <ButtonSecondary
          label="Retire Credits"
          onPress={() => {}}
          variant="secondary"
        />
      </ButtonsContainer>

      <RetiredCreditsText>
        You've previously retired 28 credits of this asset
      </RetiredCreditsText>

      <DisclaimerContainer>
        <DisclaimerText>
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. The information provided is
          not investment advice, and should not be used as a recommendation to
          buy or sell assets.
        </DisclaimerText>
      </DisclaimerContainer>

      <BuyButton label="Buy" onPress={() => {}} />
    </Container>
  );
}
