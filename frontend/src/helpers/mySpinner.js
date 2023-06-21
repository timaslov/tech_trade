import {Spinner} from "spin.js";

export function createSpinner(target) {
    return new Spinner({
        lines: 13,
        length: 18,
        width: 7,
        radius: 25,
        scale: 1,
        corners: 1,
        speed: 1,
        rotate: 0,
        animation: 'spinner-line-fade-quick',
        direction: 1,
        color: '#818cf8',
        fadeColor: 'transparent',
        top: '50%',
        left: '50%',
        shadow: '0 0 1px transparent',
        zIndex: 2000000000,
        className: 'spinner',
        position: 'absolute',
    }).spin(target);
}

export function showSpinner(spinner_id) {
    const target = document.getElementById(spinner_id);
    return createSpinner(target);
}

export function hideSpinner(spinner) {
    spinner.stop();
}