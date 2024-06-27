import React from 'react'

export default function nvqListUser({ rendernvqListUser }) {
    console.log("nvqListUser", rendernvqListUser);
    let nvqElementUser = rendernvqListUser.map((nvqUsers, index) => {
        return (
            <>
            <tr>
                <td>{nvqUsers.id}</td>
                <td>{nvqUsers.UserName}</td>
                <td>{nvqUsers.Password}</td>
                <td>{nvqUsers.email}</td>
                <td>{nvqUsers.phone}</td>
                <td>...</td>
                </tr>
            </>
        )
    })
    return (
        <div className='row'>
           <div className='col-md-12'>
           <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvqElementUser}
                </tbody>
            </table>
           </div>
        </div>
    )
}
