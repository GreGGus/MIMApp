/**
 * Created by Gohma on 04/06/2017.
 */
import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {getNewsSource} from "../../../../services/api";
import {ScaleLoader} from "halogen"


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [],
  datasets: []
});

export default class PieNews extends React.PureComponent {


  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      dataState: [],
      isFetch:false
    }
  }

  componentDidMount() {
    getNewsSource().then((response) => {
      this.setState({
        dataState: Object.values(response.data),
        label: Object.keys(response.data),
        isFetch:true,
      })
    })
  }

  // componentWillMount() {
  //   setInterval(() => {
  //     this.setState(getState());
  //   }, 5000);
  // }


  render() {
    const {dataState, isFetch,label} =this.state

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
    if (isFetch){
      return (
        <div>
          <Doughnut data={data}/>
        </div>
      )} else {
      return <div > <ScaleLoader color="#26A65B" /> </div>
    }
  }
}
