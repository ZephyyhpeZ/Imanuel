import {createGlobalStyle} from 'styled-components';


export const lightTheme = {
    bodyColor: "#FFD600",
    textColor: "#262728",
    scrollbarTrackColor: "#ffd500",
    scrollbarThumbColor: "#564500",
    scrollbarThumbColorOnhover: "#262728",
    navbarColor:"#FFD600",
    backcodeColor: "2px #EBC400",
    lineColor: "#262728",
    projectLineColor: "#9B8720",
    transition: "transition-duration: 0.3s; transition-timing-function: ease;"
};

export const darkTheme = {
    bodyColor: "#191A19",
    textColor: "#4E9F3D",
    scrollbarTrackColor: "#4E9F3D",
    scrollbarThumbColor: "#306027",
    scrollbarThumbColorOnhover: "#262728",
    navbarColor:"#191A19",
    backcodeColor: "2px #428d3543",
    lineColor: "#4E9F3D",
    projectLineColor: "262728",
    transition: "transition-duration: 0.3s; transition-timing-function: ease;"
    
};


export const GlobalStyle = createGlobalStyle`

body{
    
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.textColor};
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    ${props => props.theme.transition}
    background: ${props => props.theme.scrollbarTrackColor};
}

::-webkit-scrollbar-thumb {
    ${props => props.theme.transition}
    background: ${props => props.theme.scrollbarThumbColor};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    ${props => props.theme.transition}
    background: ${props => props.theme.scrollbarThumbColorOnhover};
}

//NAVABAR

.navbar{

    background-color: ${props => props.theme.navbarColor};

}

.navbar .triangle{

    stroke: ${props => props.theme.lineColor};
}

.navbar .i{

    fill: ${props => props.theme.lineColor};
}

.navbar #eye path{
    fill: ${props => props.theme.lineColor};
}

.navbar #eye #bar{

    fill: ${props => props.theme.bodyColor};
}

//FLOATING BUTTON

.FloatingButton .small-line{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}

.FloatingButton .margin svg rect{
    ${props => props.theme.transition}
    fill: ${props => props.theme.lineColor};
}

//BACKCODE

.BackCode .number{
    ${props => props.theme.transition}
    -webkit-text-stroke: ${props => props.theme.backcodeColor};
}

//LINE

.line{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}


.About .line-left{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}

.About .dot-outer{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.bodyColor};
}

.About .dot-inner{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}

.Projects .line-left{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}

.Projects .dot-outer{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.bodyColor};
}

.Projects .dot-inner{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.lineColor};
}

//project

.Project .box .title-text{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.bodyColor};
    border: 3px solid ${props => props.theme.projectLineColor};;
}


.Project .box .textbox{
    ${props => props.theme.transition}
    background-color: ${props => props.theme.bodyColor};
    border: 3px solid ${props => props.theme.projectLineColor};
}


.App .barcode .barcodePath path{
    ${props => props.theme.transition}
    fill: ${props => props.theme.lineColor};
}

.FloatingButton g path{
    ${props => props.theme.transition}
    fill:${props => props.theme.lineColor};
}


.FloatingButton g rect{
    ${props => props.theme.transition}
    stroke: ${props => props.theme.lineColor};
    
}

`
    
