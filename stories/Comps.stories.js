import React from 'react';
import Card from '../comps/Card'
import Header from '../comps/Header'
import HamburgerMenu from '../comps/HamburgerMenu'
import Button from '../comps/CustomButton'
import Text from '../comps/CustomText'
import Survey1 from '../pages/Survey1'

export default {
    title:"My comps"
}

export const MyCard = () => <Card />

export const MyHeader = () => <Header />

export const MyHamburMenu = () => <HamburgerMenu />

export const CustomText = () => <Text />

export const CustomButton = () => <Button />

export const MySurvey1 = () => <Survey1 />