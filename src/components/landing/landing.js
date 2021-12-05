import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./landing.css";
import { Row, Col } from "antd";
import RadarChart from "../radarChart/radarChart";
import {  getRadarGraphDetailsOffence, getRadarGraphDetailsExamine } from "../../utils/api";
const { Meta } = Card;

const Analytics = (props) => {
  const [radarGraphDataExamine, setRadarGraphDataExamine] = useState([]);
  const [radarGraphDataOffence, setRadarGraphDataOffence] = useState([]);

  const getGraphDetails = async () => {
    let GraphData = ["data1"]
    let headers = ["x"]
    try {
      const response = await getRadarGraphDetailsExamine();
      if (response.status === 200) {
        response.data.forEach((element) => {
          GraphData.push(element.count);
          headers.push(element._id)
      })
      setRadarGraphDataExamine([headers,GraphData]);

    }
    } catch (error) {}
  };

  const getGraphDetailsOffence = async () => {
    let GraphData = ["data2"]
    let headers = ["x"]
    try {
      const response = await getRadarGraphDetailsOffence();
      if (response.status === 200) {
        response.data.forEach((element) => {
          GraphData.push(element.count);
          headers.push(element._id)
      })
      setRadarGraphDataOffence([headers,GraphData]);

    }
    } catch (error) {}
  };

  useEffect(() => {
    getGraphDetails();
    getGraphDetailsOffence()
  }, []);

 
  return (
    <>
      <Row>
        <Col xs={24} xl={12}>
          <Card style={{ margin: 16 }}>
            <Meta title="Examine Clearace" />
            <RadarChart dataSource={radarGraphDataExamine}  />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card style={{ margin: 16 }}>
            <Meta title="Offense categories" />
            <RadarChart dataSource={radarGraphDataOffence} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
