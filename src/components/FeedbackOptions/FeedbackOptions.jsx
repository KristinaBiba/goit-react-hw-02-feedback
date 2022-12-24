import {Button} from './FeedbackOptions_css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
          Object.keys(options).map(item => (<Button type="button" key={item} id={item} onClick={onLeaveFeedback}>{item}</Button>)) )
    };