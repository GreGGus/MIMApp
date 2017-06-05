/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Grid, Col, Nav, Table, NavItem, Row} from "react-bootstrap";
import PolarNews from './PolarNews'
import BarNews from './BarNews'
import PieNews from './PieNews'
import TimeLineNews from './TimeLineNews'

class News extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount=() => {
    this.props.fetchNews()
    this.props.fetchNewsAgregat()

  }

  render() {

    const {agregat,newsData} = this.props
    console.log("agregatNEWS",agregat)
    return (
      <div>
        <Grid >
          <Row>
            <Col mdOffset={3} md={6}>
              <BarNews sagaData={agregat} />
            </Col>
            <Col mdOffset={3} md={6}>
              <PolarNews sagaData={agregat} />
            </Col>
          </Row>
          <Row>
            <Col mdOffset={3} md={6}>
              <PieNews sagaData={agregat} />
            </Col>
            <Col mdOffset={3} md={6}>
              <TimeLineNews sagaData={newsData} />
            </Col>
          </Row>
        </Grid>
        {/*<iframe src="http://94.23.63.76:9090/app/kibana#/dashboard/Sources-slash-Articles-over-time?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:'2016-06-29T14:15:41.716Z',mode:absolute,to:'2016-07-26T22:45:54.938Z'))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:Articles-by-source,panelIndex:1,row:1,size_x:12,size_y:5,type:visualization),(col:1,id:Articles-over-time,panelIndex:2,row:6,size_x:12,size_y:5,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'*')),title:'Sources%20%2F%20Articles%20over%20time',uiState:(P-1:(vis:(legendOpen:!f)),P-2:(vis:(legendOpen:!f))))" height="600" width="800"></iframe>*/}
      </div>


    )
  }
}
export default News
