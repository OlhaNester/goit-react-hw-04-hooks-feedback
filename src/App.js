import { useState } from "react";
import Statistics from "./component/Statistics";
import FeedbackOptions from "./component/FeedbackOptions";
import Section from "./component/Section";
import Notification from "./component/Notification";
import { AppContainer, Doyoulike } from "./App.styled";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const handleChange = (event) => {
    switch (event.target.name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };
  return (
    <AppContainer>
      <Doyoulike> Do you like our coffee?</Doyoulike>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </AppContainer>
  );
}

// export class AppOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleChange = event => {
//     this.setState(prevState => ({
//       [event.target.name]: prevState[event.target.name] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//      return good + neutral + bad;
//     // return Object.values(this.state).reduce(function (a, b) {
//     //   return a + b;
//     // });
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <AppContainer>
//         <Doyoulike> Do you like our coffee?</Doyoulike>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleChange}
//           />
//         </Section>
//         <Section title="Statistic">
//           {total === 0 ? (
//             <Notification message="There is no feedback"></Notification>
//           ) : (
//             <Statistics
//               options={this.state}
//               total={total}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </AppContainer>
//     );
//   }
// };

// export default AppOld;
