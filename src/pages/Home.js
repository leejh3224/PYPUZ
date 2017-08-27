import React, { Component } from 'react'

import { 
    Header,
    HomeMain
} from '../components/organism'

class Home extends Component {
    render () {
        return (
            <div>
                <Header />
                <HomeMain />
            </div>
        )
    }
}

export default Home