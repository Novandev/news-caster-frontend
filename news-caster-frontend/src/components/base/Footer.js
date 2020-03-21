import React, { Component} from 'react'
import styled from 'styled-components';
import {colors} from '../../common/styles/colors'


const FooterSection = styled.div`
    display:flex;
    flex-direction:row;
    bottom:0;
    background-color:${colors.newsCasterMainBlack};
    margin-top: auto;
    min-height:10vh;
`

export default class Footer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render(){
        return(

            <FooterSection>
                <br/>
                <br/>
                
            </FooterSection>
        )
    }
}

