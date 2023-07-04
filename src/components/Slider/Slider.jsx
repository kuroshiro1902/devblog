import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import s from './Slider.module.scss';
import { useState } from 'react';
function getPerPage() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 800) return 1;
    else if (windowWidth < 1020) return 2;
    else if (windowWidth < 1240) return 3;
    else return 4;
}
function Slider({ children = [] }) {
    const [perPage, setPerPage] = useState(getPerPage());
    window.onresize = () => {
        setPerPage(getPerPage);
    };
    return (
        <div className={s.sliderCtn}>
            <Splide
                className={s.slider}
                hasTrack={false}
                options={{
                    perMove: 1,
                    perPage,
                    rewind: false,
                }}
            >
                <SplideTrack style={{ width: '100%', height: '100%' }}>
                    {children.map((slide, index) => {
                        return (
                            <SplideSlide key={index} style={{ height: '100%' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                    }}
                                >
                                    <div style={{ height: '100%', aspectRatio: '1/1.3' }}>{slide}</div>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </SplideTrack>
            </Splide>
        </div>
    );
}

export default Slider;
