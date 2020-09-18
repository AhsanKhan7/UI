import React from 'react'
import logo from '../../public/images/logo.png'
import avatar from '../../public/images/avatar.png'
import { Card } from './card'

const Page9 = () => {
    return (
        <div className='page9'>
            <div className='side-panel'>
                <img src={logo} />
                <i className="fas fa-bars fa-3x"></i>
                <i className="fas fa-globe-europe fa-3x"></i>
                <i className="fas fa-search fa-3x"></i>
                <i className="fas fa-envelope fa-3x"></i>
                <i className="fas fa-user fa-3x"></i>
                <i className="far fa-compass fa-3x"></i>
            </div>
            <div className='page9-page'>

                <div className='page9-header'>
                    <p className='page9-headerArrow'><i className="fas fa-long-arrow-alt-left fa-3x"></i></p>

                        <form className='page9-search'>
                            <p className='page9-searchIcon'><i  className="fas fa-search fa-1g"></i></p>
                            <input className='page9-searchBar' type="text" placeholder="Search"/> 
                         </form>

                    <img src={avatar} />
                </div>

                <div  className='page9-buttonPoverty'>
                    <button>Poverty</button>
                </div>

                <div className='page9-text'>
                    <h1>Suggestions for you</h1>
                </div>

                <div className='page9-card'>
                    <Card
                        name='WesleyStephens123'
                        descrip='Wesley C. Stephens'
                        company='Edmond' 
                    />
                    <Card
                        name='PhilipLeighton01'
                        descrip='Philip C. Leighton'
                        company='Albany' 
                    />
                    <Card
                        name='CharlesNystrom'
                        descrip='Charles A. Nystrom'
                        company='West Palm Beach' 
                    />
                </div>

                    <div className='page9-card'>
                        <Card
                            name='BrandonHargove'
                            descrip='Brandon L. Hargove'
                            company='Boston' 
                        />
                        <Card
                            name='HaroldLoyd'
                            descrip='Harold M. Loyd'
                            company='Myrtle Beach' 
                        />
                        <Card
                            name='EdwardDevito'
                            descrip='Edward C. Devito'
                            company='Atlanta' 
                        />
                    </div>

            </div>
            
        </div>
    )
}

export default Page9