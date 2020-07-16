import React from 'react';
import { render } from 'react-dom';
import { Counter, Thumbup } from './react.jsx';

class EntryManager {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    Hits({ container, url, className }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter hit url={url} baseURL={this.baseURL} className={className} />, dom)
        }
    }
    Sessions({ container, url, className }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter session url={url} baseURL={this.baseURL} className={className} />, dom)
        }
    }
    Users({ container, url, className }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter user url={url} baseURL={this.baseURL} className={className} />, dom)
        }
    }
    Thumbup({ container, url, className }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Thumbup url={url} baseURL={this.baseURL} className={className} />, dom)
        }
    }
}

export function New(baseURL) {
    return new EntryManager(baseURL)
}

// export function hits({ container, baseURL }) {
//     const dom = document.getElementById(container);
//     render(<Counter hit baseURL={baseURL} />, dom)
// }

// export function sessions({ container, baseURL }) {
//     const dom = document.getElementById(container);
//     render(<Counter session baseURL={baseURL} />, dom)
// }

// export function users({ container, baseURL }) {
//     const dom = document.getElementById(container);
//     render(<Counter user baseURL={baseURL} />, dom)
// }

// export function thumbup({ container, baseURL }) {
//     const dom = document.getElementById(container);
//     render(<Thumbup baseURL={baseURL} />, dom)
// }
