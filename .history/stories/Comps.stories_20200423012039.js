import React from 'react';
import Card from '../comps/Card';
import Header from '../comps/Header';
import HamburgerMenu from '../comps/HamburgerMenu';
import Button from '../comps/CustomButton';
import Text from '../comps/CustomText';
import ResultCard from '../comps/ResultCard';
import ResultPage from '../pages/ResultPage';
import Survey1 from '../pages/Survey1'

export default {
    title:"My comps"
}

export const MyCard = () => <Card />;

export const MyHeader = () => <Header />;

export const MyHamburMenu = () => <HamburgerMenu />;

export const MyCustomText = () => <Text />;

export const MyCustomButton = () => <Button />;

export const MyResultCard = () => <ResultCard />;

export const MyResultPage = () => <ResultPage />;

export const CustomButton = () => <Button />

export const MySurvey1 = () => <Survey1 />
