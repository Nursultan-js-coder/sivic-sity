export function mtuStyle(feature){
    return {
        opacity: 1,
        fillOpacity: 0.6,
        color: "#000",
        weight:1,
        fillColor: getColor(feature.properties.id)
    }
}

function getColor(id){
    const colors = [
        '#1170aa',
        '#2c5985',
        '#97cfd0',
        '#6dccda',
        '#31a1b3',
        '#8ace7e',
        '#a3acb9',
        '#7b848f',
        '#57606c',
        '#b3e0a6',
        '#c8d0d9',
    ]
    return colors[id %( colors.length-1)];
}


export const highlightStyle = {
    weight: 2,
    color: '#000000',
    fillOpacity: 0.9
}
export const originalStyle = {
    weight: 1,
    color: '#000000',
    fillOpacity: 0.6
}
