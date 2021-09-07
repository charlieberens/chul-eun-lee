import React, { Component } from "react";
import { withRouter } from "next/router";

interface Props {
    router?: any;
    children?: any;
    "data-file"?: string;
}

class Translate extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const translations = require(`../translations/${this.props["data-file"]}`);
        const { locale } = this.props.router;

        const translate = (children) => {
            return React.Children.map(children, (childNode) => {
                let tl, atl;
                let attrs = {};
                if (childNode.props["data-tl"]) {
                    tl = translations[childNode.props["data-tl"]][locale];
                }
                if (childNode.props["data-atl"]) {
                    atl = childNode.props["data-atl"];

                    let atlName = atl.split(" ")[0];
                    let atlAttrs = atl.split(" ").slice(1);

                    atlAttrs.forEach((attr) => {
                        attrs[attr] = translations[atlName][attr][locale];
                    });
                }
                if (typeof childNode === "string") {
                    if (tl) {
                        return <span>{tl}</span>;
                    } else {
                        return childNode;
                    }
                }
                if (typeof childNode.props.children === "string") {
                    if (tl) {
                        return React.cloneElement(childNode, { ...attrs }, tl);
                    } else {
                        return React.cloneElement(childNode, { ...attrs });
                    }
                }
                return React.cloneElement(
                    childNode,
                    { ...attrs },
                    translate(childNode.props.children)
                );
            });
        };

        return <>{translate(this.props.children)}</>;
    }
}

export default withRouter(Translate);
