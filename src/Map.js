import React from 'react'
import MapSection from './MapSection'

function Map({data}) {
  return (
    <div>
      {data.lat && data.lon ? <MapSection lat={data.lat} lon={data.lon} /> : <h3 className='map-section'>Map section</h3>}
    </div>
  )
}

export default Map
