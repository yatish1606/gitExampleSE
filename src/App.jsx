import React from 'react'
import './app.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Line, defaults} from 'react-chartjs-2'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

import { Settings, HelpCircle} from 'react-feather'

const dayOptions = [
    'one', 'two', 'three'
];

const companyOptions = [
    {label:'Tesla', value:'TCS'}
]

const sampleData =  [
    {day:'Wednesday', date:'23/9/20', open: 136.7, close: 134.5},
    {day:'Thursday', date:'24/9/20', open: 132.8, close: 133.0},
    {day:'Friday', date:'25/9/20', open: 138.9, close: 144.5},
    {day:'Saturday', date:'26/9/20', open: 136.2, close: 139.1},
]

defaults.global.defaultFontFamily = 'Nunito Sans'
defaults.global.defaultFontSize = 15
defaults.global.defaultFontColor = '#ababab'
defaults.global.defaultFontWeight = 500
defaults.global.tooltips.backgroundColor = 'red'


class App extends React.Component {

    state = {
        selectedDay: {label:'One', value:'One'},
        selectedCompany: {label:'Tesla', value:'Tesla'}
    }

    componentDidMount() {
        window.scroll({top:0, left:0, behavior:'smooth'})
    }

    _onSelectDays = selected => {
        this.setState({selectedDay: selected})
    }

    _onSelectCompany = selected => {
        this.setState({selectedCompany: selected})
    }


    render() {

        console.log(this.state.selectedCompany)
        console.log(this.state.selectedDay)
        return(
            <div className="container">
                <div className="header">
                    logo
                    <ul>
                        <li><Settings size={22} color='#434343'/></li>
                        <li><HelpCircle size={24} color="#434343"/></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="left-chart">
                            <h3>Stock Prices Prediction</h3>
                            <div className="chart-header">
                                <div className="select">
                                    <h2>Select date</h2>
                                    <Dropdown className="day-dropdown" controlClassName="day-dropdown-control" options={dayOptions} onChange={this._onSelectDays} value={dayOptions[0]} placeholder="Select an date" />
                                </div>
                                <div className="select">
                                    <h2>Company</h2>
                                    <Dropdown className="day-dropdown" controlClassName="day-dropdown-control" options={companyOptions} onChange={this._onSelectCompany} value={companyOptions[0]} placeholder="Select an date" />
                                </div>
                            </div>
                            <div className="chart" style={{ overflow:'hidden', padding:0}}>
                                <Line
                                    data={{
                                        labels:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                                        datasets: [{
                                            label:'Stock Price',
                                            backgroundColor: ['#0AA0131a'],
                                            data:[123.4,134.5, 125.9, 124.7, 134.7, 145.5, 140.3, 138.9, 134.9, 137.1],
                                            borderColor: '#0AA013',
                                            borderWidth: 3,
                                            hoverBorderWidth: 5,
                                            hoverRadius: 5,
                                            hoverBackgroundColor:'#0AA013',
                                            showLine: true,
                                            hitRadius:40
                                        }]
                                    }}
                                    options={{
                                        showLines: true,
                                        legend: {
                                            display:false,
                                        },
                                        title : {display : true, text: `Predicted stock of ${this.state.selectedCompany.label}`, fontFamily:'Raleway', fontSize:14, fontColor:'#878787', fontWeight: 400},
                                        scales: {
                                            xAxes: [{
                                                gridLines: {
                                                    display:false
                                                }
                                            }],
                                            yAxes: [{
                                                gridLines: {
                                                    display:true,
                                                    color:'#eeeeee',
                                                    lineWidth: 1
                                                } ,
                                                ticks: {
                                                    stepSize: 10,
                                                    beginAtZero: false
                                                  },  
                                            }]
                                        },
                                        tooltips: {
                                            mode: 'point',
                                            backgroundColor: 'white',
                                            borderWidth: 0.5,
                                            borderColor:'#d3d3d3',
                                            cornerRadius: 8,
                                            caretSize: 10,
                                            xPadding: 10,
                                            yPadding: 10,
                                            titleFontColor: '#434343',
                                            titleFontSize: 12,
                                            titleFontFamily: 'Raleway',
                                            bodyFontFamily: 'Raleway',
                                            caretPadding: 20,
                                        },
                                    }}
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h3>Prices over 10 days</h3>
                        <div className="table">
                            {/* <BootstrapTable data={sampleData}>
                                <TableHeaderColumn dataField='day'>
                                    Day
                                </TableHeaderColumn>
                                <TableHeaderColumn isKey dataField='date'>
                                    Date
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='open'>
                                    Open
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='close'>
                                    Close
                                </TableHeaderColumn>
                            </BootstrapTable> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App