/**
 * Created by Gohma on 04/06/2017.
 */
import React from 'react'
import {Grid, Col, Nav, Table, NavItem, Row} from "react-bootstrap"
import {Bar, HorizontalBar} from 'react-chartjs-2';

import {getNewsSource} from "../../../../services/api"


class BarNews extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      label: []
    }
  }


  componentWillMount() {
    getNewsSource().then((response) => {
      this.setState({
        dataState: Object.values(response.data),
        label: Object.keys(response.data)
      })
    })
  }

  render() {
    const {dataState, label} =this.state

    function getRandomColor() {
      var hex = Math.floor(Math.random() * 0xFFFFFF);
      return "#" + ("000000" + hex.toString(16)).substr(-6);
    }

    const data = {
      labels: label,
      datasets: [
        {
          label: 'Sauces',
          backgroundColor: [getRandomColor(),
            getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataState
        }
      ]
    }

    return (
      <div>
        <Bar width={1200}
             height={550}
             options={{
               maintainAspectRatio: false
             }}
             data={data}/>
      </div>

    )
  }
}
export default BarNews
