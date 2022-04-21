import React from "react";
import YoutubeLogo from "resources/images/yt-logo.png";
import AppConfig from "App.config";

const Home = () => {
    return (
        <>
            <div className="row text-center">
                <div className="col">
                    <h3>Welcome to react component depot</h3>
                    <p>
                        A collection of various components with the video
                        tutorials on building them
                    </p>
                    <p>
                        Please visit the youtube channel for more videos on
                        react and some components
                    </p>
                    <p className="d-inline">
                  
                    </p>
                </div>
            </div>
            <div className="row py-5">
                {AppConfig.youtubeVideos.map(video => {
                    return (
                        <div className="col-md-4 p-3 card-hover" key={video.id}>
                            <div class="card">
                        
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
