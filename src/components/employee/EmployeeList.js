import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {
        return (
            <section className="list employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList