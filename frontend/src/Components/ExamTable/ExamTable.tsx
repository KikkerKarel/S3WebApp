import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExamTable.css';
import Cookies from "js-cookie";

interface props{
    data?: any;
}

const columns = [{
    dataField: 'id',
    text: 'Examen ID',
}, {
    dataField: 'exam_title',
    text: 'Exam Title'
}, {
    dataField: 'status',
    text: 'Examen Status',
    sort: true
}

];

class ExamTable extends Component<props> {
    state = {
        Exams: this.props.data
    };
    private examstatus: any;

    async componentDidMount() {
    }

    render() {
        const {Exams} = this.state;
        const tableRowEvents = {
            onClick: (e: any, row: any, rowIndex: any) => {
                Cookies.set('examId', row.id);
                window.location.replace('/vraag/beoordeel');
                console.log(`clicked on row with index: ${rowIndex}`);
            },
            onMouseEnter: (e: any, row: any, rowIndex: any) => {
                console.log(`enter on row with index: ${row.id}`);
                console.log(row.status)
            }
        }
        const rowStyle = (row: any, rowIndex: any) => {
            if (row.status === "GRADING_IN_PROGRESS")
            {
                return { backgroundColor: 'rgb(233,148,44)' }
            }
            else if (row.status === "NOT_GRADED")
            {
                return { backgroundColor: 'rgb(177,82,82)' }
            }
            else if (row.status === "GRADED")
            {
                return { backgroundColor: 'rgba(0,98,0,0.5)' }
            }
            else {
                return { backgroundColor: 'rgba(0,98,0,0.5)' }
            }
        };

        return (
            <div className="exam-table">
                <BootstrapTable keyField='id'
                                data={ Exams }
                                columns={ columns }
                                striped={false}
                                bordered={false}
                                hover
                                rowEvents={ tableRowEvents }
                                rowStyle={ rowStyle }
                />
            </div>
        );
    }
}

export default ExamTable
