import React from 'react';
import '../../index.css'

import {Header} from "../../commons";
import Categories from "../Categories/Categories";
import BrandsBlock from "./BrandsBlock";
import StayInTouch from "./StayInTouch";
import {Favorites} from "../Favorites/Favorites";

export const MainPage = props => {
    return (
        <React.Fragment>

                <Header callCenter={'1-855-324-5387'}/>
                <BrandsBlock/>
                <Favorites/>
                <Categories/>
                <StayInTouch/>
        </React.Fragment>
    )
}
