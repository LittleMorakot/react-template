import * as React from 'react';
import * as CSSModels from 'react-css-modules';

type MainProps = {

};

type MainState = {

};

const mainStyle = require('./index.scss');

export class MainComponent extends React.Component<MainProps, MainState> {
    constructor(props, context) {
        super(props, context);
    }
    public render() {
        return (
            <div className="container">
                Hello world!
            </div>
        );
    }
}