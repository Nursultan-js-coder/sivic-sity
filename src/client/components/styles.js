function getColor(id) {
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
    ];

    return colors[id % 10];
}

export function mtuAreaStyle(feature) {
    return {
        fillColor: getColor(feature.properties.id),
        weight: 1,
        opacity: 1,
        color: '#4b4f4c',
        dashArray: "",
        fillOpacity: 0.6
    };
}

export const highlightStyle = {
    weight: 1,
    color: '#000000',
    dashArray: "",
    fillOpacity: 0.9
}
