import {P} from './Statistics_css'

export const Statistics = ({...arr}) => {
      return (
           (Object.entries(arr)).map((item) => (<P key={item[0]}>{item[0]}: <b>{item[1]} {item[0] === 'positivePercentage' && '%'}</b></P>))
      )
    };