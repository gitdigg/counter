import React, { Component } from "react";
import axios from "axios";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            got: false,
            data: {
                hits: 0,
                ssns: 0,
                uids: 0,
                sessionStorage: "",
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
    }
    componentDidMount() {
        const { readonly, url, initHits, initSsns, initUids } = this.props;
        if (readonly) {
            let persist = localStorage.getItem("_hits_p")
            this.api.post("/v1/hits.Counter/HitGet", {
                url: url,
                initHits: initHits === null ? 0 : initHits,
                initSsns: initSsns === null ? 0 : initSsns,
                initUids: initUids === null ? 0 : initUids,
            }).then(
                (response) => {
                    this.setState({ got: true, data: response.data })
                }
            )
        } else {
            let session = sessionStorage.getItem("_hits_s")
            let persist = localStorage.getItem("_hits_p")
            this.api.post("/v1/hits.Counter/Hit", {
                persistStorage: persist === "undefined" ? "" : persist,
                sessionStorage: session === "undefined" ? "" : session,
                url: url,
                initHits: initHits === null ? 0 : initHits,
                initSsns: initSsns === null ? 0 : initSsns,
                initUids: initUids === null ? 0 : initUids,
            }).then(
                (response) => {
                    this.setState({ got: true, data: response.data })
                    sessionStorage.setItem("_hits_s", response.data.sessionStorage)
                    localStorage.setItem("_hits_p", response.data.persistStorage)
                }
            )
        }
        return this.state
    }

    render() {
        const { got } = this.state;
        const { hits, ssns, uids } = this.state.data;
        const { hit, session, user } = this.props;
        return (
            <>
                {
                    got && hit && hits
                }
                {
                    got && session && ssns
                }
                {
                    got && user && uids
                }
            </>
        )
    }
}
