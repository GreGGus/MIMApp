/**
 * Created by Gohma on 04/06/2017.
 */
/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Grid, Col, Nav, Table, NavItem, Row} from "react-bootstrap";
import {getNews} from "../../../../services/api";
import moment from "moment";
import {Line} from "react-chartjs-2"
class TimeLineNews extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: []
    }

    this.getData = this.getData.bind()

  }

  componentWillMount() {
    getNews().then((response) => {
      console.log("response", response)


      console.log("dataresponse", response)
      const test = moment(response.data.results.created_at).month()
      const da = this.getData(response.data.results)
      console.log("eestData", test)

      this.setState({
        dataState: da
      })
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
    console.log("data", data)

    data.map((data) => {
      switch (moment(data.created_at).month()) {
        case 1 :
          a++
          break;
        case 2 :
          b++;
          break;
        case 3 :
          c++;
          break;
        case 4 :
          d++;
          break;
        case 5 :
          e++;
          break;
        case 6 :
          f++;
          break;
        case 7 :
          g++;
          break;
        case 8 :
          h++;
          break;
        case 9 :
          i++;
          break;
        case 10 :
          j++;
          break;
        case 11 :
          k++;
          break;
        case 12 :
          l++;
          break;
      }
    })
    return [a, b, c, e, d, f, g, h, i, j, k, l]
  }


  render() {

    const {dataState} =this.state
    console.log("dataState", dataState)

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

    console.log("data", data)

    return (
      <div>
        <Line data={data}/>


      </div>


    )
  }
}
export default TimeLineNews
