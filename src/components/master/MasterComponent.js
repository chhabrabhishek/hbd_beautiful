import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export default class MasterComponent extends Component{

    render(){
        return(
            <div style={{ width: 500 }}>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab 2</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
								tab 1 content
								</Tab.Pane>
								<Tab.Pane eventKey="second">
								tab 2 content
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</div>
        );
    }
}