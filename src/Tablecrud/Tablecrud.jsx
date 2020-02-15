import React  from 'react'
import '../Tablecrud/TableStyle.css'
import icon from '../Gambar/icon plus.png'


const Tablecrud = props => {
    return (
        <div className="container">
            <div className="jumbotron ">
                <h2>Daftar Santri Baru</h2>
                    <p className="mt-3">Tahun Ajaran 2019/2020</p>
                        </div>
            <div className="container bg-light">
                <nav className="navbar navbar-light bg-light">
                <button className="tombolIcon"  data-toggle="modal" data-target="#exampleModalCenter">
                    <img src={icon} alt=""/>
                </button>
                <p className="mt-3 ml-2">Tambah santri baru</p>
                        <form className="form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Cari nama santri" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cari</button>
                    </form>
                    <div className="modal fade" id="exampleModalCenter" tab="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Tambah Santri baru</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nama </label>
                    <input value={props.editDataSantri.name} type="text" name="name" className="form-control" key="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukan nama antum" onChange={props.handleGetValue} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nama santri</label>
                    <input value={props.editDataSantri.username} type="text" name="username" className="form-control" key="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nama Lengkap antum" onChange={props.handleGetValue}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input value={props.editDataSantri.email} type="text" name="email" className="form-control" key="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukan E-mail antum" onChange={props.handleGetValue} />
                </div>
            </form>
        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Batal</button>
                            <button type="button" className="btn btn-primary" onClick={props.SimpanDataSantri} >Save data</button>
                       </div>
                    </div>
                </div>
            </div>
                </nav>
            </div> 
           
            <table className="table ">
            <thead  className="table-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nama</th>
                <th scope="col">Nama Santri</th>
                <th scope="col">Email</th>
                <th scope="col">Option</th>
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

                  {/* modal edit form */}



                        
            {/* <button className="btn btn-warning mr-2 text-white" data-toggle="modal" data-target="#editDataSantri">Edit</button> */}
            <button data-toggle="modal" data-target="#exampleModalCenter" className="btn btn-warning text-light mr-2" onClick={() =>props.updateDataSantri(item)}>Update</button>
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