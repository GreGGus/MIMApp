/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Bar} from "react-chartjs-2";
import * as Utils from "../../../utils";
import {ClipLoader} from "halogen";


class BarNews extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      label: [],
      isFetch:false
    }
  }


  componentWillReceiveProps = (props) => {
    const {sagaData} = props
    let obj = sagaData
    if (sagaData) {
      for (let prop in obj) {
        if (obj[prop] < 6)
          delete obj[prop];
      }

      this.setState({
        dataState: Object.values(obj),
        label: Object.keys(obj),
        isFetch:true,
      })
    }
  }

  render() {
    const {dataState, label,isFetch} =this.state


    const data = {
      labels: label,
      datasets: [
        {
          label: 'Sauces',
          backgroundColor: [Utils.getRandomColor(),
            Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor(), Utils.getRandomColor()],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataState
        }
      ]
    }

    if (isFetch) {
      return (
        <div>
          <Bar width={1200}
               height={550}
               options={{
                 maintainAspectRatio: false
               }}
               data={data}/>
        </div>)
    } else return <div ><ClipLoader color="#26A65B"/></div>


  }
}
export default BarNews
