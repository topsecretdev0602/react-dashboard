import React from 'react'
import "./home.css"

import { salesData } from "../../dashboardData";

import InfoWidget from '../../components/info-widget/InfoWidget';
import Chart from '../../components/chart/Chart';

export default function Home() {
  return (
    <div className="home">
      <InfoWidget/>
      <Chart data={salesData} title="Sales (US$)" grid dataKey="Sales"/>
    </div>
  )
}
