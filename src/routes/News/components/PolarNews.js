/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Polar} from "react-chartjs-2";
import {ClipLoader} from "halogen";


class PolarNews extends React.PureComponent {
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
        if (obj[prop] < 35)
          delete obj[prop];
      }
      this.setState({
        dataState: Object.values(obj),
        label: Object.keys(obj),
        isFetch:true
      })
    }


  }

  render() {
    const {dataState, label,isFetch} =this.state



    function getRandomColor() {
      let hex = Math.floor(Math.random() * 0xFFFFFF);
      return "#" + ("000000" + hex.toString(16)).substr(-6);
    }

    const data = {
      datasets: [{
        data: dataState,
        backgroundColor: [
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
        ],
        label: 'My dataset' // for legend
      }],
      labels: label
    };

    if (isFetch) {
      return (
        <div>

          <Polar width={1200}
                 height={550}
                 options={{
                   maintainAspectRatio: false
                 }}
                 data={data}/>
        </div>

      )
    } else {
      return <div ><ClipLoader color="#26A65B"/></div>
    }
  }
}
export default PolarNews
