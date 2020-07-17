import React from 'react';
import { render } from 'react-dom';
import { Counter, Thumbup } from './react.jsx';

class EntryManager {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    Hits({ container, url, readonly }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter hit url={url} baseURL={this.baseURL} readonly={readonly} />, dom)
        }
    }
    Sessions({ container, url, readonly }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter session url={url} baseURL={this.baseURL} readonly={readonly} />, dom)
        }
    }
    Users({ container, url, readonly }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Counter user url={url} baseURL={this.baseURL} readonly={readonly} />, dom)
        }
    }
    Thumbup({ container, url, className }) {
        const dom = document.getElementById(container)
        if (dom != null) {
            render(<Thumbup url={url} baseURL={this.baseURL} className={className} />, dom)
        }
    }
    Load() {
        const doms = document.querySelectorAll('[data-counter]')
        doms.forEach(dom => {
            if (dom.dataset.counter.toLowerCase() === "hits" ||
                dom.dataset.counter.toLowerCase() === "hit") {
                if (dom.dataset.readonly === "true") {
                    render(<Counter readonly hit url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                } else {
                    render(<Counter hit url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                }
            }
            if (dom.dataset.counter.toLowerCase() === "session" ||
                dom.dataset.counter.toLowerCase() === "sessions") {
                if (dom.dataset.readonly === "true") {
                    render(<Counter readonly session url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                } else {
                    render(<Counter session url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                }
            }
            if (dom.dataset.counter.toLowerCase() === "user" ||
                dom.dataset.counter.toLowerCase() === "users") {
                if (dom.dataset.readonly === "true") {
                    render(<Counter readonly user url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                } else {
                    render(<Counter user url={dom.dataset.url} baseURL={this.baseURL} />, dom)
                }
            }
            if (dom.dataset.counter.toLowerCase() === "thumbup" ||
                dom.dataset.counter.toLowerCase() === "thumbups") {
                render(<Thumbup url={dom.dataset.url} baseURL={this.baseURL} />, dom)
            }
        })
        console.log("load doms:", doms)
    }
}

export function New(baseURL) {
    return new EntryManager(baseURL)
}