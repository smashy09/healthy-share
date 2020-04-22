import React from 'react';
import Card from '../comps/Card';
import Header from '../comps/Header';
import HamburgerMenu from '../comps/HamburgerMenu';
import Button from '../comps/CustomButton';
import Text from '../comps/CustomText';
import ResultPage from '../comps/pages/ResultPage';

export default {
    title:"My comps"
}

export const MyCard = () => <Card />

export const MyHeader = () => <Header />

export const MyHamburMenu = () => <HamburgerMenu />

export const CustomText = () => <Text />

export const CustomButton = () => <Button />