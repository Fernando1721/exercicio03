import React from 'react';
import ReactDOM from 'react-dom';
import doctor1 from './images/doctor1.jpg';
import doctor2 from'./images/doctor2.jpg';
import doctor3 from'./images/doctor3.jpg';
import './style.css';

const App = () => {

    const div1 = {
        width: 768, margin: 'auto', backgroundColor: '#EEE', borderRadius: 8, padding: 5, textAlign: 'center', border: '1px solid black'
    }
    const doctorsName = {doc1: 'José da Silva', doc2: 'Maria da Silva', doc3: 'Jaqueline Mendes'}

    return(
        <div style={div1}>
           <p>Profissionais da Saúde</p>
            <div style={{margin: 8, backgroundColor: '#ddd', height: 170, borderRadius: 8, border: '1px solid black', display: 'flex', flexDirection: 'row', padding: 12}}>
               <div className='doctors'>
                  <img src={doctor1}/>
                  <p>{doctorsName.doc1}</p>
               </div>

               <div className='doctors'>
                  <img src={doctor2}/>
                  <p>{doctorsName.doc2}</p>
               </div>

               <div className='doctors'>
                  <img src={doctor3}/>
                  <p>{doctorsName.doc3}</p>
               </div>
               
            </div>
        </div>

    )
}

ReactDOM.render (
    <App/>,
    document.querySelector('#root')
)