import React from 'react'
import Card from '../../components/Card/card'
import { BiSearchAlt2 } from "react-icons/bi";
import './home.css'
import {useState ,useEffect} from "react"
import axios from 'axios';
import Swal from "sweetalert2";
import {TempConverter ,uniqueForecasteData} from "../../utilities/allFunc"

const Home = () => {

const [formVal , setFormVal] = useState({searchVal:''})

const [currentData, setCurrentData] = useState([]);
const [listData ,setListData] = useState('')

  
   const handleSubmit= async (e)=>{
    e.preventDefault()
   // console.log("test : " ,formVal.searchVal)

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${formVal.searchVal},IN&appid=886705b4c1182eb1c69f28eb8c520e20`;
    await axios
        .get(url)
        .then((res) => {

          setCurrentData( [ res.data]);

         setListData(uniqueForecasteData(res.data.list))

        })
        .catch((e) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sorry Unable to fetch data ',
            footer: '<a href="">Forgot Password ?</a>'
          })
        });
  }


  const handleChange=(e)=>{

    setFormVal({...formVal,[e.target.name]:e.target.value})
  }


  // const [data, setData] = useState([]);
  // const [listData ,setListData] = useState('')

  // useEffect(async()=>{
  //   const url =
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${valueData},IN&appid=886705b4c1182eb1c69f28eb8c520e20`;

  //   await axios
  //     .get(url)
  //     .then((res) => {

  //       setData( [ res.data]);
  //       setListData([...listData ,res.data.list])
  //     })
  //     .catch((e) => {
  //       console.log("data not able to fetch");
  //     });
  // },[] );

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const [valueData,setValueData]=useState({name:''})

  // const handleChange=(e)=>{
 

  //   setValueData({...valueData,[e.target.name]:e.target.value})
  // }


  
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   localStorage.setItem("valueInfo",JSON.stringify(valueData))
    
  // }
  // let valueInfo = JSON.parse(localStorage.getItem('valueInfo'))

//console.log(valueData);



 

  return (
    <>
      {/* <div className="d-flex justify-content-center mt-5" >
    <form  onSubmit={handleSubmit} className='position-relative' >
      <input type="text" placeholder='Place Name' name="name" value={valueData.name}  onChange={handleChange} className='form1' ></input>
      <span> <button type="submit"  > <BiSearchAlt2 size={21}   className='mx-1'/></button></span> 
    </form>
   

    </div> */}

      {/* <div className='d-flex justify-content-center mt-5'>
      <div className='border border-info rounded'>
       
        <input type="text"  onChange={(event)=>{ }}/>
        
      </div>
      <span> <BiSearchAlt2 size={22}   className='mx-1'/></span> 

    </div> */}
    
    <div className='landingPage overflow-hidden'>      
      <form class="myForm my-5 " onSubmit={handleSubmit} >
          <div className="row">
            
            <div className=" col-8 col-md-6  form1 p-0">
              <input
                type="text"
                class="form-control inputForm"
                name="searchVal" 
                value={formVal.searchVal} 
                onChange={handleChange}
                placeholder="Enter Pincode / city name"
              />
            </div>
            <div className=" col-1 col-md-2 button1">
              <button type="submit" className=" btn btn-info mb-2" >
               <BiSearchAlt2 size={22} />
              </button>
            </div>
          </div>
        </form>

{currentData.length > 0 ?<div className='d-flex justify-content-center'> 




<div className="card text-white bg-dark mb-3 borderRadius" style={{width:"30rem"}}>
  <div className="card-header row " style={{margin:"0rem"}}>
    <div className="col-8">
    <h2>{ currentData[0].city.name }</h2>
    </div>
    <div className="col-4"><img
            src ={`http://openweathermap.org/img/w/${currentData[0].list[0].weather[0].icon}.png`}
            alt="Weather Icon"
            height={'70px'}
            width={'70px'}
          /></div>
    <div ><h1>{TempConverter(currentData[0].list[0].main.temp)}</h1></div>
    </div>
  <div className="card-body">
  <h4 >{currentData[0].list[0].weather[0].description}</h4>
      <h4>Wind: {currentData[0].list[0].wind.speed}  m/s</h4>
      <h4>Humidity:{currentData[0].list[0].main.humidity} %</h4>
  </div>
</div>
    
   
      {/* <h2 class="text-info">{ currentData[0].city.name }</h2>
    <div styel={{backgroundColor:'cyan'}}>
    <img
            src={`http://openweathermap.org/img/wn/${currentData[0].list[0].weather[0].icon}.png`}
            alt="Weather Icon"
            height={'70px'}
            width={'70px'}
          />
    </div>
    <div class="weather-details">
      <h1 class="text-info">{TempConverter(currentData[0].list[0].main.temp)}</h1>
      <h4 class="text-info">{currentData[0].list[0].weather[0].description}</h4>
      <h4 class="text-info">Wind: {currentData[0].list[0].wind.speed}  m/s</h4>
      <h4 class="text-info">Humidity:{currentData[0].list[0].main.humidity} %</h4>
    </div> */}
  </div> : ''}



  { listData.length > 0 ? listData.map((val ,i) => {

   return(
    <div key={i} className='forecastetData' > 
    < Card   date ={val.date} highTemp ={val.highTemp} lowTemp = {val.lowTemp} icon={val.icon} precipitation = {val.precipitation}  weatherConditions = {val.weatherConditions}  />
    
    </div>
   )
   
})  : ""}

      {/* <Card /> */}
</div>

    


    </>
  );
}

export default Home