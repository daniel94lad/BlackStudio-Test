import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

import Slide01 from '../../images/P_01.jpg'
import Slide02 from '../../images/P_02.jpg'
import Slide03 from '../../images/P_03.jpg'
import Slide04 from '../../images/P_04.jpg'

const items = [
    {
        src: Slide01,
        altText:"Slide01-img",
        titulo:'Slide1-Paris',
        descripcion:'París es la capital de Francia y constituye una de las ciudades más importantes e influyentes del mundo. Desde el punto de vista turístico, París es una de las ciudades más visitadas de Europa. Con nuestra guía de París podrás descubrir todos los secretos de la ciudad además de conseguir los mejores consejos para viajar a París ahorrando dinero.',
    },
    {
        src: Slide02,
        altText:"Slide02-img",
        titulo:'Slide2-Evento Electronica',
        descripcion:'Este 26 de octubre se estará presentando primera vez ‘The Sound Of Q-dance’ en la Cuidad de México, con todo el poder del Hardstyle!',
    },
    {
        src: Slide03,
        altText:"Slide03-img",
        titulo:'Slide3-Evento navideño',
        descripcion:'En puebla la navidad se vive en grande y con muchas luces, disfruta del nuevo centro recien remodelado con la iluminacion mas espectaular que nunca.Cumpliendo con esto nuestro 30 añiversario de esta hermosa tradicion.',
    },
    {
        src: Slide04,
        altText:"Slide04-img",
        titulo:'Slide4-Cancun',
        descripcion:'Cancún se ubica en Quintana Roo, México, y las claras aguas del Caribe la rodean. Lo caracterizan sus hermosas playas cuya arena de coral es fina y blanca. Su mar de aguas transparentes posee un matiz impresionante de azules que va desde el esmeralda hasta el turquesa y que te hará repensar lo que significa la claridad.',
    }
]

class BlackCard extends Component{
    constructor(props){
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
    }
    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
      }

    hoverOn(){
        this.setState({activeIndex:0})
        
    }
    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('mouseover',this.hoverOn)
    }
    render(){
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem id="carou"
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                  hoverOn={()=>this.hoverOn()}
                >
                <Card>
                    <CardImg top src={item.src} alt={item.altText} style={{objectFit:"cover"}} />
                    <CardBody>
                    <CardTitle 
                    style={{fontWeight:'bold',fontSize:'1.2rem'}} 
                    className="mb-2">
                    {item.titulo}
                    </CardTitle>
                    <CardText>{item.descripcion}</CardText>
                    </CardBody>
                </Card>
                </CarouselItem>
              );
            });
            return (
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators className="d-none" items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl className="d-none" direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl className="d-none" direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
        );
    }
}

   

export default BlackCard;
