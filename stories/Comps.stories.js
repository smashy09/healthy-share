import React from 'react';
import Card from '../comps/Card';
import Header from '../comps/Header';
import Button from '../comps/CustomButton';
import Text from '../comps/CustomText';
import ResultCard from '../comps/ResultCard';
<<<<<<< HEAD
import ResultPage from '../pages/ResultPage';
import Survey1 from '../pages/Survey1';
import Survey2 from '../pages/Survey2';
import Survey3 from '../pages/Survey3';
import HomePage from '../pages/HomePage';
import InformationPage from '../pages/InformationPage';
import Animation from '../comps/Animation';
=======
import ResultCard from '../comps/ResultCard';
import Survey1 from '../pages/Survey1'
import Survey2 from '../pages/Survey2'
import Survey3 from '../pages/Survey3'
import HomePage from '../pages/HomePage'
import InformationPage from '../pages/InformationPage'
import ResultPage from '../pages/Results';
>>>>>>> fc84ead6670980ba361bc262b0d5300b06e3338a

export default {
    title:"My comps"
}

export const MyCard = () => <Card />;

export const MyHeader = () => <Header />;

export const MyHamburgerMenu = () => <HamburgerMenu />;

export const MyCustomText = () => <Text />;

export const MyCustomButton = () => <Button />;

export const CustomButton = () => <Button />

export const MySurvey1 = () => <Survey1 />

export const MySurvey2 = () => <Survey2 />

export const MySurvey3 = () => <Survey3 />

export const MyInformationPage = () => <InformationPage />

export const MyHomePage = () => <HomePage />
<<<<<<< HEAD

export const MyAnimationComp = () => <Animation />
=======
export const MyResultCard = () => <ResultCard />;

export const MyResults = () => <Results />;

export const MyResultPage = () => <ResultPage />;
>>>>>>> fc84ead6670980ba361bc262b0d5300b06e3338a
