import React, { Component } from 'react'

import { 
    Header,
    HomeBody,
    Auth
} from '../components/organism'

class Home extends Component {
    render () {
        return (
            <div>
                <Header />
                <Auth />
                {/* <HomeBody /> */}
            </div>
        )
    }
}

export default Home