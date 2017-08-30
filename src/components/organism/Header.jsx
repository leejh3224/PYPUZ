import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import { 
    Title
} from '../atom'
import { 
    HeaderRight,
    HeaderSearchBar
} from '../molecule'

const lightGrey = '#D3D3D3'

const Background = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid ${lightGrey};
`

const RightItems = styled.div`
    display: flex;
    justify-content: flex-end;
`

const PlainLink = styled(Link)`
    text-decoration: none;
`

export const Header = ({
    isLoggedIn
}) => {
    return (
        <Background className="row">
            <div className="col col-3">
                <PlainLink to="/">
                    <Title 
                        text={'PYPUZ'}
                    />
                </PlainLink>
            </div>
            <RightItems className="col col-9">
                <HeaderSearchBar />
                <HeaderRight isLoggedIn={isLoggedIn} />
            </RightItems>
        </Background>
    )
}