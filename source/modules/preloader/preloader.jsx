import React from 'react';
import classnames from 'classnames';

class Preloader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.preloaderNode = null;
        this.timeout = null;
        this.duration = 1000;
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    checkLoad() {
        return document.readyState === 'complete';
    }

    init() {
        if (this.checkLoad()) {
            this.animateFadeout();
        }

        window.onload = () => {
            this.animateFadeout();
        };
    }

    animateFadeout() {
        this.preloaderNode.classList.add('preloader--fadeout');
        // this.timeout;
        this.timeout = setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, this.duration);
    }

    render() {
        return (
            !!this.state.loading && (
                <section
                    ref={node => (this.preloaderNode = node)}
                    className={classnames('preloader')}
                >
                    <div className="preloader__content">
                        <div className="preloader__animation" />
                    </div>
                </section>
            )
        );
    }
}

export default Preloader;
