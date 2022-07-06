const DummyDataList = ({dataList}) => {
    return (
        <div className="m-5 col-6">
                {dataList.length === 0 && <p>No dummy data found! 🥲</p>}
                {
                    dataList.map(data => (
                        <div key={data.id} className="card mb-3">
                            <div className="card-header bg-info ">{data.title}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{data.body}</li>
                            </ul>
                        </div>
                    ))
                }
        </div>
    )
}

export default DummyDataList;