import React from "react";

export default function iframe () {
    return (
        <div>
        <iframe
            src="https://www.youtube.com/embed/6hB3S9bIaco"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="iframe"
        ></iframe>
        </div>
    );
}