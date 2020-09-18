import React from 'react'
import { SmallCard, ColoredSmallCard } from './card'
import logo from '../../public/images/logo.png'
import avatar from '../../public/images/avatar.png'
const Page15 = () => {
    return (
        // <div>
        <div className='page15'>

            <div className='page15-side-panel'>
                <img src={logo} />
                <i className="fas fa-bars fa-3x"></i>
                <i className="fas fa-globe-europe fa-3x"></i>
                <i className="fas fa-search fa-3x"></i>
                <i className="fas fa-envelope fa-3x"></i>
                <i className="fas fa-user fa-3x"></i>
                <i className="far fa-compass fa-3x"></i>
            </div>

            
            <div className='page15-page'> 
            <div className='page15-header'>
                <p className='page15-headerArrow'><i className="fas fa-long-arrow-alt-left fa-3x"></i></p>

                    <form className='page15-search'>
                        <input className='page15-searchBar' type="text" placeholder="Search by Issues"/> 
                    </form>

                <p className='page15-header-bell'><i class="fas fa-bell fa-3x"></i></p>
                    <img src={avatar} />
            </div>


            <div className='page15-card'>
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
                 <ColoredSmallCard />
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
            </div>
            
            <div className='page15-card'>
                 <SmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
                 <ColoredSmallCard />
            </div>

            <div className='page15-card'>
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
                 <ColoredSmallCard />
                 <SmallCard />
                 <SmallCard />
                 <SmallCard />
            </div>
            
             </div>
        </div>

    )
}

export default Page15