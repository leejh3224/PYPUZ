import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { Header } from '../components/organism'
import * as userActions from '../store/modules/user'

class HeaderContainer extends Component {

    render () {
        const user = localStorage.getItem('__PYPUZ_USER__')
        return (
            <Header 
                isLoggedIn={!!user}
            />
        )
    }
}

export default connect(null, null)(withRouter(HeaderContainer))
