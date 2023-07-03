import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import s from './Slider.module.scss'
function Slider({slides = []}) {
    return ( 
        <Splide className={s.slider} hasTrack={false} options={{
            perMove: 1,
            perPage: 4,
            rewind: false,
          }}>
            <SplideTrack style={{width:'100%', height:'100%'}}>
                {slides.map((slide,index)=>{
                    return (
                    <SplideSlide key={index} style={{height: '100%'}}>
                        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', height:'100%'}}>
                            <div style={{height: '100%', aspectRatio: '1/1.3'}}>
                                
                                {slide}
                            </div>
                        </div>
                    </SplideSlide>
                    )
                })}
            </SplideTrack>
        </Splide>
     );
}

export default Slider;