import React, { Component } from "react";
import axios from "axios";

export class Thumbup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            got: false,
            data: {
                thumbs: 0,
                thumbed: false,
                persistStorage: "",
            },
        }
        this.api = axios.create({
            baseURL: this.props.baseURL,
            withCredentials: true,
            timeout: 3000,
            headers: {
                'Accept': 'application/json'
            },
        });
        this.onThumbup = this.onThumbup.bind(this);
    }
    componentDidMount() {
        const { baseURL, url, initThumbs } = this.props;
        let persist = localStorage.getItem("_hits_p")
        this.api.post("/v1/hits.Counter/ThumbGet", {
            url: url,
            persistStorage: persist === "undefined" ? "" : persist,
            initThumbs: initThumbs === null ? 0 : initThumbs,
        }).then(
            (response) => {
                this.setState({ got: true, data: response.data })
                localStorage.setItem("_hits_p", response.data.persistStorage)
            }
        )
        return this.state
    }
    onThumbup(e) {
        const { url, initThumbs } = this.props;
        let persist = localStorage.getItem("_hits_p")
        this.api.post("/v1/hits.Counter/ThumbUp", {
            persistStorage: persist === "undefined" ? "" : persist,
            url: url,
            initThumbs: initThumbs === null ? 0 : initThumbs,
        }).then(
            (response) => {
                this.setState({ data: response.data })
                localStorage.setItem("_hits_p", response.data.persistStorage)
            }
        )
    }
    render() {
        const { thumbs, thumbed } = this.state.data;
        const { className } = this.props;
        if (!this.state.got) {
            return (<div className={className}></div>)
        }
        return (
            <div onClick={this.onThumbup} className={className} style={{ cursor: 'pointer' }}>
                <span>
                    {thumbed ? '★' : '☆'}
                </span>
                <span>x{thumbs}</span>
            </div>
        )
    }
}
