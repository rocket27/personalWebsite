import React, { Component } from 'react';

class ParallaxContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layersNames: [
                'parallaxLayer01.png',
                'parallaxLayer02.png',
                'parallaxLayer03_cloud01.png',
                'parallaxLayer04.png',
                'parallaxLayer05.png',
                'parallaxLayer06_cloud02.png',
                'parallaxLayer07.png',
                'parallaxLayer08.png',
                'parallaxLayer09_cloud03.png',
            ],
        };
    }

    componentDidMount() {
        this.runParallax();
    }

    runParallax() {
        let layers = document.querySelectorAll('.parallax__layer');

        if (layers) {
            let layersNodes = Object.values(layers);

            let moveLayers = event => {
                const viewportHalf = 2,
                    layerStep = 100;

                let initialX = window.innerWidth / viewportHalf - event.pageX,
                    initialY = window.innerHeight / viewportHalf - event.pageY;

                layersNodes.forEach((layer, i) => {
                    let divider = i / layerStep,
                        positionX = initialX * divider,
                        positionY = initialY * divider,
                        layerStyle = layer.style,
                        transformString =
                            'translate3d(' +
                            positionX +
                            'px ,' +
                            positionY +
                            'px , 0)';
                    layerStyle.transform = transformString;
                });
            };

            window.addEventListener('mousemove', moveLayers);
        }
    }

    render() {
        return (
            <ul className="parallax" id="parallax">
                {this.state.layersNames.map((layerName, index) => (
                    <li className="parallax__layer" key={index}>
                        <img
                            className="parallax__image"
                            src={`./assets/images/parallax/${layerName}`}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default ParallaxContainer;
