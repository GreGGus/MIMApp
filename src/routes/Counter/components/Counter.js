/**
 * Created by Gohma on 04/06/2017.
 */
import React from "react";
import {Grid, Col, Nav, Table, NavItem,Pagination, Row} from "react-bootstrap";
import {getNews} from "../../../../services/api";
import moment from "moment";


class NewsList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      count:0,
      activePage:0
    }

  }

  componentWillMount() {
    getNews().then((response) => {
      this.setState({
        dataState: response.data.results,
        count : response.data.count
      })
    })
  }

  render() {

    const {dataState,count} =this.state
    console.log("dataState",dataState)
    return (
      <div>
        <h1> Articles count : {count} </h1>
        <Grid>
          <Row>
            <Col md={12}>
              <Table responsive>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Titre</th>
                  <th>URL</th>
                  <th>ID</th>
                </tr>
                </thead>
                <tbody>
                {dataState.map((item, index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{item.created_at}</td>
                      <td>{item.title}</td>
                      <td><a target="_blank" href={item.description} >{item.description} </a></td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
              <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={20}
                maxButtons={5}
                activePage={this.state.activePage}
                 />
            </Col>
          </Row>
        </Grid>
      </div>


    )
  }
}
export default NewsList
