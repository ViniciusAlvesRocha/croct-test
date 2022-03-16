import React, { ReactElement, Suspense } from 'react';
import { Slot, Personalization } from '@croct/plug-react';
import StyledHomeBanner from './style.js'
import DeveloperImg from '../../images/developer.png';
import MarketerImg from '../../images/marketer.png';

type HomeBanner = {
    title: string,
    subtitle: string,
    cta: {
        label: string,
        link: string,
    },
    jobTitle?: string
};

const Banner = ():ReactElement => (
    <StyledHomeBanner data-testid="test-data-id" >
        <Suspense data-testid="test-data-id" fallback="Charging...">
            <Slot id="home-banner">
                {(user: HomeBanner) => (
                    <div>
                        <div className="banner-title">
                            <strong>{ user.title }</strong>
                        </div>
                        <div className="banner-subtitle" >
                            <p>{ user.subtitle }</p>
                        </div>
                        <a href={ user.cta.link } ><button className="btn-home-banner">{ user.cta.label }</button></a>
                    </div>
                )}
            </Slot>
        </Suspense>
        <Suspense fallback="Charging...">
            <Personalization expression="user's persona is 'developer'">
                {(isDeveloper: boolean) => isDeveloper
                    ? <img alt="Developer" src={ DeveloperImg }/>
                    : <img alt="Marketer" src={ MarketerImg }/>
                }
            </Personalization>
        </Suspense>
    </StyledHomeBanner>
);

export default Banner