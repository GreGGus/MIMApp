/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Doughnut} from "react-chartjs-2";
import {ClipLoader} from "halogen";


export default class PieNews extends React.PureComponent {


  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      dataState: [],
      isFetch: false
    }
  }


  componentWillReceiveProps = (props) => {
    const {sagaData} = props
    let obj = sagaData
    if (sagaData) {
      for (let prop in obj) {
        if (obj[prop] < 20)
          delete obj[prop];
      }
      this.setState({
        dataState: Object.values(obj),
        label: Object.keys(obj),
        isFetch: true,
      })
    }
  }


  render() {
    const {dataState, label, isFetch} =this.state

    function getRandomColor() {
      var hex = Math.floor(Math.random() * 0xFFFFFF);
      return "#" + ("000000" + hex.toString(16)).substr(-6);
    }


    const data = {
      labels: label,
      datasets: [
        {
          label: 'Sauces',
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
          ],
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
          <h1> Doughnut news data </h1>
          <Doughnut  data={data}/>
        </div>
      )
    } else {
      return <div ><ClipLoader color="#26A65B"/></div>
    }
  }
}
