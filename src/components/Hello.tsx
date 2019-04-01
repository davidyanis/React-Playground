import React, { CSSProperties } from "react";

export interface HelloProps { 
    compiler: string; 
    framework: string; 
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style={centeredContent}>Hello from {this.props.compiler} and {this.props.framework}! </h1>;
    }
}

const centeredContent: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0'
}