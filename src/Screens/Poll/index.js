import React, { Component } from "react";
import { Dimensions, ScrollView, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import AnswerButton from "../../Components/AnswerButton";
import SubmitButton from "../../Components/SubmitButton";
import instance from "../../Config/Axios";
import { Bold, Card, Container, QuestionTitle } from "./style";

class PollScreen extends Component {
  constructor(props) {
    super(props);
    const pollData = props.navigation.getParam("pollData");
    this.state = {
      selectedAnswer: null,
      questionID: pollData.QuestionID,
      answeredQuestion: false
    };
  }

  selectAnswer = id => {
    this.setState({
      selectedAnswer: id
    });
  };

  submitAnswer = () => {
    const response = "R" + this.state.selectedAnswer + "VoteCount";
    const { questionID } = this.state;
    instance
      .post("/question/update", {
        questionID: questionID,
        response: response
      })
      .then(res => {
        console.log(res);
        this.setState({
          answeredQuestion: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { navigation } = this.props;
    const { selectedAnswer, answeredQuestion } = this.state;
    const pollData = navigation.getParam("pollData");
    const patientData = navigation.getParam("patientData");
    const {
      PatientFName,
      PatientSName,
      PatientGender,
      PatientAge,
      PatientNHSNum
    } = patientData[0];
    const {
      IsArchived,
      Response1,
      Response2,
      Response3,
      Response4,
      R1VoteCount,
      R2VoteCount,
      R3VoteCount,
      R4VoteCount,
      CaseDetails
    } = pollData;
    let sliceAt = 4;
    if (R3VoteCount === null) {
      sliceAt = 2;
    } else if (R4VoteCount === null) {
      sliceAt = 3;
    }
    const data = {
      labels: ["R1", "R2", "R3", "R4"].slice(0, sliceAt),
      datasets: [
        {
          data: [R1VoteCount, R2VoteCount, R3VoteCount, R4VoteCount].slice(
            0,
            sliceAt
          )
        }
      ]
    };
    return (
      <ScrollView
        style={{
          backgroundColor: "#e7e7e7",
          flex: 1
        }}
      >
        <Container>
          <Card alignItems={"flex-start"}>
            <Text>
              <Bold>NHS Number:</Bold> {PatientNHSNum}
            </Text>
            <Text>
              <Bold>Name:</Bold> {PatientFName + " " + PatientSName}
            </Text>
            <Text>
              <Bold>Age:</Bold> {PatientAge}
            </Text>
            <Text>
              <Bold>Gender: </Bold>
              {PatientGender}
            </Text>
            <Text />
            <Text>
              <Bold>Additional Notes:</Bold>
            </Text>
            <Text>{CaseDetails}</Text>
          </Card>

          {!answeredQuestion && IsArchived !== 1 ? (
            <Card width={"80%"}>
              <QuestionTitle>{pollData.QuestionTitle}</QuestionTitle>

              {pollData.Response1 ? (
                <AnswerButton
                  id={"1"}
                  value={selectedAnswer}
                  selectAnswer={this.selectAnswer}
                >
                  {pollData.Response1}
                </AnswerButton>
              ) : null}

              {pollData.Response2 ? (
                <AnswerButton
                  id={"2"}
                  value={selectedAnswer}
                  selectAnswer={this.selectAnswer}
                >
                  {pollData.Response2}
                </AnswerButton>
              ) : null}

              {pollData.Response3 ? (
                <AnswerButton
                  id={"3"}
                  value={selectedAnswer}
                  selectAnswer={this.selectAnswer}
                >
                  {pollData.Response3}
                </AnswerButton>
              ) : null}

              {pollData.Response4 ? (
                <AnswerButton
                  id={"4"}
                  value={selectedAnswer}
                  selectAnswer={this.selectAnswer}
                >
                  {pollData.Response4}
                </AnswerButton>
              ) : null}

              {selectedAnswer ? (
                <SubmitButton onPress={this.submitAnswer} />
              ) : null}
            </Card>
          ) : (
            <Card Margin={IsArchived !== 1 ? null : "0% 0% 20% 0%"}>
              {IsArchived !== 1 ? (
                <>
                  <QuestionTitle>
                    Your response has been recorded.
                  </QuestionTitle>
                  <QuestionTitle>
                    You are vote number{" "}
                    {R1VoteCount + R2VoteCount + R3VoteCount + R4VoteCount + 1}.
                  </QuestionTitle>
                </>
              ) : (
                <>
                  <BarChart
                    style={{
                      alignContent: "flex-start",
                      alignSelf: "flex-start",
                      paddingRight: 1
                    }}
                    data={data}
                    width={Dimensions.get("window").width * 0.78}
                    height={220}
                    chartConfig={{
                      backgroundColor: "#005EB8",
                      backgroundGradientFrom: "#005EB8",
                      backgroundGradientTo: "#005EB8",
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      }
                    }}
                  />
                  <Text>
                    R1: {Response1} = {R1VoteCount}
                  </Text>
                  <Text>
                    R2: {Response2} = {R2VoteCount}
                  </Text>
                  {Response3 ? (
                    <Text>
                      R3: {Response3} = {R3VoteCount}
                    </Text>
                  ) : null}
                  {Response4 ? (
                    <Text>
                      R4: {Response4} = {R4VoteCount}
                    </Text>
                  ) : null}
                </>
              )}
            </Card>
          )}
        </Container>
      </ScrollView>
    );
  }
}

export default PollScreen;
