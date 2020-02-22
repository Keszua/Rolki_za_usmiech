import React from 'react';
//import Svg, { Path } from "react-native-svg";

// const SvgBack = props => (
//     <Svg width={12} {...props}>
        

// <g display="inline">
// <title>Szprychy</title>
// <polygon id="svg_19" fill="none" points="252,97 289,201 399,203 311,270 343,376 252,312 162,376 194,270 106,203 216,201 252,97 289,201 " stroke="#000000" strokeWidth="30"/>
// <circle fill="none" stroke="url(#svg_32)" strokeWidth="33" cx="252" cy="252" r="235" id="svg_3"/>
// <circle fill="none" stroke="#4c4c4c" strokeWidth="12" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="33" id="svg_4"/>
// <circle fill="none" stroke="#7f7f00" strokeWidth="21" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="50" id="svg_5"/>
// <circle fill="none" stroke="#999999" strokeWidth="8" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="64" id="svg_7"/>
// <circle fill="none" stroke="#0000ff" strokeWidth="99" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="170" id="svg_8"/>
// <circle id="svg_1" r="75" cy="252" cx="252" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="15" stroke="#000000" fill="none"/>
// <circle id="svg_2" r="125" cy="252" cx="252" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="15" stroke="#000000" fill="none"/>
// </g>



        
//     </Svg>
// );


const SVG = React.forwardRef((props, ref) => (
    
    // <svg version="1.1" id="Warstwa_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
    //     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    //     x="0px" y="0px" width="822px" height="566.9px" viewBox="0 0 822 566.9" enable-background="new 0 0 822 566.9"
    //     xml:space="preserve">

    <svg ref={ref} version="1.1" id="svg" className="container" width="260" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" >
        <defs>
            <radialGradient id="svg_32" spreadMethod="pad">
            <stop stopColor="#0000ff" offset="0.9401"/>
            <stop stopColor="#6e00ff" stopOpacity="0.9609" offset="1"/>
            </radialGradient>
        </defs>
        <g display="inline">
            <title>Szprychy</title>
            <polygon id="svg_19" fill="none" points="252,97 289,201 399,203 311,270 343,376 252,312 162,376 194,270 106,203 216,201 252,97 289,201 " stroke="#000000" strokeWidth="30"/>
            <circle fill="none" stroke="url(#svg_32)" strokeWidth="33" cx="252" cy="252" r="235" id="svg_3"/>
            <circle fill="none" stroke="#4c4c4c" strokeWidth="12" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="33" id="svg_4"/>
            <circle fill="none" stroke="#7f7f00" strokeWidth="21" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="50" id="svg_5"/>
            <circle fill="none" stroke="#999999" strokeWidth="8" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="64" id="svg_7"/>
            <circle fill="none" stroke="#0000ff" strokeWidth="99" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="252" cy="252" r="170" id="svg_8"/>
            <circle id="svg_1" r="75" cy="252" cx="252" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="15" stroke="#000000" fill="none"/>
            <circle id="svg_2" r="125" cy="252" cx="252" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="15" stroke="#000000" fill="none"/>
        </g>
    </svg>


));


export default SVG;