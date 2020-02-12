import React  from 'react'

const Tablecrud = props => {
    // console.log(props.dataTable)
    return (
        <div className="container">
            <div className="jumbotron ">
                <h2>Daftar peserta</h2>
                <h5>Tahun Ajaran 2019/2020</h5>
            </div>
            <table className="table ">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.dataTable.map((item) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                            <button className="btn btn-warning" onClick={() =>props.edit(item.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() =>props.remove(item.id)}>Remove</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>    
    </div>
    )
}
export default Tablecrud