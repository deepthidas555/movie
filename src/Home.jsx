import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBNavbar,
  MDBInputGroup
} from 'mdb-react-ui-kit';

import './Home.css'
import { Autocomplete } from '@mui/material';
function Home() {

  const [movie, setMovie] = useState('')

const [movieInfo,setMovieInfo] = useState(null)


  function getMovie() {
    
    const url = `https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {


        const cinema = {

          Title:`${data.Title}`,
          Year:`${data.Year}`,
          Genre:`${data.Genre}`,
          Released:`${data.Released}`,
          Director:`${data.Director}`,
          Writer:`${data.Writer}`,
          Actors:`${data.Actors}`,
          Plot:`${data.Plot}`,
          Language:`${data.Language}`,
          Country:`${data.Country}`,
          Poster:`${data.Poster}`,
          imdbRating:`${data.imdbRating}`,


          // location: `Weather in ${data.name}`,
          // temperature: `${MT} °C`,
          // feelsLike: `${FL} °C`,
          // humidity: `${data.main.humidity} %`,
          // wind: `${data.wind.speed} km/h`,
          // condition: `${data.weather[0].description}`,
        };
       
        setMovieInfo(cinema)
      })

      .catch((error) => {
        console.error(error);
      });
  }


    
  return (
    <>
    <MDBNavbar dark bgColor='dark'>
      <MDBContainer fluid>
        <h3>Movie Search</h3>
        <MDBInputGroup className='d-flex w-auto mb-3' >
        <MDBInput label='search' type='text' id='formWhite' contrast className='d-flex text-secondary' style={{ width: 265 }} value={movie} onChange={(e) => setMovie(e.target.value)} />
    <MDBBtn className='sea' style={{ color: 'white', backgroundColor: 'lightblue', outlineColor: 'backgroundColor'}} onClick={getMovie}><MDBIcon fas icon="search" /></MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
   <div className="screen">


      <div className='box'>

      <p style={{padding:'3%',color:'gray'}}>see results</p>
      
        <div className="search">


          <div className="info">
            {movieInfo && (
              <div className="movie-info">

              
                <MDBTable borderless>

                  <MDBTableBody>
                    <tr>
                        <td>
                          
                        <img src= {movieInfo.Poster} alt="" width={Autocomplete} height={290} />
                
                <h1 style={{ textAlign: 'center',color:'grey' }}> <br />{movieInfo.Title}</h1>
                        </td>
                      {/* <td> */}
                        {/* <h1 style={{ fontSize: 45 }}> */}
                          {/* <MDBIcon fas icon="thermometer-quarter" /> {weatherInfo.temperature} */}
                           

                          {/* </h1>

                      </td> */}
                      <td>
                        <p><b>Title : </b>{movieInfo.Title}</p>
                        <p><b>Released : </b>{movieInfo.Released}</p>
                        <p><b>Actors : </b>{movieInfo.Actors}</p>
                        <p><b>Writer : </b>{movieInfo.Writer}</p>
                        <p><b>Director : </b>{movieInfo.Director}</p>
                        <p><b>Genre : </b>{movieInfo.Genre}</p>
                        <p><b>Plot : </b>{movieInfo.Plot}</p>
                        <p><b>imdbRating : </b>{movieInfo.imdbRating}</p>
                        <p><b>Country : </b>{movieInfo.Country}</p>
                        <p><b>Language : </b>{movieInfo.Language}</p>

                        {/* <p>humidity {weatherInfo.humidity}</p>
                        <p>wind {weatherInfo.wind}</p>
                        <p>{weatherInfo.condition}</p> */}

                      </td>

                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home