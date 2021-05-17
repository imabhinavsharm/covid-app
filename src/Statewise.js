import React ,{useEffect,useState}from 'react'
const Statewise = () => {
    const [state, setstate] = useState([])
    const getCovidData= async()=>{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setstate(actualData.statewise);
        console.log(actualData.statewise);
    }
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <>
      <div className="container-fluid mt-5">
          <div className="main-heading">
              <h1 className="mb-5 text-center"> India covid Dashboard</h1>
          </div>
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-dark">
                   <tr style={{backgroundColor:"black" ,color:"#fff"}}>
                       <td>state</td>
                       <td>Confirmed</td>
                       <td>Recoverd</td>
                       <td>Deaths</td>
                       <td>Active</td>
                       <td>update</td>
                   </tr>
                   {
                       state.map((cur,index)=>{

                          return  <tr key = {index}>
                            <th style={{backgroundColor:"#afbaaf"}}>{cur.state}</th>
                            <th style={{backgroundColor:"#2f4cf5", color:"#fff"}}>{cur.confirmed}</th>
                            <th style={{backgroundColor:"#48f542", color:"#fff"}}>{cur.recovered}</th>
                            <th style={{backgroundColor:"red", color:"#fff"}}>{cur.deaths}</th>
                            <th style={{backgroundColor:"#ed8b2f", color:"#fff"}}>{cur.active}</th>
                            <th style={{backgroundColor:"#afbaaf"}}>{cur.lastupdatedtime}</th>
                            
                        </tr>
                        })
                    }
                </thead>
            </table>
        </div>

      </div>

        </>
    )
}

export default Statewise
