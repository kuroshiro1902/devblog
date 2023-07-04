import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import s from './Slider.module.scss';
import { useState } from 'react';
function getPerPage() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 460) return 1;
    else if (windowWidth < 600) return 3;
    else if (windowWidth < 748) return 4;
    else if (windowWidth < 900) return 5;
    else if (windowWidth < 1200) return 6;
    else return 8;
}
function Slider({ children = [] }) {
    const [perPage, setPerPage] = useState(getPerPage());
    window.onresize = () => {
        setPerPage(getPerPage);
    };
    return (
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
    );
}

export default Slider;
