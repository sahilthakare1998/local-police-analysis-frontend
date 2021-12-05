import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import LineChart from "../linechart/linechart";
import { Table } from "antd";
import {  getGraphDetail, getTableData } from "../../utils/api";
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Meta } = Card;

const dateFormat = 'YYYY-MM-DD'

// function onChange(pagination, filters, sorter, extra) {
//   console.log("params", pagination, filters, sorter, extra);
// }

const CrimeRate = () => {
  const [lineGraphData, setLineGraphData] = useState([]);
  const [dateFilter, setDateFilter] = useState(['2010-01-01','2021-01-01']);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getTableDetails();
  }, []);



  useEffect(() => {
    getGraphDetails();
  });

  const getGraphDetails = async () => {
    let dateGraphData = ["x"];
    let lineGraphDataMock = ["crime"];
    try {
      const response = await getGraphDetail(dateFilter);
      if (response.status === 200) {
        response.data.forEach((element) => {
          lineGraphDataMock.push(element.count);
          dateGraphData.push(element._id);
        });
      }
      let dataSource = [dateGraphData, lineGraphDataMock];
      setLineGraphData(dataSource);
    } catch (error) {}
  };


  const columns = [
    {
      title: "Agency Name",
      dataIndex: "AgencyName",
    },
    {
      title: "Occurred Date",
      dataIndex: "OccurredDate"
    },
    {
      title: "Offense Category",
      dataIndex: "OffenseCategory"
    },
    {
      title: "Case Status",
      dataIndex: "CaseStatus"
    },
  ];

  function onChange(date, dateString) {
    setDateFilter(dateString)
  }
  
  const getTableDetails = async () => {
    let data = []
    try {
      const response = await getTableData();
      if (response.status === 200) {
        response.data.forEach((element) => {
          data.push({
            key: element.id,
            AgencyName: element.agency_name,
            OccurredDate: element.occurred_date,
            OffenseCategory: element.offense_category,
            CaseStatus: element.case_status,
          });
      })
      setTableData(data);
  
    }
    } catch (error) {}
  };

  return (
    <>
    <Row justify="end">
    <RangePicker
      defaultValue={[moment('2010-01-01', dateFormat), moment('2010/07/01', dateFormat)]}
      format={dateFormat}
      onChange={onChange}
    />
    </Row>
      <Row>
        <Col xs={24} xl={24}>
          <Card style={{ margin: 16 }}>
            <Meta title="Crime Rates" />
            <LineChart dataSource={lineGraphData} />
          </Card>
        </Col>
        <Col xs={24} xl={24}>
          <Card style={{ margin: 16 }}>
            <Table columns={columns} dataSource={tableData}  />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CrimeRate;
