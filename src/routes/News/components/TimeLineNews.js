/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import moment from "moment";
import {Line} from "react-chartjs-2";
import {ClipLoader} from "halogen"


class TimeLineNews extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      isFetch:false,
    }
    this.getData = this.getData.bind()

  }

  componentWillReceiveProps(props) {
    const {sagaData} = props
    if (sagaData)
      this.setState({
        dataState: this.getData(sagaData.results),
        isFetch:true
      })
  }

  getData = (data) => {
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    let g = 0
    let h = 0
    let i = 0
    let j = 0
    let k = 0
    let l = 0
    let m = 0

    data.map((data) => {
      switch (moment(data.created_at).month()) {
        case 0 :
          a++
          break;
        case 1 :
          b++;
          break;
        case 2 :
          c++;
          break;
        case 3 :
          d++;
          break;
        case 4 :
          e++;
          break;
        case 5 :
          f++;
          break;
        case 6 :
          g++;
          break;
        case 7 :
          h++;
          break;
        case 8 :
          i++;
          break;
        case 9 :
          j++;
          break;
        case 10 :
          k++;
          break;
        case 11 :
          l++;
          break;
      }
    })
    return [a, b, c, e, d, f, g, h, i, j, k, l]
  }

  render() {

    const {dataState,isFetch} =this.state
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'July', 'July', 'July', 'July', 'July', 'July'],
      datasets: [
        {
          label: 'Date',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataState
        }
      ]
    };
    if (isFetch) {
      return (
        <div >
          <h1> Timeline </h1>
          <Line data={data}/>
        </div>
      )
    } else return <div ><ClipLoader color="#26A65B"/></div>
  }
}
export default TimeLineNews
