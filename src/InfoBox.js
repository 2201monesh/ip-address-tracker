
function InfoBox({data}) {
  return (
    <div className="info-box">
      <div className="ip-address-box">
        <h6>IP ADDRESS</h6>
        {data.query ? <h3>{data.query}</h3> : <h3>Add IP address</h3>}
      </div>
      <div className="location-box">
        <h6>LOCATION</h6>
        {data.city && data.country ? <h3>{data.city}, {data.country}</h3> : <h3>city, country</h3>}
      </div>
      <div className="timezone">
        <h6>TIMEZONE</h6>
        {data.timezone ? <h3>{data.timezone}</h3> : <h3>timezone</h3>}
      </div>
      <div className="fourth-box">
        <h6>ISP</h6>
        {data.isp ? <h3>{data.isp}</h3> : <h3>isp</h3>}
      </div>
    </div>
  )
}

export default InfoBox
