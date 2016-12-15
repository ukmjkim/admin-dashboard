

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';


const data = [
      { name: 'Netflix', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Distilled', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Cheapflights', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Allison', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Cruise', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Terakeet', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'iProspect', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Dashboard</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-comments fa-5x"
            count="26"
            headerText="HQ Status Msgs"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tasks fa-5x"
            count="12"
            headerText="New Requests!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-shopping-cart fa-5x"
            count="124"
            headerText="Warning Msgs"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-support fa-5x"
            count="13"
            headerText="Support Tickets!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Client Activities Trends
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Tracked Keywords</MenuItem>
                  <MenuItem eventKey="2">Optional Services</MenuItem>
                  <MenuItem eventKey="3">New Dynamic Tags Creation</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Top 10 Clients Billing Comparision
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
                  <MenuItem eventKey="1">MOM</MenuItem>
                  <MenuItem eventKey="2">QOQ</MenuItem>
                  <MenuItem eventKey="3">YOY</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="1" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="amt" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-clock-o fa-fw" /> STAT-HQ Process Status
            </span>}
          >
            <div>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Keyword Integrity Check</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 23:00PM ~ 23:20PM (UTC), 3:00PM ~ 3:20PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>25M keywords were cralwed successfully. The error rate is below the threshold.
                      Keyword Integrity check is a green light.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning"><i className="fa fa-credit-card" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">After Crawl</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 22:00PM ~ 23:20PM (UTC), 2:00PM ~ 3:20PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>After crawl processes are done successfully without no error.
                      5K Sites / 10K Tags / 6K Dynamic Tags / 500 Data View have new stats records.
                      </p>
                      <p>Client Billing Data are refreshed successfully.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Keyword Crawl Retry</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 21:00PM ~ 21:30PM (UTC), 1:00PM ~ 1:30PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>25M keywords were cralwed successfully. The error rate is below the threshold.
                      Keyword Integrity check is a green light.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger"><i className="fa fa-bomb" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Client Usage Report</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 4:00AM ~ 4:05AM (UTC), 8:00PM ~ 8:05PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Client Usage Report has been created for this month.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Top Competitor Analyzer</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 1:00AM ~ 1:30AM (UTC), 5:00PM ~ 5:30PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Top Competitor Analyzer is done with no issue
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Daily Account</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 1:20AM ~ 1:30AM (UTC), 5:20PM ~ 5:30PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Daily Account is done with no issue
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Keyword Crawl</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 0:20AM ~ 3:30AM (UTC), 4:20PM ~ 7:30PM (PDT)
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Keyword Crawl is done with no issue. 99% of Keywords has new ranking data.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Panel>

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Notifications Panel
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> Crawling done successfully
                <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-warning fa-fw" /> 10% Crawl Failures for Bing
                <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-envelope fa-fw" /> New Bugs Came
                <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-tasks fa-fw" /> New Reqests
                <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-upload fa-fw" /> Server Rebooted
                <span className="pull-right text-muted small"><em>11:32 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-bolt fa-fw" /> Server Crashed!
                <span className="pull-right text-muted small"><em>11:13 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-warning fa-fw" /> Server Not Responding
                <span className="pull-right text-muted small"><em>10:57 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-shopping-cart fa-fw" /> 34 Sites have issues, Please check the details
                <span className="pull-right text-muted small"><em>9:49 AM</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-money fa-fw" /> Payment Received
                <span className="pull-right text-muted small"><em>Yesterday</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View All Alerts</Button>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Crawl Success Rate
            </span>}
          >
            <div>
              <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
