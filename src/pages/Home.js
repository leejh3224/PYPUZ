import React, { Component } from 'react'

import { 
    Header,
    HomeBody,
    AuthRegister
} from '../components/organism'

class Home extends Component {
    render () {
        return (
            <div>
                <Header />
                <AuthRegister /> 
                {/* <HomeBody />  */}
            </div>
        )
    }
}

export default Home